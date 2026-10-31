/**
 * Blog articles from the Soro RSS feed.
 *
 * To change the feed, paste the RSS feed URL from Soro (Settings -> Other Platform -> RSS Feed)
 * between the quotes below, OR add it in Vercel as the environment variable
 * SORO_FEED_URL.
 */
export const SORO_FEED_URL = "https://app.trysoro.com/api/rss/d73e56bf-858e-4f4c-b15f-77f40b92bab5";

export interface BlogPost {
  slug: string;
  title: string;
  /** Optional shorter title for Google (under 60 characters). */
  seoTitle?: string;
  description: string;
  html: string;
  image?: string;
  date?: string; // ISO date
  /** False when the feed only gave a short summary instead of the full article. */
  full: boolean;
  /** The article's original address from the feed. */
  link?: string;
}

export type BlogSummary = Omit<BlogPost, "html">;

const CACHE_MINUTES = 10;
let cache: { at: number; posts: BlogPost[] } | null = null;

export function feedUrl(): string {
  const fromEnv =
    typeof process !== "undefined" && process.env ? process.env.SORO_FEED_URL : undefined;
  return (fromEnv || SORO_FEED_URL || "").trim();
}

/** All articles: our own posts (src/data/posts.ts) plus Soro's feed, newest first. */
export async function loadPosts(): Promise<{ configured: boolean; posts: BlogPost[] }> {
  const { ownPosts } = await import("../data/posts");
  const feed = await loadFeedPosts();
  const slugs = new Set(ownPosts.map((p) => p.slug));
  const posts = [...ownPosts, ...feed.posts.filter((p) => !slugs.has(p.slug))].sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );
  return { configured: feed.configured || ownPosts.length > 0, posts };
}

/** Loads the Soro feed (server only). Cached for a few minutes. */
async function loadFeedPosts(): Promise<{ configured: boolean; posts: BlogPost[] }> {
  const url = feedUrl();
  if (!url) return { configured: false, posts: [] };
  if (cache && Date.now() - cache.at < CACHE_MINUTES * 60_000) {
    return { configured: true, posts: cache.posts };
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml, */*",
        "User-Agent": "Mozilla/5.0 (compatible; IslaVidaBlog/1.0; +https://www.islavidajmk.com)",
      },
    });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`Feed responded ${res.status}`);
    const posts = parseFeed(await res.text());
    cache = { at: Date.now(), posts };
    return { configured: true, posts };
  } catch (error) {
    console.error("Soro feed error:", error);
    return { configured: true, posts: cache?.posts ?? [] };
  }
}

/* ---------- RSS parsing ---------- */

function unwrap(value: string): string {
  const cdata = value.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return (cdata ? cdata[1] : value).trim();
}

function decodeEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Text of the first matching tag, e.g. tag(item, ["content:encoded"]). */
function tag(xml: string, names: string[]): string | undefined {
  for (const name of names) {
    const m = xml.match(new RegExp(`<${escapeRe(name)}(?:\\s[^>]*)?>([\\s\\S]*?)</${escapeRe(name)}>`, "i"));
    if (m && m[1].trim()) return unwrap(m[1]);
  }
  return undefined;
}

/** Text of the first tag whose name contains a fragment (e.g. any "...slug..." tag). */
function tagLike(xml: string, fragment: string): string | undefined {
  const re = new RegExp(
    `<([\\w:.-]*${fragment}[\\w:.-]*)(?:\\s[^>]*)?>([\\s\\S]*?)</\\1>`,
    "gi",
  );
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) {
    if (m[2].trim()) return unwrap(m[2]);
  }
  return undefined;
}

function stripTags(html: string): string {
  const text = decodeEntities(decodeEntities(html).replace(/<[^>]+>/g, " "));
  return text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function shorten(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "") + "…";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function slugFromLink(link?: string): string | undefined {
  if (!link) return undefined;
  try {
    const u = new URL(decodeEntities(link));
    const post = u.searchParams.get("post");
    if (post) return post;
    const last = u.pathname.split("/").filter(Boolean).pop();
    return last && last !== "blog" ? last : undefined;
  } catch {
    return undefined;
  }
}

/** Removes anything unsafe or duplicated from the article HTML. */
function cleanHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"')
    .replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/i, "") // the page shows its own title
    .replace(/<img(?![^>]*\bloading=)/gi, '<img loading="lazy"')
    .trim();
}

export function parseFeed(xml: string): BlogPost[] {
  const items = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) ?? [];
  const seen = new Set<string>();
  const posts: BlogPost[] = [];

  for (const item of items) {
    const title = stripTags(tag(item, ["title"]) ?? "");
    if (!title) continue;

    const fullContent = tag(item, ["content:encoded", "content"]);
    let html = fullContent ?? tag(item, ["description", "summary"]) ?? "";
    if (/&lt;\/?(p|h2|h3|ul|img|a)\b/i.test(html)) html = decodeEntities(html);
    html = cleanHtml(html);

    const link =
      tag(item, ["link"]) ?? item.match(/<link[^>]*\bhref="([^"]+)"/i)?.[1] ?? tag(item, ["guid"]);
    const slug = slugify(tagLike(item, "slug") ?? slugFromLink(link) ?? title) || slugify(title);
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);

    const metaDescription = tagLike(item, "meta[_-]?desc") ?? tag(item, ["description", "summary", "excerpt"]);
    const description = shorten(stripTags(metaDescription ?? "") || stripTags(html));

    const image =
      item.match(/<(?:media:content|media:thumbnail|enclosure)[^>]*\burl="([^"]+)"/i)?.[1] ??
      (tagLike(item, "image") ?? tagLike(item, "thumbnail"))?.match(/https?:\/\/[^\s<"]+/)?.[0] ??
      html.match(/<img[^>]*\bsrc="([^"]+)"/i)?.[1];

    // A feed that only carries a short description is treated as a summary.
    const full = Boolean(fullContent) || stripTags(html).length > 1200;
    if (!/<(p|h2|h3|ul|ol)\b/i.test(html)) html = `<p>${html}</p>`;

    const rawDate = tag(item, ["pubDate", "published", "dc:date", "updated"]);
    const parsed = rawDate ? new Date(rawDate) : undefined;

    posts.push({
      slug,
      title,
      description,
      html,
      image: image ? decodeEntities(image) : undefined,
      date: parsed && !isNaN(parsed.getTime()) ? parsed.toISOString() : undefined,
      full,
      link: link ? decodeEntities(link) : undefined,
    });
  }

  return posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function formatDate(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

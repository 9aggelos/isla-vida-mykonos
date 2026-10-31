import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBlogPost } from "../../lib/blog";
import { formatDate } from "../../lib/soroFeed";
import { BlogPostCard } from "../../components/BlogPostCard";

const BASE_URL = "https://www.islavidajmk.com";
const WHATSAPP = "https://wa.me/306948041931";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const result = await getBlogPost({ data: params.slug });
    if (!result.post) throw notFound();
    return { post: result.post, related: result.related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `${BASE_URL}/blog/${post.slug}`;
    const image = post.image?.startsWith("/") ? `${BASE_URL}${post.image}` : post.image;
    const title = post.seoTitle ?? (post.title.length > 52 ? post.title : `${post.title} | Isla Vida`);
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      ...(image ? { image: [image] } : {}),
      ...(post.date ? { datePublished: post.date, dateModified: post.date } : {}),
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Isla Vida Mykonos", url: BASE_URL },
      publisher: { "@type": "Organization", name: "Isla Vida Mykonos", url: BASE_URL },
    };
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:site_name", content: "Isla Vida Mykonos" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        ...(image ? [{ property: "og:image", content: image }] : []),
        ...(post.date ? [{ property: "article:published_time", content: post.date }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-foreground">Article not found</h1>
      <p className="mt-4 text-muted-foreground">It may have moved. Have a look at our latest guides instead.</p>
      <Link to="/blog" className="mt-8 inline-block font-medium underline">
        Back to the blog
      </Link>
    </div>
  ),
});

const proseClasses = [
  "text-lg leading-relaxed text-foreground/90",
  "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground sm:[&_h2]:text-3xl",
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground",
  "[&_p]:my-5 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-2",
  "[&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4",
  "[&_strong]:font-semibold [&_strong]:text-foreground",
  "[&_img]:my-8 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-2xl",
  "[&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-5 [&_blockquote]:italic",
  "[&_table]:my-8 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_td]:border [&_td]:border-border [&_td]:p-2 [&_th]:border [&_th]:border-border [&_th]:p-2 [&_th]:text-left",
].join(" ");

function ArticlePage() {
  const { post, related } = Route.useLoaderData();

  return (
    <article className="bg-background">
      <header className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-sm text-muted-foreground hover:underline">
          ← The Isla Vida Mykonos Guide
        </Link>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        {post.date ? (
          <time dateTime={post.date} className="mt-4 block text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
        ) : null}
      </header>

      {post.image ? (
        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <img src={post.image} alt={post.title} className="aspect-[16/9] w-full rounded-2xl object-cover" />
        </div>
      ) : null}

      <div
        className={`mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 ${proseClasses}`}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {!post.full && post.link && !post.link.includes("islavidajmk.com") ? (
        <div className="mx-auto -mt-4 max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
          <a
            href={post.link}
            target="_blank"
            rel="noopener"
            className="inline-block rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
          >
            Continue reading →
          </a>
        </div>
      ) : null}

      <aside className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-muted/40 p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">Planning your Mykonos trip?</h2>
          <p className="mt-3 text-muted-foreground">
            Private airport and port transfers from €36 per vehicle, villas, yachts and VIP concierge, all
            arranged by our local team.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Message us on WhatsApp
            </a>
            <Link
              to="/mykonos-airport-transfers"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              Airport transfers
            </Link>
            <Link
              to="/mykonos-port-transfers"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              Port transfers
            </Link>
          </div>
        </div>
      </aside>

      {related.length > 0 ? (
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">More from the guide</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogPostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}

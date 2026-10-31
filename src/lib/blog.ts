import { createServerFn } from "@tanstack/react-start";
import { loadPosts, type BlogPost, type BlogSummary } from "./soroFeed";

/** The article list for /blog (without the full text, to keep the page light). */
export const getBlogList = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ configured: boolean; posts: BlogSummary[] }> => {
    const { configured, posts } = await loadPosts();
    return { configured, posts: posts.map(({ html: _html, ...summary }) => summary) };
  },
);

/** One full article, by its slug. */
export const getBlogPost = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data }): Promise<{ post: BlogPost | null; related: BlogSummary[] }> => {
    const { posts } = await loadPosts();
    const post = posts.find((p) => p.slug === data) ?? null;
    const related = posts
      .filter((p) => p.slug !== data)
      .slice(0, 3)
      .map(({ html: _html, ...summary }) => summary);
    return { post, related };
  });

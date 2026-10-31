import { createFileRoute, redirect } from "@tanstack/react-router";
import { getBlogList } from "../../lib/blog";
import { BlogPostCard } from "../../components/BlogPostCard";

const BASE_URL = "https://www.islavidajmk.com";
const TITLE = "Mykonos Travel Guide & Blog | Isla Vida";
const DESCRIPTION =
  "Mykonos travel tips, transfer guides, beaches, villas and nightlife from Isla Vida, the island's private transfer, chauffeur and concierge team.";

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>): { post?: string } =>
    typeof search.post === "string" && search.post ? { post: search.post } : {},
  loaderDeps: ({ search }) => ({ post: search.post }),
  loader: async ({ deps }) => {
    const data = await getBlogList();
    // Old widget links (/blog?post=...) move permanently to the new article pages.
    if (data.configured && deps.post) {
      throw redirect({ to: "/blog/$slug", params: { slug: deps.post }, statusCode: 301 });
    }
    return data;
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:site_name", content: "Isla Vida Mykonos" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${BASE_URL}/blog` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { configured, posts } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          The Isla Vida Mykonos Guide
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Travel tips, Mykonos guides, and updates from the island's private transfer & chauffeur team.
        </p>

        {!configured || posts.length === 0 ? (
          <p className="mt-10 text-muted-foreground">New articles are on their way. Please check back soon.</p>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

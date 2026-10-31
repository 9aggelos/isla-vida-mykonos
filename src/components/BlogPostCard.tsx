import { Link } from "@tanstack/react-router";
import { formatDate, type BlogSummary } from "../lib/soroFeed";

export function BlogPostCard({ post }: { post: BlogSummary }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {post.date ? (
          <time dateTime={post.date} className="text-xs uppercase tracking-wider text-muted-foreground">
            {formatDate(post.date)}
          </time>
        ) : null}
        <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-foreground group-hover:underline">
          {post.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
        <span className="mt-auto pt-4 text-sm font-medium text-foreground">Read more →</span>
      </div>
    </Link>
  );
}

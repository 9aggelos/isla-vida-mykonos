import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Isla Vida Mykonos" },
      {
        name: "description",
        content:
          "Read the Isla Vida Mykonos journal for Mykonos travel tips, luxury transfer guides, insider itineraries, and service updates.",
      },
      {
        property: "og:site_name",
        content: "Isla Vida Mykonos",
      },
      { property: "og:title", content: "Blog — Isla Vida Mykonos" },
      {
        property: "og:description",
        content:
          "Read the Isla Vida Mykonos journal for Mykonos travel tips, luxury transfer guides, insider itineraries, and service updates.",
      },
      { property: "og:url", content: "https://www.islavidajmk.com/blog" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.islavidajmk.com/blog" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const inject = () => {
      if (!containerRef.current) return;
      const script = document.createElement("script");
      script.src = "https://app.trysoro.com/api/embed/80663ee7-416f-42ea-919d-80bf23aa9701";
      script.defer = true;
      script.id = "soro-blog-embed";
      containerRef.current.appendChild(script);
    };

    // Load the third-party embed strictly after the page has finished loading
    if (document.readyState === "complete") {
      const id = window.setTimeout(inject, 0);
      return () => {
        window.clearTimeout(id);
        container.innerHTML = "";
      };
    }

    window.addEventListener("load", inject, { once: true });
    return () => {
      window.removeEventListener("load", inject);
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          The Isla Vida Mykonos Guide
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Travel tips, Mykonos guides, and updates from the island's private transfer & chauffeur team.
        </p>
        <div
          id="soro-blog"
          ref={containerRef}
          className="mt-10 min-h-[400px]"
          aria-live="polite"
        />
      </div>
    </div>
  );
}

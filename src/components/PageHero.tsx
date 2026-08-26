import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  cta?: { to: string; label: string };
  children?: ReactNode;
}

export function PageHero({ title, subtitle, image, cta, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">{subtitle}</p>
          {cta && (
            <div className="mt-8">
              <Link
                to={cta.to}
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

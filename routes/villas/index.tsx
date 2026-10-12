import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { VillaCard } from "../../components/VillaCard";
import { VillaRequestDialog } from "../../components/VillaRequestDialog";
import { villas } from "../../data/villas";
import heroImage from "../../assets/villas-hero.webp";

const TITLE = "Luxury Villas in Mykonos: Private Villa Rentals | Isla Vida";
const DESCRIPTION =
  "Hand-picked luxury villas in Mykonos with private pools and sea views. Browse the portfolio and request your dates. Private transfers and concierge available on request.";

export const Route = createFileRoute("/villas/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:site_name", content: "Isla Vida Mykonos" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://www.islavidajmk.com/villas" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.islavidajmk.com/villas" }],
  }),
  component: VillasPage,
});

function VillasPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Luxury villas in Mykonos"
        subtitle="A hand-picked portfolio of private villas across the island. Choose the one you like and send us your dates."
        image={heroImage}
      />

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
              Villa portfolio
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Find your villa
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Request any villa and we reply with availability and the exact rate for your
              dates.
            </p>
          </div>

          {villas.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {villas.map((villa) => (
                <VillaCard key={villa.slug} villa={villa} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-lg border border-border bg-card p-8 text-center shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-card-foreground">
                Our portfolio is being prepared
              </h3>
              <p className="mt-3 text-muted-foreground">
                Tell us your dates and group size and we will send you villas that match.
              </p>
              <VillaRequestDialog>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                >
                  Request a villa
                </button>
              </VillaRequestDialog>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

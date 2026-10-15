import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Building2, MessageCircle, Sparkles } from "lucide-react";
import { PageHero } from "../../components/PageHero";
import { VillaCard } from "../../components/VillaCard";
import { VillaRequestDialog } from "../../components/VillaRequestDialog";
import { villas } from "../../data/villas";
import heroImage from "../../assets/villas-hero.webp";

const TITLE = "Luxury Villas in Mykonos: Private Villa Rentals & Hotels | Isla Vida";
const DESCRIPTION =
  "Hand-picked luxury villas in Mykonos with private pools and sea views, plus help finding the right hotel or holiday rental. Send your dates on WhatsApp.";

const WHATSAPP_STAY = `https://wa.me/306948041931?text=${encodeURIComponent(
  "Hello Isla Vida, I am looking for a hotel or holiday rental in Mykonos. My dates are:",
)}`;

/** Questions shown at the bottom of the page and sent to Google as an FAQ. */
const FAQS = [
  {
    question: "Can you find me a hotel in Mykonos instead of a villa?",
    answer:
      "Yes. Tell us your dates, budget and the kind of stay you like, from a five-star resort on the beach to a boutique hotel in Mykonos Town, and we send you a shortlist of hotels that match and handle the booking.",
  },
  {
    question: "Can you help me find an Airbnb or holiday rental in Mykonos?",
    answer:
      "Yes. If you prefer an apartment or holiday home, the kind of stay many guests look for on Airbnb, we suggest rentals that suit your group and arrange transfers and concierge around your stay. Isla Vida is an independent local concierge and is not affiliated with Airbnb.",
  },
  {
    question: "Can you arrange transfers and reservations wherever we stay?",
    answer:
      "Yes. Whether you stay in one of our villas, a hotel or a rental, we arrange your airport or port transfer, a chauffeur at your disposal, and tables at beach clubs, restaurants and nightlife.",
  },
];

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
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
              Private villa rentals in Mykonos
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold text-foreground sm:text-5xl">
              Your private villa in Mykonos, hand-picked
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Every villa in our portfolio is chosen by our local team for its setting, its
              privacy and the way it lives: private pools, sea and sunset views, and room to enjoy
              the island at your own pace. Request any villa and we reply on WhatsApp with
              availability and the exact rate for your dates, with transfers, a private chef or a
              yacht day added on request.
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

      {/* Hotels and holiday rentals */}
      <section className="section-padding border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
              Prefer a hotel or a rental?
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold text-foreground sm:text-5xl">
              Mykonos hotels and holiday rentals, found for you
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Not every stay needs a villa. If you would rather wake up in a five-star hotel on the
              beach, a boutique hotel in Mykonos Town, or a stylish apartment like the ones you
              would search for on Airbnb, tell us what you have in mind. We shortlist the hotels and
              holiday rentals in Mykonos that match your dates, budget and style, take care of the
              booking, and arrange everything around it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Luxury and boutique hotels",
                text: "Five-star resorts by the sea, adults-only hideaways and boutique hotels in the heart of Mykonos Town.",
              },
              {
                icon: BedDouble,
                title: "Apartments and holiday rentals",
                text: "Private apartments, suites and holiday homes for couples, families and groups, without the endless searching.",
              },
              {
                icon: Sparkles,
                title: "One local contact",
                text: "Your transfer, beach club tables, restaurants and nights out arranged around your stay, wherever you sleep.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-7 shadow-sm">
                <Icon className="h-7 w-7 text-navy-accent" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={WHATSAPP_STAY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              <MessageCircle className="h-4 w-4" />
              Ask us to find your stay
            </a>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-foreground">Questions about staying in Mykonos</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold text-foreground">
                    {faq.question}
                    <span aria-hidden="true" className="text-2xl text-navy-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

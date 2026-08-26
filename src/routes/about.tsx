import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import aboutImage from "../assets/island-tours.webp";
import { Clock, MapPin, Shield, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Isla Vida — Local Mykonos Chauffeur Company" },
      {
        name: "description",
        content:
          "Isla Vida is a locally based Mykonos transfer & chauffeur company. Punctual, discreet drivers with deep island knowledge — trusted by villas, yachts and VIP guests.",
      },
      { property: "og:title", content: "About Isla Vida — Local Mykonos Chauffeur Company" },
      {
        property: "og:description",
        content:
          "Locally based private transfer and chauffeur service in Mykonos. Reliable, discreet, premium.",
      },
      { property: "og:url", content: "https://isla-vida-mykonos.lovable.app/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://isla-vida-mykonos.lovable.app/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Punctuality",
    description:
      "We respect your time. Every pickup is planned, monitored, and executed with precision.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Discretion",
    description:
      "Privacy is part of our service. Our drivers are trained to be professional and unobtrusive.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Hospitality",
    description:
      "We treat guests like family. From bottled water to local tips, we make every ride feel welcome.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Local Knowledge",
    description:
      "Born and raised on Mykonos, we know the best routes, hidden beaches, and finest tables.",
  },
];

function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Locally based, globally minded"
        subtitle="Isla Vida Mykonos combines deep local roots with premium hospitality standards to deliver seamless transfers across the island."
        image={aboutImage}
        cta={{ to: "/contact", label: "Get in touch" }}
      />

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
                About us
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
                The Mykonos transfer service you can trust
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Isla Vida Mykonos was founded on a simple belief: getting around the island should
                  be as beautiful and effortless as the island itself. We specialize in private
                  transfers, airport and port pickups, chauffeur services, and custom island tours.
                </p>
                <p>
                  Our team is made up of local professionals who know Mykonos inside and out. We
                  operate 24/7, covering hotels, villas, marinas, and every destination on the
                  island. Whether you are arriving for a family holiday, a wedding, or a corporate
                  event, we make sure your journey is smooth, safe, and discreet.
                </p>
                <p>
                  From the moment you book until you reach your destination, every detail is handled
                  with care. We monitor flights and ferries, adjust to schedule changes, and provide
                  clear, friendly communication throughout.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Mykonos windmills and coastal view"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-navy-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our values
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background text-navy-accent">
                  {value.icon}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Shield, Star, Users } from "lucide-react";
import heroVan from "../assets/hero-van.jpg";
import airportTransfer from "../assets/airport-transfer.jpg";
import portTransfer from "../assets/port-transfer.jpg";
import chauffeurService from "../assets/chauffeur-service.jpg";
import islandTours from "../assets/island-tours.jpg";
import groupTransport from "../assets/group-transport.jpg";
import { ServiceCard } from "../components/ServiceCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isla Vida Mykonos — Private Transfers & Chauffeur Services" },
      {
        name: "description",
        content:
          "Private transfers, airport & port transfers, and luxury chauffeur services in Mykonos. Professional drivers, 24/7 availability.",
      },
      {
        property: "og:title",
        content: "Isla Vida Mykonos — Private Transfers & Chauffeur Services",
      },
      {
        property: "og:description",
        content:
          "Premium private transfers and chauffeur services in Mykonos. Available 24/7.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  {
    title: "Airport Transfers",
    description:
      "Seamless arrivals and departures from Mykonos Airport (JMK). Meet-and-greet, luggage assistance, and direct transfers to your hotel or villa.",
    image: airportTransfer,
    to: "/services",
  },
  {
    title: "Port Transfers",
    description:
      "Reliable ferry and yacht connections from Mykonos New Port. Timely pickups and drop-offs, even when schedules change.",
    image: portTransfer,
    to: "/services",
  },
  {
    title: "Chauffeur Services",
    description:
      "Private chauffeur at your disposal for beach clubs, restaurants, nightlife, and events. Discreet, professional, and always on time.",
    image: chauffeurService,
    to: "/services",
  },
  {
    title: "Private Island Tours",
    description:
      "Curated Mykonos tours to hidden beaches, windmills, Little Venice, and the island's finest viewpoints at your own pace.",
    image: islandTours,
    to: "/services",
  },
  {
    title: "Group Transportation",
    description:
      "Spacious luxury vans and minibuses for families, weddings, corporate groups, and events. Comfort for up to 20 passengers.",
    image: groupTransport,
    to: "/services",
  },
];

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroVan}
            alt="Luxury white van on a Mykonos coastal road with white Cycladic buildings and blue sea"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        </div>
        <div className="relative mx-auto grid min-h-[70vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
          <img
            src="/logo-isla-vida-transparent.png"
            alt="Isla Vida Mykonos logo"
            className="mb-6 h-auto w-36 drop-shadow-lg sm:w-44"
          />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Private Transfers & Chauffeur Services
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Arrive in Mykonos with elegance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              Isla Vida Mykonos offers premium private transfers, airport and port
              services, and dedicated chauffeur experiences across the island — 24/7.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
              >
                Book your transfer
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">24/7 Service</p>
                <p className="text-sm text-muted-foreground">Always available</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Professional Drivers</p>
                <p className="text-sm text-muted-foreground">Licensed & discreet</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Luxury Fleet</p>
                <p className="text-sm text-muted-foreground">Premium vehicles</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Local Experts</p>
                <p className="text-sm text-muted-foreground">Know every corner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
              What we offer
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Premium transportation in Mykonos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From airport arrivals to island tours, we deliver seamless, discreet,
              and comfortable travel experiences.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-navy-muted/30">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
            Guest reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Rated 5.0 on Google
          </h2>
          <div className="mt-6 flex items-center justify-center gap-1 text-navy-accent">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Based on 22 verified reviews from travelers across Mykonos.
          </p>
          <div className="mt-8">
            <a
              href="https://www.google.com/search?q=ISLA+VIDA+MYKONOS+-+Private+Transfers+%26+Chauffeur+Services#lrd=0x0:0x130f5a1a2fbe9f23,1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Read reviews on Google
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to experience Mykonos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-muted">
            Book your private transfer or chauffeur service today and travel the island
            with confidence and style.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
            >
              Request a booking
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

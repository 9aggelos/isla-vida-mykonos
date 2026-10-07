import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "../components/PageHero";
import { ServiceCard } from "../components/ServiceCard";
import airportTransfer from "../assets/airport-transfer.webp";
import portTransfer from "../assets/port-transfer.webp";
import chauffeurService from "../assets/chauffeur-service.webp";
import islandTours from "../assets/island-tours.webp";
import groupTransport from "../assets/group-transport.webp";
import villaImage from "../assets/mykonos-pool-view.webp";
import helicopterImage from "../assets/helicopter-mykonos.webp";
import yachtImage from "../assets/yacht.avif";
import {
  Anchor,
  ArrowRight,
  Check,
  Compass,
  Home,
  Navigation,
  Plane,
  Ship,
  UserCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mykonos Transfer Services: Airport, Port, VIP & Groups | Isla Vida" },
      {
        name: "description",
        content:
          "Airport (JMK) and port transfers, chauffeur service, island tours and group transport in Mykonos, plus villa rentals, yacht and helicopter charters. 24/7.",
      },
      {
        name: "keywords",
        content:
          "Mykonos airport transfer, JMK airport taxi, Mykonos port transfer, VIP transfer Mykonos, helicopter transfer Mykonos, villa transfer Mykonos, group transport Mykonos",
      },
      {
        property: "og:site_name",
        content: "Isla Vida Mykonos",
      },
      { property: "og:title", content: "Mykonos Transfer Services: Airport, Port, VIP & Groups | Isla Vida" },
      {
        property: "og:description",
        content:
          "Airport and port transfers, chauffeur service and group transport in Mykonos, plus villas, yacht and helicopter charters. 24/7.",
      },
      { property: "og:url", content: "https://www.islavidajmk.com/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.islavidajmk.com/services" },
    ],
  }),
  component: ServicesPage,
});
interface Service {
  /** Used for links that jump straight to this service: /services#<id> */
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  features: string[];
  /** Optional link to a page with more detail. */
  link?: { to: string; label: string };
}

const services: Service[] = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Seamless arrivals and departures from Mykonos Airport (JMK). Our driver meets you at the terminal, assists with luggage, and delivers you directly to your hotel or villa.",
    image: airportTransfer,
    icon: <Plane className="h-5 w-5" />,
    features: [
      "Meet & greet at arrivals",
      "Flight monitoring",
      "Luggage assistance",
      "Direct door-to-door service",
    ],
  },
  {
    id: "port-transfers",
    title: "Port Transfers",
    description:
      "Timely ferry and yacht connections from Mykonos New Port. We track arrivals and adjust pickups, so you never wait when your schedule changes.",
    image: portTransfer,
    icon: <Ship className="h-5 w-5" />,
    features: [
      "Ferry & yacht pickup",
      "Real-time schedule tracking",
      "Direct transfers to hotels",
      "Group coordination",
    ],
  },
  {
    id: "chauffeur-services",
    title: "Chauffeur Services",
    description:
      "A private chauffeur at your disposal for restaurants, beach clubs, nightlife, shopping, and events. Travel with discretion and comfort throughout your stay.",
    image: chauffeurService,
    icon: <UserCheck className="h-5 w-5" />,
    features: [
      "Hourly & daily hire",
      "Professional English-speaking drivers",
      "Flexible itineraries",
      "Nightlife & dining transfers",
    ],
  },
  {
    id: "private-island-tours",
    title: "Private Island Tours",
    description:
      "Discover Mykonos at your own pace. Visit the iconic windmills, Little Venice, hidden beaches, and panoramic viewpoints with a local expert behind the wheel.",
    image: islandTours,
    icon: <Compass className="h-5 w-5" />,
    features: [
      "Custom routes",
      "Local recommendations",
      "Beach & viewpoint access",
      "Half-day & full-day tours",
    ],
  },
  {
    id: "group-transportation",
    title: "Group Transportation",
    description:
      "Luxury vans and minibuses for families, weddings, corporate retreats, and events. Travel together with comfort, space, and premium service.",
    image: groupTransport,
    icon: <Users className="h-5 w-5" />,
    features: [
      "Up to 20 passengers",
      "Event & wedding logistics",
      "Multiple vehicles on request",
      "Spacious luggage capacity",
    ],
  },
  {
    id: "luxury-villas",
    title: "Luxury Villa & Hotel Reservations",
    description:
      "Bespoke luxury villa rentals and five-star hotel reservations in Mykonos, with access to the island's most prestigious accommodations, tailored to your exact wishes.",
    image: villaImage,
    icon: <Home className="h-5 w-5" />,
    features: [
      "Private luxury villas",
      "Five-star hotel reservations",
      "Tailored to your dates and group",
      "Transfers arranged with your stay",
    ],
    link: { to: "/villas", label: "See the villa portfolio" },
  },
  {
    id: "helicopter-chartering",
    title: "Helicopter Chartering",
    description:
      "Private helicopter charters all over Greece, combined with luxury ground transportation and VIP concierge services. Discreet, punctual, and tailored to your schedule.",
    image: helicopterImage,
    icon: <Navigation className="h-5 w-5" />,
    features: [
      "Private charters across Greece",
      "Ground transfers on both ends",
      "VIP concierge services",
      "Bespoke itineraries",
    ],
  },
  {
    id: "yacht-catamaran-chartering",
    title: "Yacht & Catamaran Chartering",
    description:
      "Bespoke yacht and catamaran charters in Mykonos and across the Greek islands, from private day cruises to boat taxi transfers to the island's premier beach venues.",
    image: yachtImage,
    icon: <Anchor className="h-5 w-5" />,
    features: [
      "Day cruises to Delos and Rhenia",
      "Sunset tours",
      "Half-day trips",
      "Boat taxi to beach venues",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Premium services tailored to you"
        subtitle="From airport arrivals to private villas and yacht days, every service with Isla Vida is designed for comfort, discretion, and reliability."
        image={airportTransfer}
        cta={{ to: "/contact", label: "Request a quote" }}
      />

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
              What we offer
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Transfers and lifestyle services in Mykonos
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="flex scroll-mt-28 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm lg:flex-row"
              >
                <div className="lg:w-2/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover lg:h-full"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center gap-3 text-navy-accent">
                    {service.icon}
                    <h3 className="font-display text-2xl font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link
                      to={service.link.to}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy-accent transition-colors hover:text-navy"
                    >
                      {service.link.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

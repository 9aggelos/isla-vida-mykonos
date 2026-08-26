import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { ServiceCard } from "../components/ServiceCard";
import airportTransfer from "../assets/airport-transfer.webp";
import portTransfer from "../assets/port-transfer.webp";
import chauffeurService from "../assets/chauffeur-service.webp";
import islandTours from "../assets/island-tours.webp";
import groupTransport from "../assets/group-transport.webp";
import { Check, Plane, Ship, UserCheck, Compass, Users } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mykonos Transfer Services: Airport, Port, VIP & Groups" },
      {
        name: "description",
        content:
          "Mykonos airport (JMK) transfers, port pickups, VIP & helicopter coordination, villa transfers and group transportation. Premium chauffeur service, 24/7.",
      },
      {
        name: "keywords",
        content:
          "Mykonos airport transfer, JMK airport taxi, Mykonos port transfer, VIP transfer Mykonos, helicopter transfer Mykonos, villa transfer Mykonos, group transport Mykonos",
      },
      { property: "og:title", content: "Mykonos Transfer Services: Airport, Port, VIP & Groups" },
      {
        property: "og:description",
        content:
          "Airport, port, VIP, villa and group transfers in Mykonos. Premium chauffeur service, 24/7.",
      },
      { property: "og:url", content: "https://isla-vida-mykonos.lovable.app/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://isla-vida-mykonos.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Airport Transfers",
    description:
      "Seamless arrivals and departures from Mykonos Airport (JMK). Our driver meets you at the terminal, assists with luggage, and delivers you directly to your hotel or villa.",
    image: airportTransfer,
    to: "/contact",
    icon: <Plane className="h-5 w-5" />,
    features: [
      "Meet & greet at arrivals",
      "Flight monitoring",
      "Luggage assistance",
      "Direct door-to-door service",
    ],
  },
  {
    title: "Port Transfers",
    description:
      "Timely ferry and yacht connections from Mykonos New Port. We track arrivals and adjust pickups, so you never wait when your schedule changes.",
    image: portTransfer,
    to: "/contact",
    icon: <Ship className="h-5 w-5" />,
    features: [
      "Ferry & yacht pickup",
      "Real-time schedule tracking",
      "Direct transfers to hotels",
      "Group coordination",
    ],
  },
  {
    title: "Chauffeur Services",
    description:
      "A private chauffeur at your disposal for restaurants, beach clubs, nightlife, shopping, and events. Travel with discretion and comfort throughout your stay.",
    image: chauffeurService,
    to: "/contact",
    icon: <UserCheck className="h-5 w-5" />,
    features: [
      "Hourly & daily hire",
      "Professional English-speaking drivers",
      "Flexible itineraries",
      "Nightlife & dining transfers",
    ],
  },
  {
    title: "Private Island Tours",
    description:
      "Discover Mykonos at your own pace. Visit the iconic windmills, Little Venice, hidden beaches, and panoramic viewpoints with a local expert behind the wheel.",
    image: islandTours,
    to: "/contact",
    icon: <Compass className="h-5 w-5" />,
    features: [
      "Custom routes",
      "Local recommendations",
      "Beach & viewpoint access",
      "Half-day & full-day tours",
    ],
  },
  {
    title: "Group Transportation",
    description:
      "Luxury vans and minibuses for families, weddings, corporate retreats, and events. Travel together with comfort, space, and premium service.",
    image: groupTransport,
    to: "/contact",
    icon: <Users className="h-5 w-5" />,
    features: [
      "Up to 20 passengers",
      "Event & wedding logistics",
      "Multiple vehicles on request",
      "Spacious luggage capacity",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Premium services tailored to you"
        subtitle="From airport arrivals to private island tours, every journey with Isla Vida is designed for comfort, discretion, and reliability."
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
              Complete Mykonos transportation
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm lg:flex-row"
              >
                <div className="lg:w-2/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    loading="lazy"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

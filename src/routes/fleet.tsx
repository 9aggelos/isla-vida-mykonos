import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import fleetImage from "../assets/van-yacht.jpg";
import { Shield, Wifi, Snowflake, Luggage, Baby, Music } from "lucide-react";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Isla Vida Mykonos" },
      {
        name: "description",
        content:
          "Luxury vehicles for private transfers and chauffeur services in Mykonos. Mercedes V-Class, SUVs, sedans, and minibuses with premium amenities.",
      },
      {
        property: "og:title",
        content: "Our Fleet — Isla Vida Mykonos",
      },
      {
        property: "og:description",
        content:
          "Premium vehicles for Mykonos transfers. Mercedes V-Class, sedans, SUVs, and minibuses.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

const vehicles = [
  {
    name: "Premium SUV",
    capacity: "1-4 passengers",
    ideal: "Couples, families, business transfers & luggage-heavy trips",
    features: ["Leather interior", "Climate control", "Premium sound system", "Charging ports"],
  },
  {
    name: "Premium Van",
    capacity: "Up to 7 passengers",
    ideal: "Families, groups, or travelers with lots of luggage who want extra space without sacrificing style",
    features: [
      "Spacious leather interior",
      "Large luggage capacity",
      "Individual climate control",
      "Premium sound system & charging ports",
    ],
  },
];

const amenities = [
  { icon: <Wifi className="h-5 w-5" />, label: "Complimentary WiFi" },
  { icon: <Snowflake className="h-5 w-5" />, label: "Climate control" },
  { icon: <Luggage className="h-5 w-5" />, label: "Luggage assistance" },
  { icon: <Baby className="h-5 w-5" />, label: "Child seats on request" },
  { icon: <Music className="h-5 w-5" />, label: "Premium sound system" },
  { icon: <Shield className="h-5 w-5" />, label: "Fully insured fleet" },
];

function FleetPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="A fleet built for comfort"
        subtitle="Immaculate vehicles, professional drivers, and premium amenities for every journey across Mykonos."
        image={fleetImage}
        cta={{ to: "/contact", label: "Reserve your vehicle" }}
      />

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
              Our fleet
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Choose your ride
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              All vehicles are maintained to the highest standards, fully licensed, and
              equipped for the Mykonos climate and roads.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl font-semibold text-card-foreground">
                  {vehicle.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-navy-accent">{vehicle.capacity}</p>
                <p className="mt-3 text-sm text-muted-foreground">{vehicle.ideal}</p>
                <ul className="mt-4 space-y-1.5">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-navy-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Premium amenities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every vehicle includes thoughtful details that make your transfer feel effortless.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex items-center gap-4 rounded-lg border border-border bg-background p-5"
              >
                <div className="text-navy-accent">{amenity.icon}</div>
                <span className="font-medium text-foreground">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

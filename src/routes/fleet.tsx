import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import fleetImage from "../assets/fleet-sedan-hotel.webp";
import { Shield, Wifi, Snowflake, Luggage, Baby, Music } from "lucide-react";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Mykonos Fleet: Mercedes V-Class, Sprinter & SUV | Isla Vida" },
      {
        name: "description",
        content:
          "Luxury van transfers in Mykonos: Mercedes Vito and V-Class for up to 8, a Mercedes Sprinter for up to 20 and a premium SUV for up to 4. From €36.",
      },
      {
        name: "keywords",
        content:
          "luxury van transfer Mykonos, luxury transfer Mykonos, Mykonos luxury van, Mykonos premium SUV, Mercedes V-Class Mykonos, Mercedes Sprinter Mykonos, Mercedes transfer Mykonos",
      },
      {
        property: "og:site_name",
        content: "Isla Vida Mykonos",
      },
      { property: "og:title", content: "Mykonos Fleet: Mercedes V-Class, Sprinter & SUV | Isla Vida" },
      {
        property: "og:description",
        content:
          "Premium SUV (up to 4), Mercedes Vito and V-Class (up to 8) and Mercedes Sprinter (up to 20) for private transfers across Mykonos.",
      },
      { property: "og:url", content: "https://www.islavidajmk.com/fleet" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.islavidajmk.com/fleet" },
    ],
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
    name: "Mercedes Vito",
    capacity: "Up to 8 passengers",
    ideal: "Families and groups of friends who want space for everyone and their luggage",
    features: ["Spacious interior", "Large luggage capacity", "Climate control", "Charging ports"],
  },
  {
    name: "Mercedes V-Class",
    capacity: "Up to 8 passengers",
    ideal:
      "Families, groups, or travelers with lots of luggage who want extra space without sacrificing style",
    features: [
      "Spacious leather interior",
      "Large luggage capacity",
      "Individual climate control",
      "Premium sound system & charging ports",
    ],
  },
  {
    name: "Mercedes Sprinter",
    capacity: "Up to 20 passengers",
    ideal: "Large groups, weddings, events and corporate trips travelling together",
    features: ["Seats up to 20 guests", "Large luggage space", "Climate control", "One vehicle for the whole group"],
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
        title="Our Mercedes fleet in Mykonos"
        subtitle="A premium SUV, Mercedes Vito and V-Class vans and a Mercedes Sprinter, with professional local drivers for every transfer across Mykonos."
        image={fleetImage}
        imageClassName="object-[60%_50%]"
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
              From a luxury van transfer in a Mercedes V-Class to a Sprinter for the whole group, every
              vehicle is maintained to the highest standards, fully licensed, and equipped for the
              Mykonos climate and roads.
            </p>
            <p className="mx-auto mt-6 inline-block rounded-md bg-secondary px-5 py-3 font-display text-2xl font-semibold text-foreground">
              Transfers from €36 per vehicle
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              The final price depends on the distance and the number of guests, and is confirmed in
              writing before you travel.
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

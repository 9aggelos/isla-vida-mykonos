import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../../components/PageHero";
import { ConciergeRequestDialog } from "../../components/ConciergeRequestDialog";
import heroImage from "../../assets/mykonos-pool-view.webp";

const TITLE = "Mykonos Concierge Services: Reservations, Villas & Yachts | Isla Vida";
const DESCRIPTION =
  "Mykonos concierge services from a local team: restaurant and beach club reservations, VIP tables, villas, yachts, helicopters and a private driver. 24/7.";
const URL = "https://www.islavidajmk.com/concierge";

export const Route = createFileRoute("/concierge/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ConciergePage,
});

interface Moment {
  time: string;
  title: string;
  text: string;
  link: { to: string; hash?: string; label: string };
}

// One possible day, in the order a guest would live it.
const day: Moment[] = [
  {
    time: "10:30",
    title: "A morning at sea",
    text: "A private yacht or catamaran to Delos and Rhenia, or a boat taxi straight to the beach.",
    link: { to: "/services", hash: "yacht-catamaran-chartering", label: "Yacht and catamaran charters" },
  },
  {
    time: "14:00",
    title: "Lunch on the sand",
    text: "Sunbeds and a table at a beach club, requested for your group and confirmed before you leave the villa.",
    link: { to: "/concierge/restaurants-beach-clubs", label: "Restaurants and beach clubs" },
  },
  {
    time: "21:00",
    title: "Dinner in town",
    text: "A table for the evening, at the hour you prefer, with your driver waiting outside.",
    link: { to: "/concierge/restaurants-beach-clubs", label: "Restaurant reservations" },
  },
  {
    time: "00:30",
    title: "The night",
    text: "A VIP table where you want to be, and the ride home whenever you decide the night is over.",
    link: { to: "/concierge/nightlife-vip-tables", label: "Nightlife and VIP tables" },
  },
];

const stay: Moment["link"][] = [
  { to: "/villas", label: "Luxury villas" },
  { to: "/services", hash: "helicopter-chartering", label: "Helicopter charters" },
  { to: "/services", label: "Private transfers and chauffeur" },
];

const requestButton =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors";

function ConciergePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Mykonos concierge services"
        subtitle="One local team for your reservations, your villa, your day at sea and every drive in between."
        image={heroImage}
      >
        <div className="mt-8">
          <ConciergeRequestDialog
            topic="concierge help in Mykonos"
            placeholder="A beach club on Saturday, dinner for six, a yacht day"
          >
            <button type="button" className={`${requestButton} bg-white text-navy hover:bg-white/90`}>
              Tell us what you need
            </button>
          </ConciergeRequestDialog>
        </div>
      </PageHero>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            A day in Mykonos, arranged
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tell us how you would like your day to go. We make the calls, confirm each
            booking with you and drive you from one to the next.
          </p>

          <ol className="mt-14 border-t border-border">
            {day.map((moment) => (
              <li
                key={moment.time}
                className="grid gap-x-10 gap-y-2 border-b border-border py-9 sm:grid-cols-[9rem_1fr]"
              >
                <p className="font-display text-5xl font-medium tabular-nums leading-none text-navy-accent sm:text-6xl">
                  {moment.time}
                </p>
                <div>
                  <h3 className="font-display text-3xl font-semibold text-foreground">
                    {moment.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                    {moment.text}
                  </p>
                  <Link
                    to={moment.link.to}
                    hash={moment.link.hash}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
                  >
                    {moment.link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              And for the stay itself
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              The same team arranges where you sleep and how you arrive, so one message
              covers the whole trip.
            </p>
          </div>
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {stay.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  hash={link.hash}
                  className="group flex items-center justify-between gap-4 py-5 font-display text-2xl font-medium transition-colors hover:text-white/80"
                >
                  {link.label}
                  <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            One message is enough
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Send your dates and what you have in mind. We answer on WhatsApp or by email,
            day or night.
          </p>
          <div className="mt-8">
            <ConciergeRequestDialog
              topic="concierge help in Mykonos"
              placeholder="A beach club on Saturday, dinner for six, a yacht day"
            >
              <button type="button" className={`${requestButton} bg-navy text-white hover:bg-navy-light`}>
                Send your request
              </button>
            </ConciergeRequestDialog>
          </div>
        </div>
      </section>
    </div>
  );
}

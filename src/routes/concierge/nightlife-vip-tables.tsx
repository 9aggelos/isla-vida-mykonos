import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ConciergeRequestDialog } from "../../components/ConciergeRequestDialog";
import { QuestionList } from "../../components/QuestionList";
import {
  faqStructuredData,
  nightlifeQuestions,
  nightlifeTiles,
  nightlifeVenues,
} from "../../data/concierge";
import coverImage from "../../assets/venues/nightlife-cover.webp";

const TITLE = "Mykonos Nightlife & VIP Table Reservations | Isla Vida Concierge";
const DESCRIPTION =
  "VIP table reservations in Mykonos, from Cavo Paradiso to Astra. A local concierge requests the table for your group and keeps a private driver ready all night.";
const URL = "https://www.islavidajmk.com/concierge/nightlife-vip-tables";

export const Route = createFileRoute("/concierge/nightlife-vip-tables")({
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
    scripts: [faqStructuredData(nightlifeQuestions)],
  }),
  component: NightlifePage,
});

const topic = "a nightlife or VIP table reservation";
const placeholder = "Venue or event, table for how many, a birthday, a driver for the night";

const arranged = [
  {
    title: "VIP tables",
    text: "Tables at the island's clubs and late-night venues, requested for your group and your date.",
  },
  {
    title: "Beach parties and events",
    text: "Daytime parties and special nights through the season. Tell us what you heard about and we look into it.",
  },
  {
    title: "Celebrations",
    text: "Birthdays, bachelor and bachelorette nights, planned with the venue before you arrive.",
  },
  {
    title: "A driver for the night",
    text: "A private vehicle to the venue, on to the next one, and home when you choose. Nobody drives, nobody queues for a taxi.",
  },
];

const requestButton =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors";

function NightlifePage() {
  return (
    <div className="flex flex-col">
      {/* The cover photo is softened and darkened on purpose, so it reads as atmosphere
          behind the headline. */}
      <section className="relative isolate overflow-hidden bg-[oklch(0.17_0.05_264)] text-white">
        <img
          src={coverImage}
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[oklch(0.17_0.05_264)]/60" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <p className="font-display text-2xl italic text-white/60">After midnight</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Mykonos nightlife and VIP table reservations
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Tell us the night you have in mind. We request the table, confirm the details
            with you and keep a driver ready until you are home.
          </p>
          <div className="mt-10">
            <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
              <button type="button" className={`${requestButton} bg-white text-navy hover:bg-white/90`}>
                Request a table
              </button>
            </ConciergeRequestDialog>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">What we arrange</h2>
          <dl className="mt-10 grid gap-x-16 md:grid-cols-2">
            {arranged.map((item) => (
              <div key={item.title} className="border-t border-white/20 py-7">
                <dt className="font-display text-3xl font-semibold">{item.title}</dt>
                <dd className="mt-3 max-w-md leading-relaxed text-white/75">{item.text}</dd>
              </div>
            ))}
          </dl>

          {(nightlifeTiles.length > 0 || nightlifeVenues.length > 0) && (
            <div className="mt-10 grid gap-12 border-t border-white/20 pt-12 lg:grid-cols-2">
              {nightlifeTiles.length > 0 && (
                <div className="grid max-w-xl grid-cols-3 gap-4">
                  {nightlifeTiles.map((venue) => (
                    <figure key={venue.name}>
                      <img
                        src={venue.photo}
                        alt={`${venue.name}, ${venue.place}, Mykonos`}
                        width={300}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[3/4] w-full object-cover"
                      />
                      <figcaption className="mt-3">
                        <span className="block font-display text-lg font-semibold leading-tight">
                          {venue.name}
                        </span>
                        <span className="text-xs text-white/60">{venue.place}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {nightlifeVenues.length > 0 && (
                <div>
                  <h3 className="font-display text-3xl font-semibold">
                    Mykonos' most requested tables
                  </h3>
                  <ul className="mt-5 divide-y divide-white/15 border-y border-white/15">
                    {nightlifeVenues.map((venue) => (
                      <li key={venue} className="py-3 font-display text-2xl">
                        {venue}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-white/55">
                    Reservations depend on each venue's availability. Isla Vida is an
                    independent concierge and is not affiliated with the venues listed.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Good to know
          </h2>
          <QuestionList questions={nightlifeQuestions} />
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
              <button type="button" className={`${requestButton} bg-navy text-white hover:bg-navy-light`}>
                Request a table
              </button>
            </ConciergeRequestDialog>
            <Link
              to="/concierge/restaurants-beach-clubs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Start with dinner: restaurants and beach clubs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

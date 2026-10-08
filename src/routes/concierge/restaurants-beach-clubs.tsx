import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../../components/PageHero";
import { ConciergeRequestDialog } from "../../components/ConciergeRequestDialog";
import { QuestionList } from "../../components/QuestionList";
import {
  faqStructuredData,
  restaurantQuestions,
  venues,
  type Venue,
} from "../../data/concierge";
import heroImage from "../../assets/mykonos-terrace-view.webp";

const TITLE = "Mykonos Restaurant & Beach Club Reservations | Isla Vida Concierge";
const DESCRIPTION =
  "Reservations at Nammos, Scorpios, Principote, Alemagou, Interni and more. Tables and sunbeds in Mykonos requested by a local concierge, with a private driver.";
const URL = "https://www.islavidajmk.com/concierge/restaurants-beach-clubs";

export const Route = createFileRoute("/concierge/restaurants-beach-clubs")({
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
    scripts: [faqStructuredData(restaurantQuestions)],
  }),
  component: RestaurantsPage,
});

const topic = "a restaurant or beach club reservation";
const placeholder = "Venue you have in mind, lunch or dinner, sunbeds, a celebration";

const offers = [
  {
    title: "By the sea",
    lines: [
      "Sunbeds, cabanas and lunch tables at the island's beach clubs",
      "Arrival by road with your driver, or by boat taxi",
      "Groups and celebrations planned with the venue in advance",
    ],
  },
  {
    title: "In town and on the hills",
    lines: [
      "Dinner tables in Mykonos Town and around the island",
      "Sunset tables, requested for the hour the light is best",
      "Your driver at the door when the evening ends",
    ],
  },
];

const steps = [
  "Send the date, your group size and the places you have in mind. If you are not sure, tell us the mood and we suggest.",
  "We contact the venue, then tell you what is confirmed, at what time and on what conditions.",
  "Your driver collects you, and takes you home or on to the next stop.",
];

const requestButton =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors";

/** One venue: small photo or initial, what and where it is, and its own request button. */
function VenueRow({ venue }: { venue: Venue }) {
  return (
    <li className="flex items-center gap-4 py-4">
      {venue.photo ? (
        <img
          src={venue.photo}
          alt=""
          width={192}
          height={144}
          loading="lazy"
          decoding="async"
          className="h-[4.5rem] w-24 shrink-0 object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-[4.5rem] w-24 shrink-0 items-center justify-center bg-navy font-display text-3xl text-white/90"
        >
          {venue.name.charAt(0)}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="font-display text-2xl font-semibold leading-tight text-foreground">
          {venue.name}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {venue.note}, {venue.place}
        </p>
      </div>
      <ConciergeRequestDialog
        topic={`a reservation at ${venue.name}`}
        placeholder="Lunch or dinner, sunbeds, preferred time, a celebration"
      >
        <button
          type="button"
          aria-label={`Request a reservation at ${venue.name}`}
          className="shrink-0 rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Request
        </button>
      </ConciergeRequestDialog>
    </li>
  );
}

function RestaurantsPage() {
  const featured = venues.filter((venue) => venue.featured && venue.photo);
  const groups = [
    {
      title: "Beach club reservations",
      venues: venues.filter((venue) => venue.kind === "beach"),
    },
    {
      title: "Restaurant reservations",
      venues: venues.filter((venue) => venue.kind === "restaurant"),
    },
  ].filter((group) => group.venues.length > 0);

  return (
    <div className="flex flex-col">
      <PageHero
        title="Mykonos restaurant and beach club reservations"
        subtitle="Tell us where you would like to be. We request the table or the sunbeds, confirm it with you and drive you there."
        image={heroImage}
      >
        <div className="mt-8">
          <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
            <button type="button" className={`${requestButton} bg-white text-navy hover:bg-white/90`}>
              Request a reservation
            </button>
          </ConciergeRequestDialog>
        </div>
      </PageHero>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Lunch by the water, dinner under the lights
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            {offers.map((offer) => (
              <div key={offer.title}>
                <h3 className="font-display text-3xl font-semibold text-navy">{offer.title}</h3>
                <ul className="mt-5 divide-y divide-border border-y border-border">
                  {offer.lines.map((line) => (
                    <li key={line} className="py-4 leading-relaxed text-muted-foreground">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="bg-background pb-16 lg:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Signature addresses
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {featured.map((venue) => (
                <figure key={venue.name}>
                  <img
                    src={venue.photo}
                    alt={`${venue.name}, ${venue.place}, Mykonos`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                    <span className="font-display text-3xl font-semibold text-foreground">
                      {venue.name}
                    </span>
                    <span className="text-right text-sm text-muted-foreground">{venue.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-navy-muted/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Choose a place, send a request
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            These are the tables and sunbeds we are asked for most. Somewhere else in mind?
            Ask us for it by name.
          </p>

          <div className="mt-12 grid gap-x-16 gap-y-14 lg:grid-cols-2">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-3xl font-semibold text-navy">{group.title}</h3>
                <ul className="mt-5 divide-y divide-border border-y border-border">
                  {group.venues.map((venue) => (
                    <VenueRow key={venue.name} venue={venue} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Reservations depend on each venue's availability. Isla Vida is an independent
            concierge and is not affiliated with the venues listed.
          </p>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">How it works</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="border-t border-white/25 pt-6">
                <p className="font-display text-5xl font-medium leading-none text-white/50">
                  {index + 1}
                </p>
                <p className="mt-4 leading-relaxed text-white/85">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Good to know
          </h2>
          <QuestionList questions={restaurantQuestions} />
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
              <button type="button" className={`${requestButton} bg-navy text-white hover:bg-navy-light`}>
                Request a reservation
              </button>
            </ConciergeRequestDialog>
            <Link
              to="/concierge/nightlife-vip-tables"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Continue the evening: nightlife and VIP tables
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

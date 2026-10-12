import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../../components/PageHero";
import { ConciergeRequestDialog } from "../../components/ConciergeRequestDialog";
import { ConciergeRequestForm } from "../../components/ConciergeRequestForm";
import { QuestionList } from "../../components/QuestionList";
import { VenueList } from "../../components/VenueList";
import { faqStructuredData, restaurantQuestions, venues } from "../../data/concierge";
import heroImage from "../../assets/venues/restaurants-hero.webp";

const TITLE = "Mykonos Restaurant Reservations | Interni, Noema, Lío, Kastro's";
const DESCRIPTION =
  "Restaurant reservations in Mykonos: tables at Interni, Noema, Lío Mykonos, Kastro's and more, requested by a local concierge, with a private driver there and back.";
const URL = "https://www.islavidajmk.com/concierge/restaurant-reservations";

export const Route = createFileRoute("/concierge/restaurant-reservations")({
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

const topic = "a restaurant reservation";
const placeholder = "Restaurant you have in mind, lunch or dinner, preferred time, how many guests";

const offers = [
  {
    title: "In town",
    lines: [
      "Dinner tables in Mykonos Town and around the island",
      "The hour you prefer, requested with the restaurant in advance",
      "Your driver at the door when the evening ends",
    ],
  },
  {
    title: "By the water",
    lines: [
      "Sunset tables in Little Venice and along the coast",
      "Seafront restaurants for lunch or a long dinner",
      "Groups and celebrations planned with the restaurant beforehand",
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

function RestaurantsPage() {
  const restaurants = venues.filter((venue) => venue.kind === "restaurant");

  return (
    <div className="flex flex-col">
      <PageHero
        title="Mykonos restaurant reservations"
        subtitle="Tell us where you would like to dine. We request the table, confirm the hour with you and have your driver waiting outside."
        image={heroImage}
      >
        <div className="mt-8">
          <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
            <button type="button" className={`${requestButton} bg-white text-navy hover:bg-white/90`}>
              Request a restaurant
            </button>
          </ConciergeRequestDialog>
        </div>
      </PageHero>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            The table you want, at the hour you want it
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

      <VenueList
        title="Restaurant reservations"
        intro="These are the restaurants we are asked for most. Somewhere else in mind? Ask us for it by name."
        venues={restaurants}
      />

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
                Request a restaurant
              </button>
            </ConciergeRequestDialog>
            <Link
              to="/concierge/beach-club-reservations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Daytime by the sea? Beach club reservations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConciergeRequestForm
        title="Request a restaurant"
        topic={topic}
        venueNames={restaurants.map((venue) => venue.name)}
      />
    </div>
  );
}

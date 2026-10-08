import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../../components/PageHero";
import { ConciergeRequestDialog } from "../../components/ConciergeRequestDialog";
import { ConciergeRequestForm } from "../../components/ConciergeRequestForm";
import { QuestionList } from "../../components/QuestionList";
import { VenueList } from "../../components/VenueList";
import { beachClubQuestions, faqStructuredData, venues } from "../../data/concierge";
import heroImage from "../../assets/venues/nammos-psarou.webp";

const TITLE = "Mykonos Beach Club Reservations | Nammos, Scorpios, Principote";
const DESCRIPTION =
  "Beach club reservations in Mykonos: sunbeds, cabanas and lunch tables at Nammos, Scorpios, Principote, Alemagou and more, plus the gay and LGBTQ+ friendly Jackie O' Beach and Elia Beach, requested by a local concierge with a private driver.";
const URL = "https://www.islavidajmk.com/concierge/beach-club-reservations";

export const Route = createFileRoute("/concierge/beach-club-reservations")({
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
    scripts: [faqStructuredData(beachClubQuestions)],
  }),
  component: BeachClubsPage,
});

const topic = "a beach club reservation";
const placeholder = "Beach club you have in mind, sunbeds or a lunch table, how many guests";

const offers = [
  {
    title: "Sunbeds and cabanas",
    lines: [
      "Sunbeds, double beds and cabanas at the island's beach clubs",
      "The front row by the water when the venue can offer it",
      "Groups and celebrations planned with the club in advance",
    ],
  },
  {
    title: "Lunch on the sand",
    lines: [
      "A lunch table at the beach club restaurant",
      "Arrival by road with your driver, or by boat taxi",
      "The ride back whenever you are ready to leave",
    ],
  },
];

const lgbtqBeaches = [
  {
    name: "Jackie O' Beach",
    place: "Super Paradise Beach",
    text: "The island's best known gay and LGBTQ+ friendly beach club. Sunbeds, a bar and a restaurant above Super Paradise, with a daytime show.",
  },
  {
    name: "Elia Beach",
    place: "South coast",
    text: "The longest sandy beach on the island and its best known gay beach. A rainbow flag towards the western end marks the gay section, and the nudist area begins just beyond it. The main stretch has sunbeds and a beach restaurant.",
  },
];

const steps = [
  "Send the date, your group size and the places you have in mind. If you are not sure, tell us the mood and we suggest.",
  "We contact the venue, then tell you what is confirmed, at what time and on what conditions.",
  "Your driver collects you, and takes you home or on to the next stop.",
];

const requestButton =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors";

function BeachClubsPage() {
  const beachClubs = venues.filter((venue) => venue.kind === "beach");

  return (
    <div className="flex flex-col">
      <PageHero
        title="Mykonos beach club reservations"
        subtitle="Sunbeds, cabanas and lunch by the water. Tell us where you would like to be and we request it, confirm it with you and drive you there."
        image={heroImage}
      >
        <div className="mt-8">
          <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
            <button type="button" className={`${requestButton} bg-white text-navy hover:bg-white/90`}>
              Request a beach club
            </button>
          </ConciergeRequestDialog>
        </div>
      </PageHero>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            A day by the water, arranged before you arrive
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
        title="Beach club reservations"
        intro="These are the beach clubs we are asked for most. Somewhere else in mind? Ask us for it by name."
        venues={beachClubs}
      />

      <section className="section-padding border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Gay and LGBTQ+ friendly beaches in Mykonos
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Mykonos has welcomed gay travellers for decades. These are the two beaches our LGBTQ+
            guests ask for most.
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            {lgbtqBeaches.map((beach) => (
              <div key={beach.name} className="border-t border-border pt-6">
                <h3 className="font-display text-3xl font-semibold text-navy">{beach.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {beach.place}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{beach.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl leading-relaxed text-foreground">
            Tell us the date and your group. We request the sunbeds or the table and drive you
            there and back.
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
          <QuestionList questions={beachClubQuestions} />
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
              <button type="button" className={`${requestButton} bg-navy text-white hover:bg-navy-light`}>
                Request a beach club
              </button>
            </ConciergeRequestDialog>
            <Link
              to="/concierge/restaurant-reservations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Looking for dinner? Restaurant reservations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConciergeRequestForm
        title="Request a beach club"
        topic={topic}
        venueNames={beachClubs.map((venue) => venue.name)}
      />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../../components/PageHero";
import { ConciergeRequestDialog } from "../../components/ConciergeRequestDialog";
import { ConciergeRequestForm } from "../../components/ConciergeRequestForm";
import { QuestionList } from "../../components/QuestionList";
import { VenueList } from "../../components/VenueList";
import { faqStructuredData, sunsetBarQuestions, venues } from "../../data/concierge";
import heroImage from "../../assets/venues/sunset-bars-hero.webp";

const TITLE = "Mykonos Sunset Bars | 180\u00b0, Negrita, Scarpa, Cerise, Numi";
const DESCRIPTION =
  "The best sunset bars in Mykonos: 180\u00b0 Sunset Bar, Negrita, Scarpa, Cerise and Numi. A local concierge reserves your table for golden hour, with a private driver there and back.";
const URL = "https://www.islavidajmk.com/concierge/sunset-bars";

export const Route = createFileRoute("/concierge/sunset-bars")({
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
    scripts: [faqStructuredData(sunsetBarQuestions)],
  }),
  component: SunsetBarsPage,
});

const topic = "a sunset bar reservation";
const placeholder = "Sunset bar you have in mind, the date, how many guests, a celebration";

const offers = [
  {
    title: "The famous view",
    lines: [
      "180\u00b0 Sunset Bar and Numi, high above town for the panoramic sunset",
      "Front tables requested for golden hour, where the venue allows",
      "Your driver timed to have you settled before the light turns",
    ],
  },
  {
    title: "Little Venice by the water",
    lines: [
      "Negrita, Scarpa and Cerise, on the seafront under the windmills",
      "Cocktails as the sun drops, music that builds into the night",
      "A table to start the evening before dinner or the clubs",
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

function SunsetBarsPage() {
  const sunsetBars = venues.filter((venue) => venue.kind === "sunset");

  return (
    <div className="flex flex-col">
      <PageHero
        title="Mykonos sunset bars"
        subtitle="The island's sunsets are famous for a reason. Tell us where you would like to watch it and we reserve the table, confirm the hour and drive you there."
        image={heroImage}
      >
        <div className="mt-8">
          <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
            <button type="button" className={`${requestButton} bg-white text-navy hover:bg-white/90`}>
              Request a sunset table
            </button>
          </ConciergeRequestDialog>
        </div>
      </PageHero>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            The best seat for the Mykonos sunset, reserved for you
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
        title="Sunset bar reservations"
        intro="These are the sunset bars we are asked for most. Somewhere else in mind? Ask us for it by name."
        venues={sunsetBars}
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
          <QuestionList questions={sunsetBarQuestions} />
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <ConciergeRequestDialog topic={topic} placeholder={placeholder}>
              <button type="button" className={`${requestButton} bg-navy text-white hover:bg-navy-light`}>
                Request a sunset table
              </button>
            </ConciergeRequestDialog>
            <Link
              to="/concierge/nightlife-vip-tables"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              After the sunset: nightlife and VIP tables
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConciergeRequestForm
        title="Request a sunset table"
        topic={topic}
        venueNames={sunsetBars.map((venue) => venue.name)}
      />
    </div>
  );
}

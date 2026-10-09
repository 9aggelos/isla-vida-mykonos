import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  INTRO_HEADLINE,
  INTRO_TEXT,
  holidayMarkets,
  holidaysHub,
  whatsappLink,
  type HolidayImage,
  type HolidayMarket,
  type HolidayService,
} from "../data/holidays";

const BUTTON_LABEL = "Plan your holiday on WhatsApp";

function WhatsAppButton({ message, className = "" }: { message: string; className?: string }) {
  return (
    <Button
      asChild
      size="lg"
      variant="secondary"
      className={`h-auto min-h-10 whitespace-normal py-3 ${className}`}
    >
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        {BUTTON_LABEL}
      </a>
    </Button>
  );
}

/**
 * The opening of every Holidays page: the same two lines over a photo.
 * A market page passes `heading`, which becomes the page's main heading above them.
 */
function HolidayHero({
  heading,
  image,
  message,
}: {
  heading?: string;
  image: HolidayImage;
  message: string;
}) {
  const headline =
    "max-w-4xl text-balance font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl";
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 -z-20 h-full w-full object-cover ${image.position}`}
      />
      <div className="absolute inset-0 -z-10 bg-primary/75" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        {heading ? (
          <>
            <h1 className="max-w-2xl text-base font-medium tracking-wide text-champagne sm:text-lg">
              {heading}
            </h1>
            <p className={`mt-5 ${headline}`}>{INTRO_HEADLINE}</p>
          </>
        ) : (
          <h1 className={headline}>{INTRO_HEADLINE}</h1>
        )}
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          {INTRO_TEXT}
        </p>
        <WhatsAppButton message={message} className="mt-9" />
      </div>
    </section>
  );
}

/** The plain list of services: the name on the left, one line about it on the right. */
function ServiceList({ services }: { services: HolidayService[] }) {
  return (
    <dl className="mt-8 border-t border-border">
      {services.map((service) => (
        <div
          key={service.name}
          className="grid gap-x-12 gap-y-2 border-b border-border py-6 md:grid-cols-12 md:py-7"
        >
          <dt className="font-display text-2xl font-semibold leading-snug md:col-span-5">
            {service.to ? (
              <Link
                to={service.to}
                hash={service.hash}
                className="underline decoration-border underline-offset-[6px] transition-colors hover:text-navy-accent hover:decoration-navy-accent"
              >
                {service.name}
              </Link>
            ) : (
              service.name
            )}
          </dt>
          <dd className="text-lg leading-relaxed text-muted-foreground md:col-span-7">
            {service.line}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Links to the market pages, as large rows. */
function MarketLinks({ markets }: { markets: HolidayMarket[] }) {
  return (
    <ul className="mt-8 border-t border-border">
      {markets.map((market) => (
        <li key={market.path} className="border-b border-border">
          <Link
            to={market.path}
            className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-navy-accent md:py-7"
          >
            <span>
              <span className="block font-display text-3xl font-semibold leading-snug sm:text-4xl">
                {market.label}
              </span>
              <span className="mt-1 block text-lg leading-relaxed text-muted-foreground">
                {market.summary}
              </span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function HolidayClosing({ text, message }: { text: string; message: string }) {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-display text-3xl font-medium sm:text-5xl">
          Your Mykonos holidays start with one message.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
          {text}
        </p>
        <WhatsAppButton message={message} className="mt-8" />
      </div>
    </section>
  );
}

const sectionTitle = "font-display text-3xl font-bold sm:text-4xl";
const column = "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8";

/** One market's page: the opening lines, then its services and nothing else. */
export function HolidayMarketPage({ market }: { market: HolidayMarket }) {
  const others = holidayMarkets.filter((other) => other.path !== market.path);
  return (
    <div>
      <HolidayHero
        heading={market.heading}
        image={market.image}
        message={market.whatsappMessage}
      />

      {market.groups.map((group, index) => (
        <section
          key={group.heading}
          className={`section-padding ${
            index % 2 ? "border-y border-border bg-secondary" : "bg-background"
          }`}
        >
          <div className={column}>
            <h2 className={sectionTitle}>{group.heading}</h2>
            <ServiceList services={group.services} />
          </div>
        </section>
      ))}

      <HolidayClosing text={market.closing} message={market.whatsappMessage} />

      <section className="section-padding bg-background">
        <div className={column}>
          <h2 className={sectionTitle}>Travelling from somewhere else?</h2>
          <MarketLinks markets={others} />
          <p className="mt-8 text-lg text-muted-foreground">
            Or see everything we arrange on the{" "}
            <Link
              to={holidaysHub.path}
              className="text-foreground underline underline-offset-4 hover:text-navy-accent"
            >
              Mykonos Holidays
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </div>
  );
}

/** The main Holidays page: what we arrange, and a link to each market's page. */
export function HolidaysHubPage() {
  return (
    <div>
      <HolidayHero image={holidaysHub.image} message={holidaysHub.whatsappMessage} />

      <section className="section-padding bg-background">
        <div className={column}>
          <h2 className={sectionTitle}>Your whole holiday, from one local team</h2>
          <ServiceList services={holidaysHub.services} />
        </div>
      </section>

      <section className="section-padding border-y border-border bg-secondary">
        <div className={column}>
          <h2 className={sectionTitle}>Where are you travelling from?</h2>
          <MarketLinks markets={holidayMarkets} />
        </div>
      </section>

      <HolidayClosing text={holidaysHub.closing} message={holidaysHub.whatsappMessage} />
    </div>
  );
}

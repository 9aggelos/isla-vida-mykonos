import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone, Star } from "lucide-react";
import { SERVICES, TransferBookingForm, type ServiceKey } from "../components/TransferBookingForm";

const BASE_URL = "https://www.islavidajmk.com";
const TITLE = "Book a Mykonos Transfer | Isla Vida";
const DESCRIPTION =
  "Request your private Mykonos transfer in one minute: airport, port, cruise, chauffeur by the hour or group transport. From €36 per vehicle, confirmed by WhatsApp or email.";

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): { service?: ServiceKey } =>
    typeof search.service === "string" && search.service in SERVICES
      ? { service: search.service as ServiceKey }
      : {},
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:site_name", content: "Isla Vida Mykonos" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${BASE_URL}/book` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/book` }],
  }),
  component: BookPage,
});

function BookPage() {
  const search = Route.useSearch();
  const initialService: ServiceKey = search.service ?? "airport";

  return (
    <div className="bg-navy-muted/40">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: why book with us */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
            <span aria-hidden="true" className="block h-0.5 w-9 bg-[#F3C677]" />
            Private transfers, 24/7
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Book your Mykonos transfer
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Fill in your trip and send it to us on WhatsApp or by email. We reply quickly with a fixed price and
            your driver's details.
          </p>
          <p className="mt-6 font-display text-3xl font-semibold text-foreground">
            From €36 <span className="text-lg font-normal text-muted-foreground">per vehicle</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            The final price depends on distance and the number of guests, and is confirmed before you travel.
          </p>
          <ul className="mt-8 space-y-3 text-foreground">
            {[
              "Your driver waits with a name sign",
              "Flights and ferries tracked, delays covered",
              "Mercedes vehicles for 1 to 20 guests",
              "Child seats on request",
              "Nothing to pay until we confirm",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A04F]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-[#F3C677] text-[#F3C677]" />
            5.0 on Google from 74 reviews
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer to talk?{" "}
            <a href="tel:+306948041931" className="inline-flex items-center gap-1 font-medium text-foreground underline">
              <Phone className="h-3.5 w-3.5" /> +30 694 804 1931
            </a>
          </p>
        </div>

        <TransferBookingForm initialService={initialService} />
      </section>
    </div>
  );
}

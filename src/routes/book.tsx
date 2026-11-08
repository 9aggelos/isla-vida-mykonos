import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Mail, MessageCircle, Phone, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BASE_URL = "https://www.islavidajmk.com";
const WHATSAPP_NUMBER = "306948041931";
const REQUEST_EMAIL = "info@islavidajmk.com";
const TITLE = "Book a Mykonos Transfer | Isla Vida";
const DESCRIPTION =
  "Request your private Mykonos transfer in one minute: airport, port, cruise, chauffeur by the hour or group transport. From €36 per vehicle, confirmed by WhatsApp or email.";

const SERVICES = {
  airport: "Airport transfer (JMK)",
  port: "Port transfer (ferry)",
  cruise: "Cruise port transfer",
  local: "Transfer on the island (villa, hotel, beach, restaurant)",
  chauffeur: "Chauffeur by the hour",
  tour: "Private island tour",
  event: "Wedding, event or group transport",
} as const;
type ServiceKey = keyof typeof SERVICES;

const PICKUPS = [
  "Mykonos Airport (JMK)",
  "New Port (Tourlos)",
  "Old Port (Mykonos Town)",
  "Hotel or villa",
  "Another place",
];

const VEHICLES = [
  "Let us suggest",
  "Premium SUV (up to 4 guests)",
  "Mercedes Vito (up to 8 guests)",
  "Mercedes V-Class (up to 8 guests)",
  "Mercedes Sprinter (up to 20 guests)",
];

const HOURS = ["3 hours", "4 hours", "6 hours", "8 hours", "Full day", "Not sure yet"];

function defaultPickup(service: ServiceKey) {
  if (service === "airport") return PICKUPS[0];
  if (service === "port" || service === "cruise") return PICKUPS[1];
  return "";
}

function suggestedVehicle(guests: number) {
  if (!guests) return "";
  if (guests <= 4) return "A Premium SUV or a Mercedes V-Class fits your group.";
  if (guests <= 8) return "A Mercedes V-Class or Vito fits your group, with room for luggage.";
  if (guests <= 20) return "A Mercedes Sprinter carries your whole group together.";
  return "For more than 20 guests we combine vehicles, so everyone travels together.";
}

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

  const [service, setService] = useState<ServiceKey>(initialService);
  const [roundTrip, setRoundTrip] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState(defaultPickup(initialService));
  const [pickupDetails, setPickupDetails] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [travelNumber, setTravelNumber] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [hours, setHours] = useState("");
  const [guests, setGuests] = useState("");
  const [luggage, setLuggage] = useState("");
  const [childSeats, setChildSeats] = useState("0");
  const [vehicle, setVehicle] = useState(VEHICLES[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [problem, setProblem] = useState("");

  const isHourly = service === "chauffeur" || service === "tour";
  const needsTravelNumber =
    service === "airport" || service === "port" || service === "cruise" || pickup === PICKUPS[0] ||
    pickup === PICKUPS[1] || pickup === PICKUPS[2];
  const travelLabel =
    service === "cruise" ? "Ship name" : pickup === PICKUPS[0] || service === "airport" ? "Flight number" : "Ferry name or number";
  const pickupNeedsDetails = pickup === PICKUPS[3] || pickup === PICKUPS[4] || pickup === "";

  const chooseService = (next: ServiceKey) => {
    setService(next);
    const p = defaultPickup(next);
    if (p) setPickup(p);
    if (next === "chauffeur" || next === "tour") setRoundTrip(false);
  };

  const buildMessage = () => {
    const pickupText = [pickup, pickupDetails.trim()].filter(Boolean).join(": ");
    const lines = [
      `Service: ${SERVICES[service]}`,
      !isHourly && `Trip: ${roundTrip ? "Return" : "One way"}`,
      date && `Date: ${date}${time ? ` at ${time}` : ""}`,
      isHourly && hours && `Duration: ${hours}`,
      pickupText && `Pickup: ${pickupText}`,
      dropoff.trim() && `Drop-off: ${dropoff.trim()}`,
      needsTravelNumber && travelNumber.trim() && `${travelLabel}: ${travelNumber.trim()}`,
      roundTrip && returnDate && `Return: ${returnDate}${returnTime ? ` at ${returnTime}` : ""}`,
      guests && `Guests: ${guests}`,
      luggage && `Luggage: ${luggage}`,
      childSeats !== "0" && `Child seats: ${childSeats}`,
      `Vehicle: ${vehicle}`,
      "@@",
      `Name: ${name.trim()}`,
      phone.trim() && `Phone: ${phone.trim()}`,
      email.trim() && `Email: ${email.trim()}`,
      notes.trim() && `Notes: ${notes.trim()}`,
    ].filter((line): line is string => typeof line === "string" && line.trim() !== "");
    // "@@" marks the blank line between the trip and the contact details.
    return ["Hello Isla Vida, I would like to book a transfer.", "", ...lines.map((l) => (l === "@@" ? "" : l))].join("\n");
  };

  // Only the full name and a mobile number are required; everything else is optional.
  const check = () => {
    if (!name.trim()) return "Please add your full name.";
    if (phone.replace(/[^0-9]/g, "").length < 7) return "Please add your mobile number.";
    return "";
  };

  const send = (channel: "whatsapp" | "email") => {
    const found = check();
    setProblem(found);
    if (found) return;
    const message = buildMessage();
    if (channel === "whatsapp") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    } else {
      const subject = `Transfer request: ${SERVICES[service]}${date ? `, ${date}` : ""}`;
      window.location.href = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
  };

  const selectClass =
    "h-10 w-full rounded-md border border-input bg-background px-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm";
  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active ? "border-navy bg-navy text-white" : "border-border bg-background text-foreground hover:bg-navy-muted"
    }`;
  const sendClass =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold transition-colors";
  const advice = suggestedVehicle(Number(guests));

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

        {/* Right: the form */}
        <div className="grid gap-6 rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
          <fieldset className="grid gap-3">
            <legend className="mb-1 text-sm font-semibold text-foreground">What do you need?</legend>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(SERVICES) as ServiceKey[]).map((key) => (
                <button key={key} type="button" onClick={() => chooseService(key)} className={chip(service === key)}>
                  {SERVICES[key]}
                </button>
              ))}
            </div>
          </fieldset>

          {!isHourly && (
            <div className="flex gap-2">
              <button type="button" onClick={() => setRoundTrip(false)} className={chip(!roundTrip)}>
                One way
              </button>
              <button type="button" onClick={() => setRoundTrip(true)} className={chip(roundTrip)}>
                Return trip
              </button>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="book-date">Date</Label>
              <Input id="book-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="book-time">{service === "airport" || service === "port" ? "Arrival time" : "Pickup time"}</Label>
              <Input id="book-time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>

          {isHourly && (
            <div className="grid gap-2">
              <Label htmlFor="book-hours">How long?</Label>
              <select id="book-hours" className={selectClass} value={hours} onChange={(e) => setHours(e.target.value)}>
                <option value="">Choose</option>
                {HOURS.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="book-pickup">Pickup</Label>
              <select id="book-pickup" className={selectClass} value={pickup} onChange={(e) => setPickup(e.target.value)}>
                <option value="">Choose</option>
                {PICKUPS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              {pickupNeedsDetails && (
                <Input
                  aria-label="Hotel, villa or address"
                  placeholder="Hotel, villa or address"
                  value={pickupDetails}
                  onChange={(e) => setPickupDetails(e.target.value)}
                />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="book-dropoff">{isHourly ? "Places to visit (optional)" : "Drop-off"}</Label>
              <Input
                id="book-dropoff"
                placeholder={isHourly ? "Beach clubs, dinner, sunset…" : "Hotel, villa, port or airport"}
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              />
            </div>
          </div>

          {needsTravelNumber && (
            <div className="grid gap-2">
              <Label htmlFor="book-travel">
                {travelLabel} <span className="font-normal text-muted-foreground">(so we can track it)</span>
              </Label>
              <Input
                id="book-travel"
                placeholder={travelLabel === "Flight number" ? "e.g. A3 350" : travelLabel === "Ship name" ? "e.g. Celebrity Apex" : "e.g. Seajets"}
                value={travelNumber}
                onChange={(e) => setTravelNumber(e.target.value)}
              />
            </div>
          )}

          {roundTrip && !isHourly && (
            <div className="grid gap-4 rounded-xl bg-navy-muted/40 p-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="book-return-date">Return date</Label>
                <Input id="book-return-date" type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="book-return-time">Return pickup time</Label>
                <Input id="book-return-time" type="time" value={returnTime} onChange={(e) => setReturnTime(e.target.value)} />
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="grid gap-2">
              <Label htmlFor="book-guests">Guests</Label>
              <Input id="book-guests" type="number" inputMode="numeric" min={1} value={guests} onChange={(e) => setGuests(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="book-luggage">Suitcases</Label>
              <Input id="book-luggage" type="number" inputMode="numeric" min={0} value={luggage} onChange={(e) => setLuggage(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="book-seats">Child seats</Label>
              <select id="book-seats" className={selectClass} value={childSeats} onChange={(e) => setChildSeats(e.target.value)}>
                {["0", "1", "2", "3", "4"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="book-vehicle">Vehicle</Label>
            <select id="book-vehicle" className={selectClass} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
              {VEHICLES.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
            {advice && <p className="text-sm text-muted-foreground">{advice}</p>}
          </div>

          <div className="grid gap-4 border-t border-border pt-6">
            <div className="grid gap-2">
              <Label htmlFor="book-name">
                Full name <span className="text-destructive">*</span>
              </Label>
              <Input id="book-name" required aria-required="true" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="book-phone">
                  Mobile number <span className="text-destructive">*</span>
                </Label>
                <Input id="book-phone" required aria-required="true" type="tel" autoComplete="tel" placeholder="+44 7700 900123" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="book-email">
                  Email <span className="font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Input id="book-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="book-notes">Anything else? (optional)</Label>
              <textarea
                id="book-notes"
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                placeholder="Golf bags, a stop on the way, a special occasion…"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          {problem && (
            <p role="alert" className="text-sm font-medium text-destructive">
              {problem}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => send("whatsapp")} className={`${sendClass} bg-[#25D366] text-white hover:bg-[#20ba5a]`}>
              <MessageCircle className="h-5 w-5" />
              Send on WhatsApp
            </button>
            <button
              type="button"
              onClick={() => send("email")}
              className={`${sendClass} border border-border bg-background text-foreground hover:bg-navy-muted`}
            >
              <Mail className="h-5 w-5" />
              Send by email
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            * Only your name and mobile are required. Sending opens WhatsApp or your email app with your trip
            written out, and nothing is booked or charged until we confirm.
          </p>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WHATSAPP_NUMBER = "306948041931";
const REQUEST_EMAIL = "info@islavidajmk.com";
const OTHER = "Another venue";

interface ConciergeRequestFormProps {
  /** Heading above the form. */
  title: string;
  /** What the guest is asking for, e.g. "a restaurant or beach club reservation". */
  topic: string;
  /** Venue names offered in the list. Guests can also name another one. */
  venueNames: string[];
}

// The request form at the bottom of the concierge pages. Nothing is stored on the
// site: the buttons open WhatsApp or the guest's email app with the request written out.
export function ConciergeRequestForm({ title, topic, venueNames }: ConciergeRequestFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [venue, setVenue] = useState("");
  const [otherVenue, setOtherVenue] = useState("");
  const [problem, setProblem] = useState("");

  const chosenVenue = venue === OTHER ? otherVenue.trim() : venue;

  const buildMessage = () => {
    const details = [
      `Name: ${name.trim()}`,
      phone.trim() && `Phone: ${phone.trim()}`,
      email.trim() && `Email: ${email.trim()}`,
      date && `Date: ${date}`,
      chosenVenue && `Venue: ${chosenVenue}`,
      guests && `Guests: ${guests}`,
    ].filter(Boolean);
    return [`Hello Isla Vida, I would like to request ${topic}.`, "", ...details].join("\n");
  };

  // The name plus one way to reply is the least we need to answer a request.
  const check = () => {
    if (!name.trim()) return "Please add your name.";
    if (!phone.trim() && !email.trim()) return "Please add a phone number or an email.";
    return "";
  };

  const send = (channel: "whatsapp" | "email") => {
    const found = check();
    setProblem(found);
    if (found) return;
    const message = buildMessage();
    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      const subject = chosenVenue ? `Reservation request: ${chosenVenue}` : "Reservation request";
      window.location.href = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(message)}`;
    }
  };

  const sendClass =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";
  // Matches the look of the Input component.
  const selectClass =
    "h-9 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm";

  return (
    <section id="request" className="section-padding scroll-mt-24 bg-navy-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            Fill in the details and send them on WhatsApp or by email. We reply with what
            the venue confirms.
          </p>
        </div>

        <div className="grid gap-4 border border-border bg-background p-6 sm:p-8">
          <div className="grid gap-2">
            <Label htmlFor="request-form-name">Name</Label>
            <Input
              id="request-form-name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="request-form-phone">Phone number</Label>
              <Input
                id="request-form-phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="request-form-email">Email</Label>
              <Input
                id="request-form-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="request-form-date">Preferred date</Label>
              <Input
                id="request-form-date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="request-form-guests">Guests</Label>
              <Input
                id="request-form-guests"
                type="number"
                inputMode="numeric"
                min={1}
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="request-form-venue">Venue</Label>
            <select
              id="request-form-venue"
              className={selectClass}
              value={venue}
              onChange={(event) => setVenue(event.target.value)}
            >
              <option value="">Choose a venue</option>
              {venueNames.map((venueName) => (
                <option key={venueName} value={venueName}>
                  {venueName}
                </option>
              ))}
              <option value={OTHER}>{OTHER}</option>
            </select>
            {venue === OTHER && (
              <Input
                aria-label="Name of the venue"
                placeholder="Name of the venue"
                value={otherVenue}
                onChange={(event) => setOtherVenue(event.target.value)}
              />
            )}
          </div>

          {problem && (
            <p role="alert" className="text-sm font-medium text-destructive">
              {problem}
            </p>
          )}

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => send("whatsapp")}
              className={`${sendClass} bg-[#25D366] text-white hover:bg-[#20ba5a]`}
            >
              <MessageCircle className="h-4 w-4" />
              Send on WhatsApp
            </button>
            <button
              type="button"
              onClick={() => send("email")}
              className={`${sendClass} border border-border bg-background text-foreground hover:bg-navy-muted`}
            >
              <Mail className="h-4 w-4" />
              Send by email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type ReactNode } from "react";
import { Mail, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "306948041931";
const REQUEST_EMAIL = "info@islavidajmk.com";

interface ConciergeRequestDialogProps {
  /** What the guest is asking for, e.g. "a restaurant or beach club reservation". */
  topic: string;
  /** Example text inside the wishes box. */
  placeholder: string;
  /** The button that opens the dialog. */
  children: ReactNode;
}

export function ConciergeRequestDialog({
  topic,
  placeholder,
  children,
}: ConciergeRequestDialogProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [wishes, setWishes] = useState("");

  const details = [
    name && `Name: ${name}`,
    date && `Date: ${date}`,
    guests && `Guests: ${guests}`,
    wishes && `Wishes: ${wishes}`,
  ].filter(Boolean);

  const message = [
    `Hello Isla Vida, I would like to request ${topic}.`,
    ...(details.length > 0 ? ["", ...details] : []),
  ].join("\n");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const emailHref = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
    `Concierge request: ${topic}`,
  )}&body=${encodeURIComponent(message)}`;

  const sendClass =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Send your request</DialogTitle>
          <DialogDescription>
            Tell us the date, your group and what you have in mind. We reply with what is
            available.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="concierge-request-name">Your name</Label>
            <Input
              id="concierge-request-name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="concierge-request-date">Date</Label>
              <Input
                id="concierge-request-date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="concierge-request-guests">Guests</Label>
              <Input
                id="concierge-request-guests"
                type="number"
                inputMode="numeric"
                min={1}
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="concierge-request-wishes">What would you like?</Label>
            <Textarea
              id="concierge-request-wishes"
              rows={3}
              placeholder={placeholder}
              value={wishes}
              onChange={(event) => setWishes(event.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sendClass} bg-[#25D366] text-white hover:bg-[#20ba5a]`}
          >
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </a>
          <a
            href={emailHref}
            className={`${sendClass} border border-border bg-background text-foreground hover:bg-navy-muted`}
          >
            <Mail className="h-4 w-4" />
            Send by email
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

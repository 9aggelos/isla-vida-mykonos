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
import type { Villa } from "../data/villas";

const WHATSAPP_NUMBER = "306948041931";
const REQUEST_EMAIL = "info@islavidajmk.com";

interface VillaRequestDialogProps {
  /** Leave out for a general request that is not about one specific villa. */
  villa?: Pick<Villa, "name" | "area">;
  /** The button that opens the dialog. */
  children: ReactNode;
}

export function VillaRequestDialog({ villa, children }: VillaRequestDialogProps) {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");

  const datesInvalid = Boolean(checkIn && checkOut && checkOut <= checkIn);

  const details = [
    name && `Name: ${name}`,
    checkIn && `Check-in: ${checkIn}`,
    checkOut && `Check-out: ${checkOut}`,
    guests && `Guests: ${guests}`,
    notes && `Notes: ${notes}`,
  ].filter(Boolean);

  const message = [
    villa
      ? `Hello Isla Vida, I would like to request ${villa.name} (${villa.area}).`
      : "Hello Isla Vida, I am looking for a villa in Mykonos.",
    ...(details.length > 0 ? ["", ...details] : []),
  ].join("\n");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const emailHref = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
    villa ? `Villa request: ${villa.name}` : "Villa request",
  )}&body=${encodeURIComponent(message)}`;

  const sendClass =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";
  const blockedClass = datesInvalid ? " pointer-events-none opacity-50" : "";

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {villa ? `Request ${villa.name}` : "Request a villa"}
          </DialogTitle>
          <DialogDescription>
            Tell us your dates and group size. We reply with availability and the exact rate.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="villa-request-name">Your name</Label>
            <Input
              id="villa-request-name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="villa-request-check-in">Check-in</Label>
              <Input
                id="villa-request-check-in"
                type="date"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="villa-request-check-out">Check-out</Label>
              <Input
                id="villa-request-check-out"
                type="date"
                min={checkIn || undefined}
                value={checkOut}
                aria-invalid={datesInvalid}
                onChange={(event) => setCheckOut(event.target.value)}
              />
            </div>
          </div>
          {datesInvalid && (
            <p className="text-sm text-destructive" role="alert">
              Check-out must be after check-in.
            </p>
          )}

          <div className="grid gap-2">
            <Label htmlFor="villa-request-guests">Number of guests</Label>
            <Input
              id="villa-request-guests"
              type="number"
              inputMode="numeric"
              min={1}
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="villa-request-notes">Anything else? (optional)</Label>
            <Textarea
              id="villa-request-notes"
              rows={3}
              placeholder="Chef, transfers, yacht day, special occasion"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={datesInvalid}
            tabIndex={datesInvalid ? -1 : undefined}
            className={`${sendClass} bg-[#25D366] text-white hover:bg-[#20ba5a]${blockedClass}`}
          >
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </a>
          <a
            href={emailHref}
            aria-disabled={datesInvalid}
            tabIndex={datesInvalid ? -1 : undefined}
            className={`${sendClass} border border-border bg-background text-foreground hover:bg-navy-muted${blockedClass}`}
          >
            <Mail className="h-4 w-4" />
            Send by email
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

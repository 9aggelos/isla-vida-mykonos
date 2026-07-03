import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import contactImage from "../assets/hero-van.jpg";
import { Phone, Mail, MapPin, Instagram, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — Isla Vida Mykonos" },
      {
        name: "description",
        content:
          "Book a private transfer or chauffeur service in Mykonos. Contact Isla Vida Mykonos by phone, email, or WhatsApp. 24/7 availability.",
      },
      {
        property: "og:title",
        content: "Contact & Bookings — Isla Vida Mykonos",
      },
      {
        property: "og:description",
        content:
          "Book private transfers and chauffeur services in Mykonos. Contact us 24/7.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Book your Mykonos transfer"
        subtitle="Reach out for a quote, reservation, or question. We respond quickly and are available around the clock."
        image={contactImage}
      />

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display text-3xl font-bold text-card-foreground">
                Request a booking
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill in the details below and we will get back to you within minutes.
              </p>
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input id="phone" placeholder="+30 694 804 1931" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service type</Label>
                    <Input id="service" placeholder="Airport transfer, tour, chauffeur..." />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup location</Label>
                    <Input id="pickup" placeholder="Airport, port, hotel, villa..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropoff">Drop-off location</Label>
                    <Input id="dropoff" placeholder="Destination in Mykonos" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your dates, group size, flight or ferry details, and any special requests."
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2 bg-navy text-white hover:bg-navy-light"
                >
                  <Send className="h-4 w-4" />
                  Send request
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-accent">
                Contact
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
                Let's plan your journey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Prefer to call or message? We are available 24/7 and respond to every inquiry
                directly.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Phone / WhatsApp</p>
                    <a href="tel:+306948041931" className="text-lg font-medium text-foreground hover:text-navy">+30 694 804 1931</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Email</p>
                    <p className="text-lg font-medium text-foreground">info@islavida-mykonos.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Location</p>
                    <p className="text-lg font-medium text-foreground">Mykonos, Cyclades, Greece</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Availability</p>
                    <p className="text-lg font-medium text-foreground">24 hours, 7 days a week</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Instagram</p>
                    <p className="text-lg font-medium text-foreground">@islavida_mykonos</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

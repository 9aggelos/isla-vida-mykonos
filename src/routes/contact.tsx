import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import contactImage from "../assets/hero-van.jpg";
import { Phone, Mail, MapPin, Instagram, Clock, Send } from "lucide-react";

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
            {/* Setmore booking */}
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display text-3xl font-bold text-card-foreground">
                Book your transfer
              </h2>
              <p className="mt-2 text-muted-foreground">
                Reserve your ride online in minutes — pick a date and time that suits
                you and confirm instantly.
              </p>
              <a
                href="https://islavida.setmore.com/islavida"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                <Send className="h-4 w-4" />
                Book on Setmore
              </a>
              <div className="mt-6 overflow-hidden rounded-md border border-border">
                <iframe
                  src="https://islavida.setmore.com/islavida"
                  title="Book Isla Vida Mykonos on Setmore"
                  className="h-[600px] w-full"
                  loading="lazy"
                />
              </div>
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
                    <a
                      href="https://wa.me/306948041931"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground hover:text-navy"
                    >
                      WhatsApp +30 694 804 1931
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-muted text-navy">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Email</p>
                    <a
                      href="mailto:info@islavida-mykonos.com"
                      className="text-lg font-medium text-foreground hover:text-navy"
                    >
                      info@islavidajmk.com
                    </a>
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
                    <a
                      href="https://www.instagram.com/islavida_mykonos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground hover:text-navy"
                    >
                      @islavida_mykonos
                    </a>
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

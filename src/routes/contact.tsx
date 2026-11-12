import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import contactImage from "../assets/hero-van.webp";
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { TransferBookingForm } from "../components/TransferBookingForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Mykonos Transfer — Contact Isla Vida 24/7 | Isla Vida" },
      {
        name: "description",
        content:
          "Book your Mykonos private transfer or chauffeur service. Contact Isla Vida by WhatsApp, phone or email — 24/7 availability, instant quotes.",
      },
      {
        property: "og:site_name",
        content: "Isla Vida Mykonos",
      },
      { property: "og:title", content: "Book a Mykonos Transfer — Contact Isla Vida 24/7 | Isla Vida" },
      {
        property: "og:description",
        content:
          "Book private transfers and chauffeur services in Mykonos. WhatsApp, phone, email — 24/7.",
      },
      { property: "og:url", content: "https://www.islavidajmk.com/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://www.islavidajmk.com/contact" },
    ],
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
            {/* Transfer request form */}
            <div id="book" className="scroll-mt-24">
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground">Book your transfer</h2>
              <TransferBookingForm />
            </div>

            {/* Contact info */}
            <div className="flex flex-col lg:sticky lg:top-28 lg:self-start">
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
                      href="mailto:info@islavidajmk.com"
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
                    <p className="text-lg font-medium text-foreground">Mykonos 846 00, Greece</p>
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

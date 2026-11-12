import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

const SITE_URL = "https://www.islavidajmk.com";
const SHARE_IMAGE = `${SITE_URL}/og-image.jpg`;
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Karla:wght@400;500;600;700&display=swap";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        property: "og:site_name",
        content: "Isla Vida Mykonos",
      },
      // Picture shown when a page is shared on WhatsApp, Instagram or Facebook.
      // A page can replace it by setting its own og:image.
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [
      // The design uses Cormorant Garamond and Karla. The font file is fetched early here,
      // but switched on by the small script below, so the page shows its text straight
      // away in a standard font instead of waiting for Google Fonts.
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preload", as: "style", href: FONTS_URL },
      {
        rel: "preload",
        as: "style",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        // Switches on the fonts preloaded above without holding up the first paint.
        children: `(function(){var l=document.createElement("link");l.rel="stylesheet";l.href=${JSON.stringify(
          FONTS_URL,
        )};document.head.appendChild(l);})();`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "Isla Vida Mykonos",
              alternateName: ["Isla Vida", "Isla Vida JMK"],
              url: `${SITE_URL}/`,
              inLanguage: "en",
              publisher: { "@id": `${SITE_URL}/#business` },
            },
            {
              "@type": ["LocalBusiness", "TravelAgency"],
              "@id": `${SITE_URL}/#business`,
              name: "Isla Vida Mykonos",
              alternateName: ["Isla Vida", "Isla Vida JMK", "Isla Vida Mykonos Transfers & Concierge"],
              slogan: "Luxury Mykonos Transfers & Concierge Services",
              description:
                "Isla Vida Mykonos is a locally based private transfer, chauffeur and concierge company on Mykonos, Greece. It provides private airport (JMK), port and cruise port transfers from €36 per vehicle in Mercedes vehicles for up to 20 guests, a chauffeur by the hour, island tours, luxury villa rentals, yacht and helicopter charters, and beach club, restaurant and VIP table reservations, 24/7.",
              url: `${SITE_URL}/`,
              image: SHARE_IMAGE,
              logo: `${SITE_URL}/logo-isla-vida.jpg`,
              telephone: "+306948041931",
              email: "info@islavidajmk.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mykonos",
                postalCode: "846 00",
                addressRegion: "South Aegean",
                addressCountry: "GR",
              },
              geo: { "@type": "GeoCoordinates", latitude: 37.4398072, longitude: 25.3501356 },
              hasMap: "https://maps.google.com/?cid=1373307275586565091",
              areaServed: [
                { "@type": "Place", name: "Mykonos, Greece" },
                { "@type": "Airport", name: "Mykonos Airport (JMK)", iataCode: "JMK" },
                { "@type": "Place", name: "Mykonos New Port (Tourlos)" },
                { "@type": "Place", name: "Mykonos Old Port" },
              ],
              priceRange: "From €36 per vehicle",
              currenciesAccepted: "EUR",
              paymentAccepted: "Cash, Credit Card, Payment link",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "reservations",
                telephone: "+306948041931",
                email: "info@islavidajmk.com",
                url: "https://wa.me/306948041931",
                availableLanguage: ["English", "Greek"],
                hoursAvailable: "Mo-Su 00:00-23:59",
              },
              knowsAbout: [
                "Mykonos airport transfers",
                "Mykonos port transfers",
                "Mykonos cruise port transfers",
                "Luxury van transfers in Mykonos",
                "Private chauffeur in Mykonos",
                "Mykonos island tours",
                "Luxury villa rentals in Mykonos",
                "Yacht charters in Mykonos",
                "Helicopter transfers in Mykonos",
                "Mykonos beach club and restaurant reservations",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Isla Vida Mykonos services",
                itemListElement: [
                  ["Mykonos Airport Transfers", "/mykonos-airport-transfers", "Private transfers from Mykonos Airport (JMK) to any hotel or villa, from €36 per vehicle."],
                  ["Mykonos Port Transfers", "/mykonos-port-transfers", "Private transfers from Mykonos New Port and Old Port, with ferry tracking, from €36 per vehicle."],
                  ["Mykonos Cruise Port Transfers", "/mykonos-cruise-port-transfers", "Private transfers and shore tours for cruise passengers."],
                  ["Private Chauffeur and Island Tours", "/services", "A Mercedes with a local driver by the hour, for beach clubs, dinners, nights out and island tours."],
                  ["Luxury Villa Rentals", "/villas", "A collection of private luxury villas across Mykonos."],
                  ["Concierge", "/concierge", "Beach club, restaurant and VIP table reservations, private chefs, yachts, helicopters and event planning."],
                ].map(([name, path, description]) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name, description, url: `${SITE_URL}${path}` },
                })),
              },
              sameAs: ["https://www.instagram.com/islavida_mykonos/", "https://maps.google.com/?cid=1373307275586565091"],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </QueryClientProvider>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Plane, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import heroPhoto from "../assets/airport-transfer-hero.webp";
import heroPhoto1280 from "../assets/small/airport-transfer-hero-1280.webp";
import heroPhoto960 from "../assets/small/airport-transfer-hero-960.webp";
import heroPhoto640 from "../assets/small/airport-transfer-hero-640.webp";

const title = "Mykonos Airport Transfers from €36 | JMK | Isla Vida";
const description = "Private Mykonos airport transfers: your driver meets you at arrivals with a name sign and takes you to your villa, hotel or the port. From €36, 24/7.";
const pageUrl = "https://www.islavidajmk.com/mykonos-airport-transfers";
const whatsapp = "https://wa.me/306948041931";
const reviews = "https://www.google.com/search?q=ISLA+VIDA+MYKONOS+-+Private+Transfers+%26+Chauffeur+Services#lrd=0x0:0x130f5a1a2fbe9f23,1";

// Drive times from Mykonos Airport (JMK) in normal traffic.
// Prices start from €36 per vehicle for every route; see the note under the table.
const routes = [
  ["Mykonos Town (Chora)", "about 10 min"],
  ["Ornos", "about 10 min"],
  ["Psarou", "about 10–15 min"],
  ["Platis Gialos", "about 15 min"],
  ["Agios Ioannis", "about 15 min"],
  ["Paraga & Paradise", "about 15–20 min"],
  ["Super Paradise", "about 20 min"],
  ["Agios Stefanos", "about 15–20 min"],
  ["New Port (Tourlos)", "about 15 min"],
  ["Ftelia", "about 15 min"],
  ["Ano Mera", "about 15–20 min"],
  ["Elia", "about 20 min"],
  ["Kalo Livadi", "about 20–25 min"],
  ["Kalafatis", "about 25 min"],
];
const steps = [
  ["Send us your flight.", "Your flight number, arrival time, where you are staying and how many of you are travelling, with your bags."],
  ["Get a fixed price.", "We confirm your driver, vehicle and total price in writing. The price is per vehicle, not per person."],
  ["Meet your driver at arrivals.", "As you walk out of the arrivals hall, your driver is waiting with a sign showing your name and takes care of your luggage."],
  ["Straight to your door.", "A private, air-conditioned ride to your villa, hotel or the port, with no queue and no sharing."],
];
const reasons = [
  ["No taxi queue.", "Mykonos has only a small number of licensed taxis, and in July and August the queue at the airport can be long. Your car is already waiting."],
  ["Your flight, watched.", "We check your arrival time, so if your flight is late, your driver is still there when you land."],
  ["Fixed prices from €36.", "No meter and no surprises. You pay one fixed price per vehicle, agreed before you travel, for your whole party."],
  ["Luxury van transfers.", "Travel in a Mercedes V-Class or Vito luxury van for up to 8, a premium SUV for up to 4, or a Mercedes Sprinter for groups of up to 20, all with air conditioning and room for your bags. Child seats on request."],
  ["Local drivers.", "Our drivers were born and raised on Mykonos and know every villa road on the island, including the hard-to-find ones."],
  ["Rated 5.0 on Google.", "See what 74 guests have said about travelling with us."],
];
const questions = [
  ["How far is Mykonos Airport from the main areas?", "Not far: the airport is in the middle of the island. Mykonos Town and Ornos are about 10 minutes away, Psarou and Platis Gialos about 10 to 15, and the furthest beaches, like Kalafatis, about 25 minutes in normal traffic."],
  ["Are there taxis at Mykonos Airport?", "Yes, but Mykonos has only a small number of licensed taxis, so in high season the wait at the airport can be long, especially when several flights land together. A pre-booked private transfer avoids the queue."],
  ["Where will I meet my driver?", "Just outside the arrivals hall, holding a sign with your name. We send you the driver's name and phone number before you land."],
  ["What if my flight is delayed?", "Tell us your flight number when you book. We check your arrival time and adjust your pickup if your flight is late."],
  ["How much is a transfer from Mykonos Airport?", "Our private transfers start from €36 per vehicle. The final price depends on the distance to your villa or hotel and the number of guests, and we confirm it in writing before you travel."],
  ["Is the price per person or per vehicle?", "Per vehicle. The price you are quoted covers your whole party and luggage."],
  ["Do you offer luxury van transfers from Mykonos Airport?", "Yes. Most of our airport transfers are luxury van transfers in a Mercedes V-Class or Vito, for up to 8 guests with luggage. For a VIP arrival we also offer a premium SUV, and a Mercedes Sprinter for larger groups."],
  ["Which vehicles do you use?", "A premium SUV for up to 4 guests, a Mercedes Vito or Mercedes V-Class for up to 8, and a Mercedes Sprinter for groups of up to 20. Every vehicle has room for luggage."],
  ["Do you do departures to the airport too?", "Yes. We collect you from your villa or hotel and plan the pickup so you reach the airport in good time for your flight."],
  ["Can you take us from the airport to the port?", "Yes. If you are connecting to a ferry, we take you straight from the airport to the New Port or the Old Port."],
  ["Do you have child seats?", "Yes, on request. Tell us the children's ages when you book."],
  ["How do I pay?", "Cash, payment link or card."],
  ["What is your cancellation policy?", "You can cancel up to 24 hours before your pickup time."],
];

export const Route = createFileRoute("/mykonos-airport-transfers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "Mykonos airport transfer, luxury transfer Mykonos, luxury van transfer Mykonos, Mykonos airport taxi, JMK airport transfer, VIP transfer Mykonos, Mercedes V-Class Mykonos, private driver Mykonos" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Mykonos Airport Transfers",
          description,
          url: pageUrl,
          serviceType: "Luxury private airport transfer",
          provider: {
            "@type": "LocalBusiness",
            name: "Isla Vida Mykonos",
            url: "https://www.islavidajmk.com",
            telephone: "+306948041931",
            email: "info@islavidajmk.com",
            address: { "@type": "PostalAddress", addressLocality: "Mykonos", addressRegion: "Cyclades", addressCountry: "GR" },
          },
          areaServed: [{ "@type": "Place", name: "Mykonos Airport (JMK)" }, ...routes.map(([place]) => ({ "@type": "Place", name: `${place}, Mykonos` }))],
          offers: {
            "@type": "Offer",
            priceSpecification: { "@type": "PriceSpecification", minPrice: 36, priceCurrency: "EUR" },
            description: "Price per vehicle, from €36. The final price depends on distance and number of guests.",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: questions.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }),
      },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: AirportTransfersPage,
});

function AirportTransfersPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={heroPhoto} srcSet={`${heroPhoto640} 640w, ${heroPhoto960} 960w, ${heroPhoto1280} 1280w, ${heroPhoto} 1576w`} sizes="100vw" alt="Black Mercedes luxury van for private airport transfers in Mykonos" width={1576} height={985} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Mykonos Airport Transfers</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">Land at Mykonos Airport (JMK) and walk straight to your car. Your private driver meets you at arrivals with a sign showing your name and takes you to your villa, hotel or the port in a luxury Mercedes van or premium SUV. No taxi queue, and fixed prices from €36 per vehicle.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Book your transfer</a></Button>
            <Button asChild size="lg" variant="secondary"><a href="#routes"><Plane />Routes and times</a></Button>
          </div>
          <a href={reviews} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-start gap-2 text-sm text-primary-foreground/90 underline-offset-4 hover:underline"><Star className="mt-0.5 h-4 w-4 shrink-0" />Rated 5.0 on Google from 74 reviews. Arrivals and departures, 24/7.</a>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Land, relax, we take it from here. Enjoy Mykonos like a local.</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([heading, text], index) => <li key={heading} className="border-t border-border pt-5"><span className="text-sm font-semibold text-navy-accent">0{index + 1}</span><h3 className="mt-3 font-display text-2xl font-semibold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="routes" className="section-padding scroll-mt-28 border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Mykonos Airport transfer routes</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Mykonos Airport sits in the middle of the island, so nowhere is far. Here are typical drive times from the airport. We go anywhere on Mykonos, so if your area isn't listed, just ask.</p>
          <p className="mt-6 inline-block rounded-md bg-background px-5 py-3 font-display text-2xl font-semibold">Transfers from €36 per vehicle</p>
          <div className="mt-8 hidden sm:block">
            <table className="w-full table-fixed text-left">
              <thead className="border-b border-border text-sm"><tr><th className="py-4 pr-4">From Mykonos Airport to</th><th className="w-1/3 py-4">Drive time</th></tr></thead>
              <tbody>{routes.map(([place, time]) => <tr key={place} className="border-b border-border"><th className="py-4 pr-4 font-display text-xl font-semibold">{place}</th><td className="py-4">{time}</td></tr>)}</tbody>
            </table>
          </div>
          <dl className="mt-8 space-y-4 sm:hidden">{routes.map(([place, time]) => <div key={place} className="border-t border-border pt-4"><dt className="font-display text-xl font-semibold">{place}</dt><dd className="mt-1 text-muted-foreground">{time}</dd></div>)}</dl>
          <p className="mt-6 leading-relaxed text-muted-foreground">Times are in normal traffic; summer evenings can take longer. The final price depends on the distance and the number of guests, and covers your whole party and luggage. We confirm it in writing before you travel. Arriving by ferry instead? See our <Link to="/mykonos-port-transfers" className="underline underline-offset-4">port transfers</Link>. On a cruise ship? See our <Link to="/mykonos-cruise-port-transfers" className="underline underline-offset-4">cruise port transfers</Link>.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Why book your luxury airport transfer with Isla Vida</h2>
          <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([heading, text]) => <li key={heading}><h3 className="font-display text-2xl font-semibold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{heading === "Rated 5.0 on Google." ? <a href={reviews} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{text}</a> : text}</p></li>)}</ul>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions about Mykonos Airport transfers</h2>
          <dl className="mt-8 divide-y divide-border">{questions.map(([question, answer]) => <div key={question} className="py-6"><dt className="font-display text-xl font-semibold sm:text-2xl">{question}</dt><dd className="mt-3 leading-relaxed text-muted-foreground">{answer}</dd></div>)}</dl>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Flying into Mykonos soon?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">Send us your flight and where you're staying, and we'll reply with a fixed price and your driver's details.</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 h-auto min-h-10 whitespace-normal py-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Book your transfer</a></Button>
        </div>
      </section>
    </div>
  );
}

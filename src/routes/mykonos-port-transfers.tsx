import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Ship, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import heroPhoto from "../assets/port-transfer-hero.webp";
import heroPhoto1280 from "../assets/small/port-transfer-hero-1280.webp";
import heroPhoto960 from "../assets/small/port-transfer-hero-960.webp";
import heroPhoto640 from "../assets/small/port-transfer-hero-640.webp";

const title = "Mykonos Port Transfers from €36 | Ferry Pickups | Isla Vida";
const description = "Private Mykonos port transfers: your driver meets your ferry at the New Port or Old Port and takes you to your villa, hotel or the airport. From €36, 24/7.";
const pageUrl = "https://www.islavidajmk.com/mykonos-port-transfers";
const whatsapp = "https://wa.me/306948041931";
const reviews = "https://www.google.com/search?q=ISLA+VIDA+MYKONOS+-+Private+Transfers+%26+Chauffeur+Services#lrd=0x0:0x130f5a1a2fbe9f23,1";

// Drive times from Mykonos New Port (Tourlos) in normal traffic. From the Old Port, Mykonos Town is on foot.
// Prices start from €36 per vehicle for every route; see the note under the table.
const routes = [
  ["Agios Stefanos", "about 5 min"],
  ["Mykonos Town (Chora)", "about 5–10 min"],
  ["Houlakia & Agios Sostis", "about 10 min"],
  ["Mykonos Airport (JMK)", "about 15 min"],
  ["Ornos", "about 15 min"],
  ["Ftelia", "about 15 min"],
  ["Psarou", "about 15–20 min"],
  ["Platis Gialos", "about 20 min"],
  ["Agios Ioannis", "about 20 min"],
  ["Ano Mera", "about 20 min"],
  ["Paraga & Paradise", "about 20–25 min"],
  ["Super Paradise", "about 25 min"],
  ["Elia", "about 25 min"],
  ["Kalo Livadi", "about 25–30 min"],
  ["Kalafatis", "about 30 min"],
];
const steps = [
  ["Send us your ferry.", "Your ferry company, arrival time, which port, where you are staying and how many of you are travelling, with your bags."],
  ["Get a fixed price.", "We confirm your driver, vehicle and total price in writing. The price is per vehicle, not per person."],
  ["Meet your driver at the port.", "As you walk off the ferry, your driver is waiting with a sign showing your name and takes care of your luggage."],
  ["Straight to your door.", "A private, air-conditioned ride to your villa, hotel, the airport or anywhere on the island, with no queue and no sharing."],
];
const reasons = [
  ["No taxi queue.", "Mykonos has only a small number of licensed taxis, and when a big ferry docks, hundreds of passengers arrive at once. Your car is already waiting."],
  ["Your ferry, watched.", "In summer the meltemi wind can delay ferries. We follow your ferry's arrival, so your driver is there whenever it docks."],
  ["Fixed prices from €36.", "No meter and no surprises. You pay one fixed price per vehicle, agreed before you travel, for your whole party."],
  ["Luxury van transfers.", "Travel in a Mercedes V-Class or Vito luxury van for up to 8, a premium SUV for up to 4, or a Mercedes Sprinter for groups of up to 20, all with air conditioning and room for your bags. Child seats on request."],
  ["Local drivers.", "Our drivers were born and raised on Mykonos and know every villa road on the island, including the hard-to-find ones."],
  ["Rated 5.0 on Google.", "See what 74 guests have said about travelling with us."],
];
const questions = [
  ["New Port or Old Port: where does my ferry arrive?", "Most ferries arrive at the New Port in Tourlos, about 3 km north of Mykonos Town. A few smaller boats use the Old Port in the town itself. Your ferry ticket shows which port; send it to us and we will meet you at the right one."],
  ["How much is a transfer from Mykonos port?", "Our private transfers start from €36 per vehicle. The final price depends on the distance to your villa or hotel and the number of guests, and we confirm it in writing before you travel."],
  ["How far is Mykonos port from the main areas?", "Not far. From the New Port, Mykonos Town is about 5 to 10 minutes away, Ornos and the airport about 15, Psarou and Platis Gialos about 15 to 20, and the furthest beaches, like Kalafatis, about 30 minutes in normal traffic."],
  ["Are there taxis at Mykonos port?", "Yes, but Mykonos has only a small number of licensed taxis, so when a large ferry arrives the queue can be long. A pre-booked private transfer avoids the wait."],
  ["Where will I meet my driver?", "At the port, where passengers walk off the ferry, holding a sign with your name. We send you the driver's name and phone number before you arrive."],
  ["What if my ferry is late or cancelled?", "Tell us your ferry when you book. We follow its arrival and adjust your pickup if it is delayed. If it is cancelled because of the wind, we rearrange your transfer for your new crossing."],
  ["Can you take us from the port to the airport?", "Yes. If you are connecting to a flight, we take you straight from the New Port or the Old Port to Mykonos Airport (JMK), about 15 minutes away."],
  ["Do you do transfers to the port for departures?", "Yes. We collect you from your villa or hotel and plan the pickup so you reach the port in good time for your ferry."],
  ["Do you offer luxury van transfers from Mykonos port?", "Yes. Most of our port transfers are luxury van transfers in a Mercedes V-Class or Vito, for up to 8 guests with luggage. For a VIP arrival we also offer a premium SUV, and a Mercedes Sprinter for larger groups."],
  ["Which vehicles do you use?", "A premium SUV for up to 4 guests, a Mercedes Vito or Mercedes V-Class for up to 8, and a Mercedes Sprinter for groups of up to 20. Every vehicle has room for luggage."],
  ["Is the price per person or per vehicle?", "Per vehicle. The price you are quoted covers your whole party and luggage."],
  ["Do you have child seats?", "Yes, on request. Tell us the children's ages when you book."],
  ["How do I pay?", "Cash, payment link or card."],
  ["What is your cancellation policy?", "You can cancel up to 24 hours before your pickup time."],
];

export const Route = createFileRoute("/mykonos-port-transfers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "Mykonos port transfer, Mykonos ferry transfer, luxury transfer Mykonos, luxury van transfer Mykonos, Mykonos port taxi, Mykonos New Port transfer, VIP transfer Mykonos, Mercedes V-Class Mykonos" },
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
          name: "Mykonos Port Transfers",
          description,
          url: pageUrl,
          serviceType: "Luxury private port transfer",
          provider: {
            "@type": "LocalBusiness",
            name: "Isla Vida Mykonos",
            url: "https://www.islavidajmk.com",
            telephone: "+306948041931",
            email: "info@islavidajmk.com",
            address: { "@type": "PostalAddress", addressLocality: "Mykonos", addressRegion: "Cyclades", addressCountry: "GR" },
          },
          areaServed: [{ "@type": "Place", name: "Mykonos New Port (Tourlos)" }, { "@type": "Place", name: "Mykonos Old Port" }, ...routes.map(([place]) => ({ "@type": "Place", name: `${place}, Mykonos` }))],
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
  component: PortTransfersPage,
});

function PortTransfersPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={heroPhoto} srcSet={`${heroPhoto640} 640w, ${heroPhoto960} 960w, ${heroPhoto1280} 1280w, ${heroPhoto} 2100w`} sizes="100vw" alt="Mercedes luxury van waiting on the quay at Mykonos port" width={2100} height={1181} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Mykonos Port Transfers</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">Step off the ferry at the New Port or the Old Port and walk straight to your car. Your private driver meets you with a sign showing your name and takes you to your villa, hotel or the airport in a luxury Mercedes van or premium SUV. No taxi queue, and fixed prices from €36 per vehicle.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Book your transfer</a></Button>
            <Button asChild size="lg" variant="secondary"><a href="#routes"><Ship />Routes and times</a></Button>
          </div>
          <a href={reviews} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-start gap-2 text-sm text-primary-foreground/90 underline-offset-4 hover:underline"><Star className="mt-0.5 h-4 w-4 shrink-0" />Rated 5.0 on Google from 74 reviews. Ferry arrivals and departures, 24/7.</a>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Step off the ferry, we take it from here. Enjoy Mykonos like a local.</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([heading, text], index) => <li key={heading} className="border-t border-border pt-5"><span className="text-sm font-semibold text-navy-accent">0{index + 1}</span><h3 className="mt-3 font-display text-2xl font-semibold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="routes" className="section-padding scroll-mt-28 border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Mykonos port transfer routes</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Most ferries dock at the New Port in Tourlos, just north of Mykonos Town. Here are typical drive times from there. We go anywhere on Mykonos, so if your area isn't listed, just ask.</p>
          <p className="mt-6 inline-block rounded-md bg-background px-5 py-3 font-display text-2xl font-semibold">Transfers from €36 per vehicle</p>
          <div className="mt-8 hidden sm:block">
            <table className="w-full table-fixed text-left">
              <thead className="border-b border-border text-sm"><tr><th className="py-4 pr-4">From Mykonos New Port to</th><th className="w-1/3 py-4">Drive time</th></tr></thead>
              <tbody>{routes.map(([place, time]) => <tr key={place} className="border-b border-border"><th className="py-4 pr-4 font-display text-xl font-semibold">{place}</th><td className="py-4">{time}</td></tr>)}</tbody>
            </table>
          </div>
          <dl className="mt-8 space-y-4 sm:hidden">{routes.map(([place, time]) => <div key={place} className="border-t border-border pt-4"><dt className="font-display text-xl font-semibold">{place}</dt><dd className="mt-1 text-muted-foreground">{time}</dd></div>)}</dl>
          <p className="mt-6 leading-relaxed text-muted-foreground">Times are in normal traffic; summer evenings can take longer. The final price depends on the distance and the number of guests, and covers your whole party and luggage. We confirm it in writing before you travel. Flying in instead? See our <Link to="/mykonos-airport-transfers" className="underline underline-offset-4">airport transfers</Link>. Arriving on a cruise ship? See our <Link to="/mykonos-cruise-port-transfers" className="underline underline-offset-4">cruise port transfers</Link>.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Why book your luxury port transfer with Isla Vida</h2>
          <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([heading, text]) => <li key={heading}><h3 className="font-display text-2xl font-semibold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{heading === "Rated 5.0 on Google." ? <a href={reviews} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{text}</a> : text}</p></li>)}</ul>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions about Mykonos port transfers</h2>
          <dl className="mt-8 divide-y divide-border">{questions.map(([question, answer]) => <div key={question} className="py-6"><dt className="font-display text-xl font-semibold sm:text-2xl">{question}</dt><dd className="mt-3 leading-relaxed text-muted-foreground">{answer}</dd></div>)}</dl>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Arriving in Mykonos by ferry?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">Send us your ferry and where you're staying, and we'll reply with a fixed price and your driver's details.</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 h-auto min-h-10 whitespace-normal py-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Book your transfer</a></Button>
        </div>
      </section>
    </div>
  );
}

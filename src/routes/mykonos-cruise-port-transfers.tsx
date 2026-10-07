import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import portVehicle from "../assets/van-yacht.webp";

const title = "Mykonos Cruise Port Transfers & Shore Tours | Isla Vida";
const description = "Private Mykonos cruise port transfers and shore tours: a pre-booked alternative to port taxis. Your driver meets you at the port and gets you back to your ship on time.";
const whatsapp = "https://wa.me/306948041931";
const reviews = "https://www.google.com/search?q=ISLA+VIDA+MYKONOS+-+Private+Transfers+%26+Chauffeur+Services#lrd=0x0:0x130f5a1a2fbe9f23,1";

export const Route = createFileRoute("/mykonos-cruise-port-transfers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.islavidajmk.com/mykonos-cruise-port-transfers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
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
    links: [
      { rel: "canonical", href: "https://www.islavidajmk.com/mykonos-cruise-port-transfers" },
      { rel: "preload", as: "image", href: portVehicle, type: "image/webp" },
    ],
  }),
  component: CruisePortPage,
});

const steps = [
  ["Tell us your ship.", "Send us your ship's name, the date, your arrival and all-aboard times, and how many you are."],
  ["Get a fixed price.", "We confirm your driver, vehicle and total price in writing. The price is per vehicle, not per person."],
  ["Meet your driver at the port.", "At the New Port in Tourlos, your driver waits outside the passport control gate holding a sign with your name. If your ship brings you ashore at the Old Port, we confirm the meeting point when you book."],
  ["Enjoy Mykonos.", "Take your transfer or tour, and we return you to the port well before all-aboard."],
];
const tours = [
  ["Mykonos Highlights", "3 hours", "The windmills, Little Venice, Mykonos Town and a panoramic viewpoint", "Price on request"],
  ["Island and Beaches", "4 hours", "The highlights plus village and beach stops chosen with your driver", "Price on request"],
  ["Your Own Day", "5 to 6 hours", "Your choice: a beach club, a long lunch, shopping, hidden beaches", "Price on request"],
];
const reasons = [
  ["Timed around your ship.", "We follow your ship's arrival and plan every route so you are back at the port with time to spare."],
  ["Private, at one price.", "You pay per vehicle, so a family or group of friends often pays less than on a ship excursion."],
  ["Local drivers.", "Our drivers were born and raised on Mykonos and know the quiet roads, the best viewpoints and where to eat."],
  ["Comfortable vehicles.", "Air conditioning, complimentary WiFi, space for bags and child seats on request."],
  ["Every guest welcome.", "We are proudly LGBTQ+ friendly and offer every couple, family and group the same discreet service."],
  ["Rated 5.0 on Google.", "See what 67 guests have said about travelling with us."],
];
const questions = [
  ["Where does my ship dock in Mykonos?", "Most large ships dock at the New Port in Tourlos, a short drive from Mykonos Town. Some ships anchor offshore and bring guests by tender boat to the Old Port in town. We meet you at either one."],
  ["Where will I find my driver?", "At the New Port, your driver waits outside the passport control gate with a sign showing your name. If you come ashore at the Old Port, we confirm the meeting point when you book. We send you the driver's name, photo and phone number before you arrive."],
  ["What if my ship arrives late?", "We follow your ship's arrival and move your pickup to match, at no extra cost."],
  ["Will I be back in time for my ship?", "Yes. We plan every tour to return you to the port well before your all-aboard time."],
  ["Is the price per person or per vehicle?", "Per vehicle. The price you are quoted covers your whole party."],
  ["How many people can travel together?", "Up to 4 in our premium SUV and up to 7 in our premium van. Larger groups travel in several vehicles together."],
  ["Can we change the route during the tour?", "Yes. The tour is private, so you can add a stop, stay longer somewhere or skip a place."],
  ["Do you have child seats?", "Yes, on request. Tell us the children's ages when you book."],
  ["How do I pay?", "Cash, payment link or card."],
  ["What is your cancellation policy?", "You can cancel up to 24 hours before your pickup time."],
  ["How far ahead should I book?", "As soon as you know your cruise date. July and August fill early. Same-day bookings are possible when a vehicle is free."],
];

function CruisePortPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={portVehicle} alt="Private driver and vehicle waiting for cruise passengers at Mykonos New Port" width={1920} height={1080} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Mykonos Cruise Port Transfers &amp; Private Shore Tours</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">Step off your ship and into a private vehicle. Your local driver meets you at the port, shows you Mykonos at your own pace and has you back well before all-aboard.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Book with us</a></Button>
            <Button asChild size="lg" variant="secondary"><a href="#shore-tours">See shore tours<ArrowRight /></a></Button>
          </div>
          <a href={reviews} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-start gap-2 text-sm text-primary-foreground/90 underline-offset-4 hover:underline"><Star className="mt-0.5 h-4 w-4 shrink-0" />Rated 5.0 on Google from 67 reviews. Available for every ship, every day of the season.</a>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">From gangway to island in four steps</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([heading, text], index) => <li key={heading} className="border-t border-border pt-5"><span className="text-sm font-semibold text-navy-accent">0{index + 1}</span><h3 className="mt-3 font-display text-2xl font-semibold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Cruise port transfers</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">A private ride from your ship straight to where you want to spend the day: Mykonos Town, a beach, a beach club or a restaurant. Book one way or with a return at a time you choose, and we plan the drive back around your all-aboard time. Send us your ship and date for a fixed price per vehicle.</p>
          <div id="shore-tours" className="mt-14 scroll-mt-28">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Private shore tours</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">See the island with a local driver instead of a coach group. Every tour is private to your party, and the stops are arranged with your driver around your preferences.</p>
            <div className="mt-8 hidden sm:block">
              <table className="w-full table-fixed text-left">
                <thead className="border-b border-border text-sm"><tr><th className="w-1/4 py-4 pr-4">Tour</th><th className="w-1/6 py-4 pr-4">Time</th><th className="py-4 pr-4">What you see</th><th className="w-1/6 py-4">Price per vehicle</th></tr></thead>
                <tbody>{tours.map(([name, time, stops, price]) => <tr key={name} className="border-b border-border"><th className="py-6 pr-4 font-display text-xl font-semibold">{name}</th><td className="py-6 pr-4">{time}</td><td className="py-6 pr-6 leading-relaxed text-muted-foreground">{stops}</td><td className="py-6">{price}</td></tr>)}</tbody>
              </table>
            </div>
            <dl className="mt-8 space-y-6 sm:hidden">{tours.map(([name, time, stops, price]) => <div key={name} className="border-t border-border pt-5"><dt className="font-display text-2xl font-semibold">{name}</dt><dd className="mt-2 font-medium">{time} · {price}</dd><dd className="mt-3 leading-relaxed text-muted-foreground">{stops}</dd></div>)}</dl>
            <p className="mt-6 leading-relaxed text-muted-foreground">Prices are per vehicle. Our premium SUV seats up to 4 guests and our premium van up to 7. For larger groups we arrange several vehicles that travel together.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Why cruise guests choose Isla Vida</h2>
          <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([heading, text]) => <li key={heading}><h3 className="font-display text-2xl font-semibold">{heading}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{heading === "Rated 5.0 on Google." ? <a href={reviews} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{text}</a> : text}</p></li>)}</ul>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions cruise guests ask</h2>
          <dl className="mt-8 divide-y divide-border">{questions.map(([question, answer]) => <div key={question} className="py-6"><dt className="font-display text-xl font-semibold sm:text-2xl">{question}</dt><dd className="mt-3 leading-relaxed text-muted-foreground">{answer}</dd></div>)}</dl>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Docking in Mykonos soon?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">Send us your ship and date, and we will reply with a fixed price and your driver's details.</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 h-auto min-h-10 whitespace-normal py-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Book with us</a></Button>
        </div>
      </section>
    </div>
  );
}
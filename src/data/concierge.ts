// Venues, photos and questions for the concierge pages.

import nammosPsarou from "../assets/venues/nammos-psarou.webp";
import santaMarinaOrnos from "../assets/venues/santa-marina-ornos.webp";
import principotePanormos from "../assets/venues/principote-panormos.webp";
import scorpiosParaga from "../assets/venues/scorpios-paraga.webp";
import alemagouFtelia from "../assets/venues/alemagou-ftelia.webp";
import spiliaAgiaAnna from "../assets/venues/spilia-agia-anna.webp";
import seaSatin from "../assets/venues/sea-satin-little-venice.webp";
import interni from "../assets/venues/interni-mykonos-town.webp";
import cavoParadiso from "../assets/venues/cavo-paradiso.webp";
import astra from "../assets/venues/astra-mykonos-town.webp";
import nightPalms from "../assets/venues/nightlife-palms.webp";

export interface VenuePhoto {
  name: string;
  /** Where on the island the venue is. */
  place: string;
  photo: string;
}

// ---------------------------------------------------------------------------
// RESTAURANTS & BEACH CLUBS
// ---------------------------------------------------------------------------
// Every venue here appears as a row with its own "Request" button.
// To add one, copy a line and change the details. To remove one, delete its line.
//   kind      "beach" or "restaurant": decides which list it goes in
//   note      a few words on what it is
//   photo     optional; without one the row shows the venue's initial
//   featured  optional; shows the photo large at the top of the page.
//             Use it only for photos at least 1000px wide, and keep the
//             number of featured venues even.
// Use a venue's photo only with the venue's permission.
// ---------------------------------------------------------------------------

export interface Venue {
  name: string;
  place: string;
  note: string;
  kind: "beach" | "restaurant";
  photo?: string;
  featured?: boolean;
}

export const venues: Venue[] = [
  // Beach clubs
  { kind: "beach", name: "Nammos", place: "Psarou Beach", note: "Beach restaurant and sunbeds", photo: nammosPsarou, featured: true },
  { kind: "beach", name: "Principote", place: "Panormos Beach", note: "Beach club and restaurant", photo: principotePanormos },
  { kind: "beach", name: "Scorpios", place: "Paraga Beach", note: "Beach club and restaurant", photo: scorpiosParaga },
  { kind: "beach", name: "Alemagou", place: "Ftelia Beach", note: "Beach bar and restaurant", photo: alemagouFtelia, featured: true },
  { kind: "beach", name: "Solymar", place: "Kalo Livadi Beach", note: "Beach restaurant and sunbeds" },
  { kind: "beach", name: "Spilia", place: "Agia Anna, Kalafatis", note: "Seaside restaurant in a rocky cove", photo: spiliaAgiaAnna },

  // Restaurants
  { kind: "restaurant", name: "Interni", place: "Mykonos Town", note: "Garden courtyard dining", photo: interni },
  { kind: "restaurant", name: "Noema", place: "Mykonos Town", note: "Open-air Greek dining" },
  { kind: "restaurant", name: "Katrin", place: "Mykonos Town", note: "Long-established town restaurant" },
  { kind: "restaurant", name: "Buddha-Bar Beach", place: "Santa Marina, Ornos Bay", note: "Asian-inspired dining by the sea", photo: santaMarinaOrnos, featured: true },
  { kind: "restaurant", name: "Lío Mykonos", place: "Mykonos Town", note: "Dinner with a cabaret show" },
  { kind: "restaurant", name: "Kalita", place: "Mykonos Town", note: "Garden dining" },
  { kind: "restaurant", name: "Kastro's", place: "Little Venice", note: "Sunset tables by the water" },
  { kind: "restaurant", name: "Sea Satin Market", place: "Little Venice", note: "Seafood by the water", photo: seaSatin, featured: true },
];

// Upright photos on the Nightlife & VIP Tables page, shown small.
export const nightlifeTiles: VenuePhoto[] = [
  { name: "Cavo Paradiso", place: "Paradise Beach", photo: cavoParadiso },
  { name: "Astra", place: "Mykonos Town", photo: astra },
  { name: "Open-air nights", place: "Through the season", photo: nightPalms },
];

export const nightlifeVenues: string[] = ["Cavo Paradiso", "Astra"];

export interface Question {
  question: string;
  answer: string;
}

export const restaurantQuestions: Question[] = [
  {
    question: "Can you get me a reservation at Nammos, Scorpios or Principote?",
    answer:
      "We request it for you. Send us the date, your group size and whether you want sunbeds, a lunch table or both. We contact the venue and tell you what they confirm, at what time and on what conditions.",
  },
  {
    question: "How do I book a table at Interni, Noema or Lío Mykonos?",
    answer:
      "Send us the restaurant, the date and the hour you prefer. We ask the restaurant, confirm the table with you and can have a driver take you there and back.",
  },
  {
    question: "How far ahead should I book a restaurant or beach club in Mykonos?",
    answer:
      "As early as you can. In July and August the most requested restaurants and beach clubs fill days or weeks ahead, so send us your dates as soon as your trip is fixed. For last-minute plans we tell you honestly what is still open.",
  },
  {
    question: "Can you reserve sunbeds as well as a table?",
    answer:
      "Yes. Tell us whether you want sunbeds, a cabana or a lunch table, and for how many guests. We request it with the beach club and confirm what they offer for your date.",
  },
  {
    question: "Can you arrange the transfer too?",
    answer:
      "Yes. Private transfers are what we do every day. Your driver takes you from your villa or hotel to the venue and back, so nobody has to drive or wait for a taxi.",
  },
  {
    question: "Is my table guaranteed?",
    answer:
      "A reservation is final once the venue confirms it. We tell you clearly what is confirmed, the time and any conditions the venue sets, before you make plans around it.",
  },
];

export const nightlifeQuestions: Question[] = [
  {
    question: "Can you book a VIP table at Cavo Paradiso or Astra?",
    answer:
      "We request it for you. Send us the night, the venue and your group size, and we come back with what the venue offers and its conditions before you commit.",
  },
  {
    question: "How does a VIP table reservation in Mykonos work?",
    answer:
      "You send us the date, the venue you have in mind and your group size. We request the table, tell you what the venue offers and its conditions, and book it once you agree.",
  },
  {
    question: "Is there a minimum spend for a VIP table?",
    answer:
      "Most venues set a minimum spend per table. It changes with the venue, the date and the size of your group, and we tell you the amount before you commit.",
  },
  {
    question: "How far ahead should we book?",
    answer:
      "For weekends in July and August, and for nights with a well-known DJ, book as early as you can. Tables for those nights are the first to go.",
  },
  {
    question: "Can a driver take us there and bring us home?",
    answer:
      "Yes. We arrange a private vehicle for the night: to the venue, between venues if you move on, and back to your villa or hotel when you are ready to leave.",
  },
];

/** Search-engine markup for a list of questions. */
export function faqStructuredData(questions: Question[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    }),
  };
}

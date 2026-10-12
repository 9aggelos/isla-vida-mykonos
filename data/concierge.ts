// Venues, photos and questions for the concierge pages.

import nammosPsarou from "../assets/venues/nammos-psarou.webp";
import santaMarinaOrnos from "../assets/venues/santa-marina-ornos.webp";
import principotePanormos from "../assets/venues/principote-panormos.webp";
import scorpiosParaga from "../assets/venues/scorpios-paraga.webp";
import alemagouFtelia from "../assets/venues/alemagou-ftelia.webp";
import eliaBeach from "../assets/venues/elia-beach.webp";
import spiliaAgiaAnna from "../assets/venues/spilia-agia-anna.webp";
import seaSatin from "../assets/venues/sea-satin-little-venice.webp";
import interni from "../assets/venues/interni-mykonos-town.webp";
import cavoParadiso from "../assets/venues/cavo-paradiso.webp";
import astra from "../assets/venues/astra-mykonos-town.webp";
import nightPalms from "../assets/venues/nightlife-palms.webp";
import alemagouNight from "../assets/venues/alemagou-night.webp";
import moni from "../assets/venues/moni-mykonos-town.webp";
import kalita from "../assets/venues/kalita-mykonos-town.webp";
import kastros from "../assets/venues/kastros-little-venice.webp";
import katrin from "../assets/venues/katrin-mykonos-town.webp";
import lio from "../assets/venues/lio-mykonos-town.webp";
import solymar from "../assets/venues/solymar-kalo-livadi.webp";
import noema from "../assets/venues/noema-mykonos-town.webp";
import superParadise from "../assets/venues/super-paradise-beach.webp";
import jackieO from "../assets/venues/jackie-o-super-paradise.webp";
import sunset180 from "../assets/venues/180-sunset-bar.webp";
import numi from "../assets/venues/numi-sunset.webp";
import negrita from "../assets/venues/negrita-little-venice.webp";
import scarpa from "../assets/venues/scarpa-little-venice.webp";
import cerise from "../assets/venues/cerise-little-venice.webp";

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
//   featured  optional; shows the venue under "Signature addresses".
//             "large" needs a photo at least 1000px wide; keep these in pairs.
//             "small" suits photos from 400px wide; keep these in fours.
// Use a venue's photo only with the venue's permission.
// ---------------------------------------------------------------------------

export interface Venue {
  name: string;
  place: string;
  note: string;
  kind: "beach" | "restaurant" | "sunset";
  photo?: string;
  featured?: "large" | "small";
}

export const venues: Venue[] = [
  // Beach clubs, in the order we are asked for them most.
  { kind: "beach", name: "Scorpios", place: "Paraga Beach", note: "Beach club and restaurant", photo: scorpiosParaga, featured: "small" },
  { kind: "beach", name: "Nammos", place: "Psarou Beach", note: "Beach restaurant and sunbeds", photo: nammosPsarou, featured: "large" },
  { kind: "beach", name: "Principote", place: "Panormos Beach", note: "Beach club and restaurant", photo: principotePanormos, featured: "small" },
  { kind: "beach", name: "Alemagou", place: "Ftelia Beach", note: "Beach bar and restaurant", photo: alemagouFtelia, featured: "large" },
  { kind: "beach", name: "Solymar", place: "Kalo Livadi Beach", note: "Beach restaurant and sunbeds", photo: solymar, featured: "small" },
  { kind: "beach", name: "Spilia", place: "Agia Anna, Kalafatis", note: "Seaside restaurant in a rocky cove", photo: spiliaAgiaAnna, featured: "small" },
  { kind: "beach", name: "Super Paradise", place: "Super Paradise Beach", note: "Beach club and sunbeds", photo: superParadise, featured: "small" },
  { kind: "beach", name: "Jackie O' Beach", place: "Super Paradise Beach", note: "LGBTQ+ beach club, bar and restaurant with a daytime show", photo: jackieO, featured: "small" },
  { kind: "beach", name: "Elia Beach", place: "Elia Beach", note: "LGBTQ+ friendly beach with a nudist section, on the island's longest stretch of sand", photo: eliaBeach, featured: "small" },

  // Restaurants, in the order we are asked for them most.
  { kind: "restaurant", name: "Interni", place: "Mykonos Town", note: "Garden courtyard dining", photo: interni, featured: "small" },
  { kind: "restaurant", name: "Buddha-Bar Beach", place: "Santa Marina, Ornos Bay", note: "Asian-inspired dining by the sea", photo: santaMarinaOrnos, featured: "large" },
  { kind: "restaurant", name: "Sea Satin Market", place: "Little Venice", note: "Seafood by the water", photo: seaSatin, featured: "large" },
  { kind: "restaurant", name: "Lío Mykonos", place: "Mykonos Town", note: "Dinner with a cabaret show", photo: lio, featured: "small" },
  { kind: "restaurant", name: "Kastro's", place: "Little Venice", note: "Sunset tables by the water", photo: kastros, featured: "small" },
  { kind: "restaurant", name: "Noema", place: "Mykonos Town", note: "Open-air Greek dining", photo: noema, featured: "small" },
  { kind: "restaurant", name: "Katrin", place: "Mykonos Town", note: "Long-established town restaurant", photo: katrin, featured: "small" },
  { kind: "restaurant", name: "Kalita", place: "Mykonos Town", note: "Garden dining", photo: kalita, featured: "small" },

  // Sunset bars, in the order we are asked for them most.
  { kind: "sunset", name: "180° Sunset Bar", place: "Above Mykonos Town", note: "Open-air cocktail bar with the island's most famous panoramic sunset", photo: sunset180, featured: "large" },
  { kind: "sunset", name: "Numi", place: "Above Mykonos Town", note: "Panoramic sunset bar with Japanese fusion dining", photo: numi, featured: "large" },
  { kind: "sunset", name: "Negrita", place: "Little Venice", note: "Iconic waterfront cocktail bar under the windmills", photo: negrita, featured: "small" },
  { kind: "sunset", name: "Cerise", place: "Little Venice", note: "Seafront cocktails below the windmills at sunset", photo: cerise },
  { kind: "sunset", name: "Scarpa", place: "Little Venice", note: "Waterfront cocktail bar facing the windmills, sunset to late", photo: scarpa, featured: "small" },
];

// Photos on the Nightlife & VIP Tables page: a row of three upright ones, then a
// row of two square ones. Keep three in the first list and two in the second.
export const nightlifeTiles: VenuePhoto[] = [
  { name: "Cavo Paradiso", place: "Paradise Beach", photo: cavoParadiso },
  { name: "Astra", place: "Mykonos Town", photo: astra },
  { name: "Open-air nights", place: "Through the season", photo: nightPalms },
];
export const nightlifeSquareTiles: VenuePhoto[] = [
  { name: "Alemagou", place: "Ftelia Beach", photo: alemagouNight },
  { name: "Moni", place: "Mykonos Town", photo: moni },
];

// The "most requested tables" list. One name per entry.
export const nightlifeVenues: string[] = [
  "Cavo Paradiso",
  "Astra",
  "Alemagou",
  "Interni Party",
  "Scorpios",
  "Moni",
];

export interface Question {
  question: string;
  answer: string;
}

export const beachClubQuestions: Question[] = [
  {
    question: "Which beach clubs in Mykonos are gay and LGBTQ+ friendly?",
    answer:
      "Jackie O' Beach on Super Paradise is the island's best known gay and LGBTQ+ friendly beach club, with a daytime show. Elia Beach is the island's best known gay beach, with sunbeds and a beach restaurant. Tell us your date and group and we request sunbeds or a table and arrange the drive there and back.",
  },
  {
    question: "Is there a gay beach or a nudist beach in Mykonos?",
    answer:
      "Yes. Elia Beach is both. A rainbow flag towards the western end of the beach marks the gay section, and the nudist area begins just beyond it. The main stretch has sunbeds and a beach restaurant and is used by everyone. We request sunbeds for you and drive you there and back.",
  },
  {
    question: "Can you get me sunbeds at Nammos, Scorpios or Principote?",
    answer:
      "We request it for you. Send us the date, your group size and whether you want sunbeds, a cabana, a lunch table or all three. We contact the beach club and tell you what they confirm, at what time and on what conditions.",
  },
  {
    question: "Can you reserve sunbeds as well as a table?",
    answer:
      "Yes. Tell us whether you want sunbeds, a cabana or a lunch table, and for how many guests. We request it with the beach club and confirm what they offer for your date.",
  },
  {
    question: "How far ahead should I book a beach club in Mykonos?",
    answer:
      "As early as you can. In July and August the most requested beach clubs fill days or weeks ahead, so send us your dates as soon as your trip is fixed. For last-minute plans we tell you honestly what is still open.",
  },
  {
    question: "Can you arrange the transfer to the beach too?",
    answer:
      "Yes. Private transfers are what we do every day. Your driver takes you from your villa or hotel to the beach club and back, and for some beaches we can arrange a boat taxi.",
  },
  {
    question: "Are my sunbeds guaranteed?",
    answer:
      "A reservation is final once the beach club confirms it. We tell you clearly what is confirmed, the time and any minimum spend or conditions the venue sets, before you make plans around it.",
  },
];

export const restaurantQuestions: Question[] = [
  {
    question: "How do I book a table at Interni, Noema or Lío Mykonos?",
    answer:
      "Send us the restaurant, the date and the hour you prefer. We ask the restaurant, confirm the table with you and can have a driver take you there and back.",
  },
  {
    question: "Can you book a sunset table in Little Venice?",
    answer:
      "Yes. Sunset tables at Kastro's and the other Little Venice restaurants are among the most requested on the island. Tell us the date and we ask for the hour the light is best, then confirm what the restaurant offers.",
  },
  {
    question: "How far ahead should I book a restaurant in Mykonos?",
    answer:
      "As early as you can. In July and August the most requested restaurants fill days or weeks ahead, so send us your dates as soon as your trip is fixed. For last-minute plans we tell you honestly what is still open.",
  },
  {
    question: "Can you arrange the transfer too?",
    answer:
      "Yes. Private transfers are what we do every day. Your driver takes you from your villa or hotel to the restaurant and back, so nobody has to drive or wait for a taxi.",
  },
  {
    question: "Is my table guaranteed?",
    answer:
      "A reservation is final once the venue confirms it. We tell you clearly what is confirmed, the time and any conditions the venue sets, before you make plans around it.",
  },
];

export const sunsetBarQuestions: Question[] = [
  {
    question: "Can you book a sunset table at 180°, Negrita or a Little Venice bar?",
    answer:
      "Yes. Sunset tables at the famous Mykonos bars go quickly and most set a minimum spend. Send us the date and your group size and we request a table for the golden hour, then confirm what the bar offers before you commit.",
  },
  {
    question: "What time is sunset in Mykonos and when should we arrive?",
    answer:
      "Through the summer the sun sets roughly between 8 and 8.30 in the evening. We suggest arriving around an hour before so you are settled with a drink as the light turns, and we time your driver to match.",
  },
  {
    question: "Which are the best sunset bars in Mykonos?",
    answer:
      "180° Sunset Bar for the panoramic view above town, and Negrita, Numi and Cerise for the Little Venice and town scene. Tell us the mood you want and we recommend and request the table.",
  },
  {
    question: "Can you arrange the transfer to and from the sunset bar?",
    answer:
      "Yes. Private transfers are what we do every day. Your driver takes you from your villa or hotel in time for sunset and is ready whenever you want to move on to dinner or home.",
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

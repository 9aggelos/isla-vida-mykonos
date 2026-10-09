import hubImage from "../assets/about-hero.webp";
import uaeImage from "../assets/villas-hero.webp";
import usaMexicoImage from "../assets/venues/nightlife-lounge.webp";
import israelImage from "../assets/venues/sunset-bars-hero.webp";

/*
 * Everything the Holidays pages say lives in this file.
 * To change a service, edit its `name` (the bold line) or `line` (the plain line next to it).
 * To add one, copy a line inside the list and change the words.
 */

export const SITE_URL = "https://www.islavidajmk.com";
export const WHATSAPP_NUMBER = "306948041931";

/** The opening lines, the same on every Holidays page. */
export const INTRO_HEADLINE = "Plan your Mykonos holidays with Isla Vida.";
export const INTRO_TEXT =
  "From the moment you call, the art of the island is yours, perfected, discreet, seamless, and handled with the quiet confidence of those who know Mykonos best.";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export interface HolidayService {
  name: string;
  line: string;
  /** Optional page this service links to. */
  to?: string;
  hash?: string;
}

export interface HolidayGroup {
  heading: string;
  services: HolidayService[];
}

export interface HolidayImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Complete class name, so the stylesheet picks it up. */
  position: string;
}

export interface HolidayMarket {
  path: string;
  /** Short name used in the menu and in links between the pages. */
  label: string;
  /** One line under the name where the pages link to each other. */
  summary: string;
  /** The page's main heading, shown small above the opening lines. */
  heading: string;
  /** What Google shows as the page title and description. */
  title: string;
  description: string;
  image: HolidayImage;
  groups: HolidayGroup[];
  /** The closing line above the WhatsApp button. */
  closing: string;
  /** The message that opens in WhatsApp, ready to send. */
  whatsappMessage: string;
}

export const holidaysHub = {
  path: "/holidays",
  label: "Mykonos Holidays",
  title: "Mykonos Holidays | Villas, Yachts & Concierge | Isla Vida",
  description:
    "Plan your Mykonos holidays with a local team: private villas, yachts, a chauffeur, beach club and restaurant tables and a 24/7 concierge, arranged in one message.",
  image: {
    src: hubImage,
    alt: "Mykonos Town and its harbour lit up at dusk",
    width: 1920,
    height: 1080,
    position: "object-center",
  } as HolidayImage,
  services: [
    {
      name: "Private transfers and chauffeur",
      line: "Airport and port transfers, and a car and driver at your disposal.",
      to: "/services",
    },
    {
      name: "Villas",
      line: "Private villas across the island, reserved and booked for you.",
      to: "/villas",
    },
    {
      name: "Yachts and helicopters",
      line: "Yacht and catamaran days, and helicopter transfers.",
      to: "/services",
      hash: "yacht-catamaran-chartering",
    },
    {
      name: "Beach clubs",
      line: "Sunbeds, cabanas and lunch tables, reserved ahead.",
      to: "/concierge/beach-club-reservations",
    },
    {
      name: "Restaurants",
      line: "Tables at the restaurants everyone asks for.",
      to: "/concierge/restaurant-reservations",
    },
    {
      name: "Sunset bars and nightlife",
      line: "Golden hour tables, VIP tables and a driver for the night.",
      to: "/concierge/nightlife-vip-tables",
    },
    {
      name: "Concierge, 24/7",
      line: "Private chef, security, events, personal shopping and anything else you need.",
      to: "/concierge",
    },
  ] as HolidayService[],
  closing: "Tell us your dates and what you have in mind. We reply on WhatsApp with a plan.",
  whatsappMessage: "Hello Isla Vida, I would like to plan my Mykonos holidays.",
};

export const uaeDubai: HolidayMarket = {
  path: "/holidays/uae-dubai",
  label: "UAE & Dubai",
  summary: "Private, discreet and arranged by one trusted contact.",
  heading: "Mykonos holidays for guests from the UAE and Dubai",
  title: "Mykonos Holidays from Dubai & the UAE | Isla Vida",
  description:
    "Luxury Mykonos holidays for guests from Dubai and the UAE: private villas, a chauffeur, yachts, halal dining, shisha and a discreet 24/7 concierge on WhatsApp.",
  image: {
    src: uaeImage,
    alt: "Private villa in Mykonos with a pool terrace above the sea",
    width: 1920,
    height: 1080,
    position: "object-center",
  },
  groups: [
    {
      heading: "Arranged around you",
      services: [
        {
          name: "Guidance with official matters",
          line: "A signature touch from Isla Vida: guidance and assistance with official matters during your stay in Greece, from paperwork to finding the right office or the UAE Embassy in Athens.",
        },
        {
          name: "Private villas and discreet hotels",
          line: "Villas with full privacy and private, discreet hotels. We reserve and book them for you.",
        },
        {
          name: "Chauffeur at your disposal",
          line: "A car and driver for your whole stay, with larger vehicles or several cars for bigger parties.",
        },
        {
          name: "Complete privacy",
          line: "Discreet vehicles, private entrances and security on request.",
        },
        {
          name: "Halal dining",
          line: "A private chef in your villa, or the best restaurants to go out to.",
        },
        {
          name: "Female staff on request",
          line: "Female villa staff and spa therapist, and private pool and spa time for the ladies.",
        },
        {
          name: "Arabic hospitality",
          line: "Arabic coffee, tea and dates in your villa, prayer rugs on request, and an Arabic-speaking driver or guide.",
        },
        {
          name: "Shisha",
          line: "At your villa, on the yacht or at a sunset spot in Mykonos Town.",
        },
        {
          name: "Personal shopping",
          line: "The finest boutiques, luxury fashion and jewellery, with a personal shopping assistant and a chauffeur at your disposal.",
        },
        {
          name: "During Ramadan",
          line: "Dining and drivers timed around your day.",
        },
      ],
    },
    {
      heading: "On the island and beyond",
      services: [
        {
          name: "Airport meet and greet",
          line: "Your driver is waiting at Mykonos Airport when you land.",
        },
        {
          name: "Yachts and helicopters",
          line: "Yacht days and helicopter transfers.",
        },
        {
          name: "Concierge on WhatsApp, 24/7",
          line: "In Mykonos, around Greece and the Greek islands, and globally.",
        },
        {
          name: "One team wherever the summer takes you",
          line: "Through the Isla Vida network: Saint-Tropez, Cannes and the Côte d'Azur, Ibiza and beyond.",
        },
        {
          name: "Private jets and yachts between destinations",
          line: "Arranged with a single point of contact throughout.",
        },
      ],
    },
  ],
  closing: "Tell us your dates and what you have in mind. We reply on WhatsApp with a plan.",
  whatsappMessage:
    "Hello Isla Vida, I am travelling from the UAE and would like to plan my Mykonos holidays.",
};

export const usaMexico: HolidayMarket = {
  path: "/holidays/usa-mexico",
  label: "USA & Mexico",
  summary: "See it all, with the days and the nights organised.",
  heading: "Mykonos holidays for guests from the United States and Mexico",
  title: "Mykonos Holidays from the USA & Mexico | Isla Vida",
  description:
    "Mykonos holidays for guests from the United States and Mexico: villas, a chauffeur at your disposal, beach club and nightclub tables, party planning and 24/7 service.",
  image: {
    src: usaMexicoImage,
    alt: "Open-air lounge at night in Mykonos, with candlelit tables beside a lit pool",
    width: 1500,
    height: 1884,
    position: "object-[50%_45%]",
  },
  groups: [
    {
      heading: "For guests from the United States",
      services: [
        {
          name: "Guest service, 24/7",
          line: "One team on WhatsApp day and night, including last-minute requests.",
        },
        {
          name: "Chauffeur at your disposal",
          line: "Move between beach clubs, dinner and nightlife all day and night, with the ride home after midnight already planned.",
        },
        {
          name: "Beach club and nightclub tables",
          line: "Reserved ahead, so you arrive and sit down.",
        },
        {
          name: "Party and event planning",
          line: "Private DJs, villa parties and celebrations.",
        },
        {
          name: "Villa or yacht, stocked for you",
          line: "Groceries and alcohol delivered, and the fridge filled before you arrive.",
        },
        {
          name: "Villas, yachts and helicopters",
          line: "Private villas, yacht days and helicopter transfers.",
        },
        {
          name: "Extras on call",
          line: "Massage, hairdresser, nanny, photographer, flowers and cakes.",
        },
        {
          name: "Clear quotes",
          line: "You know the price before you book. No surprises.",
        },
      ],
    },
    {
      heading: "For guests from Mexico",
      services: [
        {
          name: "Spanish-speaking driver or concierge",
          line: "On request, for your whole stay.",
        },
        {
          name: "Groups made easy",
          line: "Several vehicles moving together, and tables and villas sized for everyone.",
        },
        {
          name: "Celebrations",
          line: "Birthdays, bachelor and bachelorette trips, with the set-up, flowers, cake and music arranged.",
        },
        {
          name: "Villa parties",
          line: "A private DJ, chef and bar at your villa.",
        },
        {
          name: "Lively days and a quiet one",
          line: "The beach clubs and nights everyone asks for, and a calmer day when you want it.",
        },
        {
          name: "Everything on WhatsApp",
          line: "One chat for the whole group, 24/7.",
        },
      ],
    },
  ],
  closing:
    "Tell us your dates and what you have in mind. We reply on WhatsApp with a plan and a clear quote.",
  whatsappMessage:
    "Hello Isla Vida, I am travelling from the Americas and would like to plan my Mykonos holidays.",
};

export const israel: HolidayMarket = {
  path: "/holidays/israel",
  label: "Israel",
  summary: "A warm, trusted local team, summer after summer.",
  heading: "Mykonos holidays for guests from Israel",
  title: "Mykonos Holidays from Israel | Isla Vida",
  description:
    "Mykonos holidays for guests from Israel: kosher dining arranged, a private driver and V-Class van, villas, yachts and a Hebrew-friendly local team on WhatsApp.",
  image: {
    src: israelImage,
    alt: "Sunset over Mykonos Town and the sea, seen from the hillside",
    width: 1280,
    height: 720,
    position: "object-center",
  },
  groups: [
    {
      heading: "Arranged around you",
      services: [
        {
          name: "Kosher dining",
          line: "Arranged in your villa, on the yacht or out, with Glatt kosher catering booked ahead of your dates.",
        },
        {
          name: "Shabbat",
          line: "Transfers and meals arranged ahead, with a driver who understands the timing. In season we help you arrange Shabbat services and meals with Chabad of Mykonos.",
        },
        {
          name: "Private driver and V-Class van",
          line: "For your family or group, with several vehicles for larger parties.",
        },
        {
          name: "Hebrew-friendly contact",
          line: "On WhatsApp, with a Hebrew-speaking driver or guide on request.",
        },
        {
          name: "Seasonal rates and tailored packages",
          line: "Ask us for rates and packages for your dates and group.",
        },
      ],
    },
    {
      heading: "On the island",
      services: [
        {
          name: "Villas for families and friends",
          line: "Private villas sized for your group, reserved and booked for you.",
        },
        {
          name: "Beach club and restaurant tables",
          line: "Reserved ahead for the whole group.",
        },
        {
          name: "Yacht days, sunset bars and nightlife",
          line: "With every transfer handled from door to door.",
        },
        {
          name: "Jewish heritage tour of Delos",
          line: "A private visit to the island that holds one of the oldest synagogues in the world.",
        },
        {
          name: "Quiet days too",
          line: "Calm beaches and restful villa time alongside the nightlife.",
        },
        {
          name: "Airport meet and greet",
          line: "Your driver is waiting at Mykonos Airport when you land.",
        },
      ],
    },
  ],
  closing:
    "Tell us your dates and what you have in mind. We reply on WhatsApp with a plan and a clear quote.",
  whatsappMessage:
    "Hello Isla Vida, I am travelling from Israel and would like to plan my Mykonos holidays.",
};

export const holidayMarkets: HolidayMarket[] = [uaeDubai, usaMexico, israel];

/** The title, description and link tags for one Holidays page. */
export function holidayHead(page: {
  path: string;
  title: string;
  description: string;
  image: HolidayImage;
}) {
  const url = `${SITE_URL}${page.path}`;
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "preload", as: "image", href: page.image.src, type: "image/webp" },
    ],
  };
}

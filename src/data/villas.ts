// ---------------------------------------------------------------------------
// VILLA PORTFOLIO
// ---------------------------------------------------------------------------
// This is the only file you edit to add, change or remove a villa.
// Each villa below becomes a card on /villas and its own page at /villas/<slug>.
//
// To add a villa:
//   1. Put its photos in src/assets/villas/ (webp or jpg, about 1600px wide).
//   2. Import each photo at the top of this file, like the example below.
//   3. Copy one villa block, paste it at the end of the list and fill it in.
//
// The three villas below are SAMPLES (sample: true). They appear only in the
// Lovable preview, never on the live site, so nothing fake is published.
// Until the first real villa is added, the live page invites guests to send a
// general villa request.
// ---------------------------------------------------------------------------

import samplePhoto from "../assets/villa-pool-terrace.webp";

// Villa Ilios. Each photo has a full copy (1600px) and a small copy (800px) for phones.
import iliosCoverPoolSunset from "../assets/villas/ilios/cover-pool-sunset.webp";
import iliosCoverPoolSunsetSmall from "../assets/villas/ilios/cover-pool-sunset-800.webp";
import iliosPoolTerrace from "../assets/villas/ilios/pool-terrace.webp";
import iliosPoolTerraceSmall from "../assets/villas/ilios/pool-terrace-800.webp";
import iliosSunbedsDeck from "../assets/villas/ilios/sunbeds-deck.webp";
import iliosSunbedsDeckSmall from "../assets/villas/ilios/sunbeds-deck-800.webp";
import iliosPoolSeaSunset from "../assets/villas/ilios/pool-sea-sunset.webp";
import iliosPoolSeaSunsetSmall from "../assets/villas/ilios/pool-sea-sunset-800.webp";
import iliosOutdoorDiningSea from "../assets/villas/ilios/outdoor-dining-sea.webp";
import iliosOutdoorDiningSeaSmall from "../assets/villas/ilios/outdoor-dining-sea-800.webp";
import iliosOutdoorKitchen from "../assets/villas/ilios/outdoor-kitchen.webp";
import iliosOutdoorKitchenSmall from "../assets/villas/ilios/outdoor-kitchen-800.webp";
import iliosLivingRoom from "../assets/villas/ilios/living-room.webp";
import iliosLivingRoomSmall from "../assets/villas/ilios/living-room-800.webp";
import iliosDiningRoom from "../assets/villas/ilios/dining-room.webp";
import iliosDiningRoomSmall from "../assets/villas/ilios/dining-room-800.webp";
import iliosBedroomOne from "../assets/villas/ilios/bedroom-one.webp";
import iliosBedroomOneSmall from "../assets/villas/ilios/bedroom-one-800.webp";
import iliosBedroomTwo from "../assets/villas/ilios/bedroom-two.webp";
import iliosBedroomTwoSmall from "../assets/villas/ilios/bedroom-two-800.webp";
import iliosBathroom from "../assets/villas/ilios/bathroom.webp";
import iliosBathroomSmall from "../assets/villas/ilios/bathroom-800.webp";
import iliosPoolFromAbove from "../assets/villas/ilios/pool-from-above.webp";
import iliosPoolFromAboveSmall from "../assets/villas/ilios/pool-from-above-600.webp";

export interface Villa {
  /** Used in the page address: /villas/<slug>. Lowercase letters, numbers and dashes only. */
  slug: string;
  name: string;
  /** Area of the island only. Never the exact address. */
  area: string;
  bedrooms: number;
  bathrooms: number;
  /** Extra guest WCs, shown as "4 bathrooms + 2 WCs". Leave out if none. */
  wcs?: number;
  /** Maximum number of guests. */
  guests: number;
  /** Nightly price in euros. Leave out to show "Price on request". */
  priceFrom?: number;
  /** One or two sentences, shown on the card and in Google results. */
  summary: string;
  /** Longer text for the villa page. One string per paragraph. */
  description: string[];
  amenities: string[];
  /** The first photo is the cover. */
  photos: string[];
  /** Optional round photo shown beside the summary, like the brochure. */
  featurePhoto?: string;
  /** Optional photo chapters for the villa page. Without them, all photos after the cover form one gallery. */
  gallery?: { title: string; photos: string[] }[];
  /** Sample entries are hidden on the live site. Leave this out for real villas. */
  sample?: boolean;
}

// Small copies of villa photos, so phones download a phone-sized file.
const smallCopies = new Map<string, { src: string; width: number }>();
const fullWidths = new Map<string, number>();
function withSmall(full: string, small: string, fullWidth = 1600, smallWidth = 800): string {
  smallCopies.set(full, { src: small, width: smallWidth });
  fullWidths.set(full, fullWidth);
  return full;
}

/** The list of sizes for a villa photo, or nothing if it has no small copy. */
export function villaSrcSet(src: string): string | undefined {
  const small = smallCopies.get(src);
  return small ? `${small.src} ${small.width}w, ${src} ${fullWidths.get(src) ?? 1600}w` : undefined;
}

const ilios = {
  coverPoolSunset: withSmall(iliosCoverPoolSunset, iliosCoverPoolSunsetSmall),
  poolTerrace: withSmall(iliosPoolTerrace, iliosPoolTerraceSmall),
  sunbedsDeck: withSmall(iliosSunbedsDeck, iliosSunbedsDeckSmall),
  poolSeaSunset: withSmall(iliosPoolSeaSunset, iliosPoolSeaSunsetSmall),
  outdoorDiningSea: withSmall(iliosOutdoorDiningSea, iliosOutdoorDiningSeaSmall),
  outdoorKitchen: withSmall(iliosOutdoorKitchen, iliosOutdoorKitchenSmall),
  livingRoom: withSmall(iliosLivingRoom, iliosLivingRoomSmall),
  diningRoom: withSmall(iliosDiningRoom, iliosDiningRoomSmall),
  bedroomOne: withSmall(iliosBedroomOne, iliosBedroomOneSmall),
  bedroomTwo: withSmall(iliosBedroomTwo, iliosBedroomTwoSmall),
  bathroom: withSmall(iliosBathroom, iliosBathroomSmall),
  poolFromAbove: withSmall(iliosPoolFromAbove, iliosPoolFromAboveSmall, 1000, 600),
};

const allVillas: Villa[] = [
  {
    slug: "villa-ilios",
    name: "Villa Ilios",
    area: "Kanalia",
    bedrooms: 4,
    bathrooms: 4,
    wcs: 2,
    guests: 8,
    summary:
      "A four-bedroom villa in Kanalia with a private pool, sunset sea views and an outdoor kitchen with BBQ and wood-fired oven. Sleeps 8.",
    description: [
      "Set on the rocky shore of Kanalia, a short drive from Mykonos Town, Villa Ilios looks straight out over the Aegean, and every evening ends with the sun setting into the sea in front of the pool.",
      "Outside, the pool runs beside wide terraces with sunbeds and a hammock, and a shaded stone-and-timber outdoor kitchen with a BBQ and wood-fired oven seats the whole group at one long table. Inside, a bright open-plan living and dining room opens onto the view, with four calm bedrooms for up to eight guests.",
    ],
    amenities: [
      "Sunset and sea view",
      "Private swimming pool",
      "Sunbeds and hammock",
      "Outdoor dining table",
      "BBQ and wood-fired oven",
      "Bluetooth audio system",
      "Air conditioning",
      "Equipped kitchen",
      "Living and dining room",
      "Smart TV",
      "Washing machine",
      "Dishwasher",
      "Parking",
      "Free Wi-Fi",
    ],
    photos: [
      ilios.coverPoolSunset,
      ilios.poolTerrace,
      ilios.sunbedsDeck,
      ilios.poolSeaSunset,
      ilios.outdoorDiningSea,
      ilios.outdoorKitchen,
      ilios.livingRoom,
      ilios.diningRoom,
      ilios.bedroomOne,
      ilios.bedroomTwo,
      ilios.bathroom,
    ],
    featurePhoto: ilios.poolFromAbove,
    gallery: [
      { title: "Pool and sunset", photos: [ilios.poolSeaSunset, ilios.poolTerrace, ilios.sunbedsDeck] },
      { title: "Outdoor living", photos: [ilios.outdoorDiningSea, ilios.outdoorKitchen] },
      { title: "Living and dining", photos: [ilios.livingRoom, ilios.diningRoom] },
      { title: "Bedrooms and bathroom", photos: [ilios.bedroomOne, ilios.bedroomTwo, ilios.bathroom] },
    ],
  },
  {
    slug: "sample-villa-one",
    name: "Sample Villa One",
    area: "Agios Lazaros",
    bedrooms: 5,
    bathrooms: 5,
    guests: 10,
    priceFrom: 2500,
    summary:
      "Sample listing. A five-bedroom villa with an infinity pool and open sea views, minutes from Psarou beach.",
    description: [
      "Sample text. Describe the villa here: the setting, the view, the style of the house and who it suits best.",
      "Use a second paragraph for the outdoor areas, the distance to Mykonos Town and the nearest beaches.",
    ],
    amenities: [
      "Infinity pool",
      "Sea view",
      "Daily housekeeping",
      "Air conditioning",
      "Outdoor dining area",
      "Private parking",
    ],
    photos: [samplePhoto, samplePhoto, samplePhoto],
    sample: true,
  },
  {
    slug: "sample-villa-two",
    name: "Sample Villa Two",
    area: "Kalafatis",
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    summary:
      "Sample listing. A four-bedroom villa on the quiet south-east coast, a short walk from the beach.",
    description: [
      "Sample text. Describe the villa here: the setting, the view, the style of the house and who it suits best.",
    ],
    amenities: ["Private pool", "Sea view", "BBQ", "Air conditioning", "Wi-Fi"],
    photos: [samplePhoto, samplePhoto],
    sample: true,
  },
  {
    slug: "sample-villa-three",
    name: "Sample Villa Three",
    area: "Tourlos",
    bedrooms: 7,
    bathrooms: 8,
    guests: 14,
    priceFrom: 5000,
    summary:
      "Sample listing. A seven-bedroom estate above the New Port with sunset views over Mykonos Town.",
    description: [
      "Sample text. Describe the villa here: the setting, the view, the style of the house and who it suits best.",
    ],
    amenities: [
      "Heated pool",
      "Sunset view",
      "Gym",
      "Private chef on request",
      "Daily housekeeping",
      "Jacuzzi",
    ],
    photos: [samplePhoto, samplePhoto, samplePhoto],
    sample: true,
  },
];

/** The villas shown on the site. Samples are included only in the preview. */
export const villas: Villa[] = allVillas.filter(
  (villa) => !villa.sample || import.meta.env.DEV,
);

export function getVilla(slug: string): Villa | undefined {
  return villas.find((villa) => villa.slug === slug);
}

export function formatVillaPrice(villa: Villa): string {
  return villa.priceFrom
    ? `From €${villa.priceFrom.toLocaleString("en-US")} / night`
    : "Price on request";
}

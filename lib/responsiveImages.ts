/*
 * Smaller copies of the banner photos, so a phone downloads a phone-sized file.
 * The browser picks the right one by itself; large screens still get the full photo.
 * The small copies live in src/assets/small. If you replace a banner photo, delete its
 * line here (the page then simply uses the full photo) or ask for new small copies.
 */
import heroVan from "../assets/hero-van.webp";
import heroVan828 from "../assets/small/hero-van-828.webp";
import heroVan1280 from "../assets/small/hero-van-1280.webp";
import fleetSedanHotel from "../assets/fleet-sedan-hotel.webp";
import fleetSedanHotel828 from "../assets/small/fleet-sedan-hotel-828.webp";
import fleetSedanHotel1280 from "../assets/small/fleet-sedan-hotel-1280.webp";
import villasHero from "../assets/villas-hero.webp";
import villasHero828 from "../assets/small/villas-hero-828.webp";
import villasHero1280 from "../assets/small/villas-hero-1280.webp";
import servicesHero from "../assets/services-hero.webp";
import servicesHero828 from "../assets/small/services-hero-828.webp";
import servicesHero1280 from "../assets/small/services-hero-1280.webp";
import aboutHero from "../assets/about-hero.webp";
import aboutHero828 from "../assets/small/about-hero-828.webp";
import aboutHero1280 from "../assets/small/about-hero-1280.webp";
import venuesRestaurantsHero from "../assets/venues/restaurants-hero.webp";
import venuesRestaurantsHero828 from "../assets/small/restaurants-hero-828.webp";
import venuesRestaurantsHero1280 from "../assets/small/restaurants-hero-1280.webp";
import venuesBeachClubsHero from "../assets/venues/beach-clubs-hero.webp";
import venuesBeachClubsHero828 from "../assets/small/beach-clubs-hero-828.webp";
import venuesBeachClubsHero1280 from "../assets/small/beach-clubs-hero-1280.webp";
import venuesSunsetBarsHero from "../assets/venues/sunset-bars-hero.webp";
import venuesSunsetBarsHero828 from "../assets/small/sunset-bars-hero-828.webp";
import mykonosTerraceView from "../assets/mykonos-terrace-view.webp";
import mykonosTerraceView828 from "../assets/small/mykonos-terrace-view-828.webp";
import mykonosTerraceView1280 from "../assets/small/mykonos-terrace-view-1280.webp";
import venuesNightlifeLounge from "../assets/venues/nightlife-lounge.webp";
import venuesNightlifeLounge828 from "../assets/small/nightlife-lounge-828.webp";
import cruiseShipMykonosSunset from "../assets/cruise-ship-mykonos-sunset.webp";
import cruiseShipMykonosSunset828 from "../assets/small/cruise-ship-mykonos-sunset-828.webp";
import cruiseShipMykonosSunset1280 from "../assets/small/cruise-ship-mykonos-sunset-1280.webp";

const sets: Record<string, string> = {
  [heroVan]: `${heroVan828} 828w, ${heroVan1280} 1280w, ${heroVan} 1920w`,
  [fleetSedanHotel]: `${fleetSedanHotel828} 828w, ${fleetSedanHotel1280} 1280w, ${fleetSedanHotel} 1725w`,
  [villasHero]: `${villasHero828} 828w, ${villasHero1280} 1280w, ${villasHero} 1920w`,
  [servicesHero]: `${servicesHero828} 828w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`,
  [aboutHero]: `${aboutHero828} 828w, ${aboutHero1280} 1280w, ${aboutHero} 1920w`,
  [venuesRestaurantsHero]: `${venuesRestaurantsHero828} 828w, ${venuesRestaurantsHero1280} 1280w, ${venuesRestaurantsHero} 1920w`,
  [venuesBeachClubsHero]: `${venuesBeachClubsHero828} 828w, ${venuesBeachClubsHero1280} 1280w, ${venuesBeachClubsHero} 1900w`,
  [venuesSunsetBarsHero]: `${venuesSunsetBarsHero828} 828w, ${venuesSunsetBarsHero} 1280w`,
  [mykonosTerraceView]: `${mykonosTerraceView828} 828w, ${mykonosTerraceView1280} 1280w, ${mykonosTerraceView} 1920w`,
  [venuesNightlifeLounge]: `${venuesNightlifeLounge828} 828w, ${venuesNightlifeLounge} 1500w`,
  [cruiseShipMykonosSunset]: `${cruiseShipMykonosSunset828} 828w, ${cruiseShipMykonosSunset1280} 1280w, ${cruiseShipMykonosSunset} 1920w`,
};

/** The list of sizes for a banner photo, or nothing if it has no smaller copies. */
export const srcSetFor = (src: string): string | undefined => sets[src];

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

// Villa Thalassa (Houlakia).
import thalassaBedroomOne from "../assets/villas/thalassa/bedroom-one.webp";
import thalassaBedroomOneSmall from "../assets/villas/thalassa/bedroom-one-800.webp";
import thalassaBedroomTwo from "../assets/villas/thalassa/bedroom-two.webp";
import thalassaBedroomTwoSmall from "../assets/villas/thalassa/bedroom-two-800.webp";
import thalassaClubNight from "../assets/villas/thalassa/club-night.webp";
import thalassaClubNightSmall from "../assets/villas/thalassa/club-night-800.webp";
import thalassaCoverPoolSunset from "../assets/villas/thalassa/cover-pool-sunset.webp";
import thalassaCoverPoolSunsetSmall from "../assets/villas/thalassa/cover-pool-sunset-800.webp";
import thalassaDiningNight from "../assets/villas/thalassa/dining-night.webp";
import thalassaDiningNightSmall from "../assets/villas/thalassa/dining-night-800.webp";
import thalassaGym from "../assets/villas/thalassa/gym.webp";
import thalassaGymSmall from "../assets/villas/thalassa/gym-800.webp";
import thalassaLoungeSea from "../assets/villas/thalassa/lounge-sea.webp";
import thalassaLoungeSeaSmall from "../assets/villas/thalassa/lounge-sea-800.webp";
import thalassaNightPools from "../assets/villas/thalassa/night-pools.webp";
import thalassaNightPoolsSmall from "../assets/villas/thalassa/night-pools-800.webp";
import thalassaPoolBar from "../assets/villas/thalassa/pool-bar.webp";
import thalassaPoolBarSmall from "../assets/villas/thalassa/pool-bar-800.webp";
import thalassaPoolEdgeSea from "../assets/villas/thalassa/pool-edge-sea.webp";
import thalassaPoolEdgeSeaSmall from "../assets/villas/thalassa/pool-edge-sea-800.webp";
import thalassaPoolFromAbove from "../assets/villas/thalassa/pool-from-above.webp";
import thalassaPoolFromAboveSmall from "../assets/villas/thalassa/pool-from-above-600.webp";
import thalassaPoolTerrace from "../assets/villas/thalassa/pool-terrace.webp";
import thalassaPoolTerraceSmall from "../assets/villas/thalassa/pool-terrace-800.webp";
import thalassaPoolsSeaView from "../assets/villas/thalassa/pools-sea-view.webp";
import thalassaPoolsSeaViewSmall from "../assets/villas/thalassa/pools-sea-view-800.webp";

// Villa Orizon (Kastro).
import orizonBedroomOne from "../assets/villas/orizon/bedroom-one.webp";
import orizonBedroomOneSmall from "../assets/villas/orizon/bedroom-one-800.webp";
import orizonBedroomTwo from "../assets/villas/orizon/bedroom-two.webp";
import orizonBedroomTwoSmall from "../assets/villas/orizon/bedroom-two-800.webp";
import orizonCoverInfinityPool from "../assets/villas/orizon/cover-infinity-pool.webp";
import orizonCoverInfinityPoolSmall from "../assets/villas/orizon/cover-infinity-pool-800.webp";
import orizonGym from "../assets/villas/orizon/gym.webp";
import orizonGymSmall from "../assets/villas/orizon/gym-800.webp";
import orizonHelipad from "../assets/villas/orizon/helipad.webp";
import orizonHelipadSmall from "../assets/villas/orizon/helipad-800.webp";
import orizonInfinityPool from "../assets/villas/orizon/infinity-pool.webp";
import orizonInfinityPoolSmall from "../assets/villas/orizon/infinity-pool-800.webp";
import orizonKitchen from "../assets/villas/orizon/kitchen.webp";
import orizonKitchenSmall from "../assets/villas/orizon/kitchen-800.webp";
import orizonLivingLounge from "../assets/villas/orizon/living-lounge.webp";
import orizonLivingLoungeSmall from "../assets/villas/orizon/living-lounge-800.webp";
import orizonPoolFromAbove from "../assets/villas/orizon/pool-from-above.webp";
import orizonPoolFromAboveSmall from "../assets/villas/orizon/pool-from-above-600.webp";
import orizonPoolLounge from "../assets/villas/orizon/pool-lounge.webp";
import orizonPoolLoungeSmall from "../assets/villas/orizon/pool-lounge-800.webp";
import orizonPoolSunset from "../assets/villas/orizon/pool-sunset.webp";
import orizonPoolSunsetSmall from "../assets/villas/orizon/pool-sunset-800.webp";
import orizonTennisCourt from "../assets/villas/orizon/tennis-court.webp";
import orizonTennisCourtSmall from "../assets/villas/orizon/tennis-court-800.webp";
import orizonTerracesNight from "../assets/villas/orizon/terraces-night.webp";
import orizonTerracesNightSmall from "../assets/villas/orizon/terraces-night-800.webp";

// Villa Ammos (Ftelia).
import ammosBathroom from "../assets/villas/ammos/bathroom.webp";
import ammosBathroomSmall from "../assets/villas/ammos/bathroom-800.webp";
import ammosBedroomOne from "../assets/villas/ammos/bedroom-one.webp";
import ammosBedroomOneSmall from "../assets/villas/ammos/bedroom-one-800.webp";
import ammosBedroomTwo from "../assets/villas/ammos/bedroom-two.webp";
import ammosBedroomTwoSmall from "../assets/villas/ammos/bedroom-two-800.webp";
import ammosCoverVillaPool from "../assets/villas/ammos/cover-villa-pool.webp";
import ammosCoverVillaPoolSmall from "../assets/villas/ammos/cover-villa-pool-800.webp";
import ammosKitchen from "../assets/villas/ammos/kitchen.webp";
import ammosKitchenSmall from "../assets/villas/ammos/kitchen-800.webp";
import ammosLivingRoom from "../assets/villas/ammos/living-room.webp";
import ammosLivingRoomSmall from "../assets/villas/ammos/living-room-800.webp";
import ammosOutdoorDining from "../assets/villas/ammos/outdoor-dining.webp";
import ammosOutdoorDiningSmall from "../assets/villas/ammos/outdoor-dining-800.webp";
import ammosPoolFromAbove from "../assets/villas/ammos/pool-from-above.webp";
import ammosPoolFromAboveSmall from "../assets/villas/ammos/pool-from-above-600.webp";
import ammosPoolPergolaBay from "../assets/villas/ammos/pool-pergola-bay.webp";
import ammosPoolPergolaBaySmall from "../assets/villas/ammos/pool-pergola-bay-800.webp";
import ammosPoolTerrace from "../assets/villas/ammos/pool-terrace.webp";
import ammosPoolTerraceSmall from "../assets/villas/ammos/pool-terrace-800.webp";
import ammosShadedTerrace from "../assets/villas/ammos/shaded-terrace.webp";
import ammosShadedTerraceSmall from "../assets/villas/ammos/shaded-terrace-800.webp";
import ammosTerraceSeaView from "../assets/villas/ammos/terrace-sea-view.webp";
import ammosTerraceSeaViewSmall from "../assets/villas/ammos/terrace-sea-view-800.webp";

// Villa Elia (Agia Anna).
import eliaBathroom from "../assets/villas/elia/bathroom.webp";
import eliaBathroomSmall from "../assets/villas/elia/bathroom-800.webp";
import eliaCoverPoolDusk from "../assets/villas/elia/cover-pool-dusk.webp";
import eliaCoverPoolDuskSmall from "../assets/villas/elia/cover-pool-dusk-800.webp";
import eliaDiningKitchen from "../assets/villas/elia/dining-kitchen.webp";
import eliaDiningKitchenSmall from "../assets/villas/elia/dining-kitchen-800.webp";
import eliaFireLoungeFromAbove from "../assets/villas/elia/fire-lounge-from-above.webp";
import eliaFireLoungeFromAboveSmall from "../assets/villas/elia/fire-lounge-from-above-600.webp";
import eliaGardenDining from "../assets/villas/elia/garden-dining.webp";
import eliaGardenDiningSmall from "../assets/villas/elia/garden-dining-800.webp";
import eliaInfinityPool from "../assets/villas/elia/infinity-pool.webp";
import eliaInfinityPoolSmall from "../assets/villas/elia/infinity-pool-800.webp";
import eliaLivingRoom from "../assets/villas/elia/living-room.webp";
import eliaLivingRoomSmall from "../assets/villas/elia/living-room-800.webp";
import eliaOutdoorDining from "../assets/villas/elia/outdoor-dining.webp";
import eliaOutdoorDiningSmall from "../assets/villas/elia/outdoor-dining-800.webp";
import eliaPoolNight from "../assets/villas/elia/pool-night.webp";
import eliaPoolNightSmall from "../assets/villas/elia/pool-night-800.webp";
import eliaPoolSunbeds from "../assets/villas/elia/pool-sunbeds.webp";
import eliaPoolSunbedsSmall from "../assets/villas/elia/pool-sunbeds-800.webp";
import eliaShadedLounge from "../assets/villas/elia/shaded-lounge.webp";
import eliaShadedLoungeSmall from "../assets/villas/elia/shaded-lounge-800.webp";
import eliaSuiteOne from "../assets/villas/elia/suite-one.webp";
import eliaSuiteOneSmall from "../assets/villas/elia/suite-one-800.webp";
import eliaSuiteSeaView from "../assets/villas/elia/suite-sea-view.webp";
import eliaSuiteSeaViewSmall from "../assets/villas/elia/suite-sea-view-800.webp";

// Villa Selini (Fanari).
import seliniBathroom from "../assets/villas/selini/bathroom.webp";
import seliniBathroomSmall from "../assets/villas/selini/bathroom-800.webp";
import seliniBedroomOne from "../assets/villas/selini/bedroom-one.webp";
import seliniBedroomOneSmall from "../assets/villas/selini/bedroom-one-800.webp";
import seliniBedroomTwo from "../assets/villas/selini/bedroom-two.webp";
import seliniBedroomTwoSmall from "../assets/villas/selini/bedroom-two-800.webp";
import seliniCoverPoolDusk from "../assets/villas/selini/cover-pool-dusk.webp";
import seliniCoverPoolDuskSmall from "../assets/villas/selini/cover-pool-dusk-800.webp";
import seliniDiningRoom from "../assets/villas/selini/dining-room.webp";
import seliniDiningRoomSmall from "../assets/villas/selini/dining-room-800.webp";
import seliniLivingRoom from "../assets/villas/selini/living-room.webp";
import seliniLivingRoomSmall from "../assets/villas/selini/living-room-800.webp";
import seliniOutdoorBar from "../assets/villas/selini/outdoor-bar.webp";
import seliniOutdoorBarSmall from "../assets/villas/selini/outdoor-bar-800.webp";
import seliniPoolCurve from "../assets/villas/selini/pool-curve.webp";
import seliniPoolCurveSmall from "../assets/villas/selini/pool-curve-600.webp";
import seliniPoolHammock from "../assets/villas/selini/pool-hammock.webp";
import seliniPoolHammockSmall from "../assets/villas/selini/pool-hammock-800.webp";
import seliniPoolSeaView from "../assets/villas/selini/pool-sea-view.webp";
import seliniPoolSeaViewSmall from "../assets/villas/selini/pool-sea-view-800.webp";
import seliniPoolTerraceDusk from "../assets/villas/selini/pool-terrace-dusk.webp";
import seliniPoolTerraceDuskSmall from "../assets/villas/selini/pool-terrace-dusk-800.webp";
import seliniStoneDiningTerrace from "../assets/villas/selini/stone-dining-terrace.webp";
import seliniStoneDiningTerraceSmall from "../assets/villas/selini/stone-dining-terrace-800.webp";
import seliniTerraceNight from "../assets/villas/selini/terrace-night.webp";
import seliniTerraceNightSmall from "../assets/villas/selini/terrace-night-800.webp";

// Villa Galini (Agios Lazaros, above Psarou).
import galiniBathroom from "../assets/villas/galini/bathroom.webp";
import galiniBathroomSmall from "../assets/villas/galini/bathroom-800.webp";
import galiniBedroomOne from "../assets/villas/galini/bedroom-one.webp";
import galiniBedroomOneSmall from "../assets/villas/galini/bedroom-one-800.webp";
import galiniBedroomSeaView from "../assets/villas/galini/bedroom-sea-view.webp";
import galiniBedroomSeaViewSmall from "../assets/villas/galini/bedroom-sea-view-800.webp";
import galiniCoverPoolSeaView from "../assets/villas/galini/cover-pool-sea-view.webp";
import galiniCoverPoolSeaViewSmall from "../assets/villas/galini/cover-pool-sea-view-800.webp";
import galiniDiningRoom from "../assets/villas/galini/dining-room.webp";
import galiniDiningRoomSmall from "../assets/villas/galini/dining-room-800.webp";
import galiniJacuzziNight from "../assets/villas/galini/jacuzzi-night.webp";
import galiniJacuzziNightSmall from "../assets/villas/galini/jacuzzi-night-600.webp";
import galiniKitchen from "../assets/villas/galini/kitchen.webp";
import galiniKitchenSmall from "../assets/villas/galini/kitchen-800.webp";
import galiniLivingRoom from "../assets/villas/galini/living-room.webp";
import galiniLivingRoomSmall from "../assets/villas/galini/living-room-800.webp";
import galiniOutdoorDiningNight from "../assets/villas/galini/outdoor-dining-night.webp";
import galiniOutdoorDiningNightSmall from "../assets/villas/galini/outdoor-dining-night-800.webp";
import galiniPergolaLounge from "../assets/villas/galini/pergola-lounge.webp";
import galiniPergolaLoungeSmall from "../assets/villas/galini/pergola-lounge-800.webp";
import galiniPoolNight from "../assets/villas/galini/pool-night.webp";
import galiniPoolNightSmall from "../assets/villas/galini/pool-night-800.webp";
import galiniPoolTerrace from "../assets/villas/galini/pool-terrace.webp";
import galiniPoolTerraceSmall from "../assets/villas/galini/pool-terrace-800.webp";

// Villa Kyma (Kalo Livadi).
import kymaBathroom from "../assets/villas/kyma/bathroom.webp";
import kymaBathroomSmall from "../assets/villas/kyma/bathroom-800.webp";
import kymaBayView from "../assets/villas/kyma/bay-view.webp";
import kymaBayViewSmall from "../assets/villas/kyma/bay-view-800.webp";
import kymaBedroomOne from "../assets/villas/kyma/bedroom-one.webp";
import kymaBedroomOneSmall from "../assets/villas/kyma/bedroom-one-800.webp";
import kymaBedroomTwo from "../assets/villas/kyma/bedroom-two.webp";
import kymaBedroomTwoSmall from "../assets/villas/kyma/bedroom-two-800.webp";
import kymaCoverInfinityPool from "../assets/villas/kyma/cover-infinity-pool.webp";
import kymaCoverInfinityPoolSmall from "../assets/villas/kyma/cover-infinity-pool-800.webp";
import kymaDiningTable from "../assets/villas/kyma/dining-table.webp";
import kymaDiningTableSmall from "../assets/villas/kyma/dining-table-800.webp";
import kymaKitchen from "../assets/villas/kyma/kitchen.webp";
import kymaKitchenSmall from "../assets/villas/kyma/kitchen-800.webp";
import kymaLivingRoom from "../assets/villas/kyma/living-room.webp";
import kymaLivingRoomSmall from "../assets/villas/kyma/living-room-800.webp";
import kymaOutdoorDining from "../assets/villas/kyma/outdoor-dining.webp";
import kymaOutdoorDiningSmall from "../assets/villas/kyma/outdoor-dining-800.webp";
import kymaPoolSunbeds from "../assets/villas/kyma/pool-sunbeds.webp";
import kymaPoolSunbedsSmall from "../assets/villas/kyma/pool-sunbeds-800.webp";
import kymaPoolTerrace from "../assets/villas/kyma/pool-terrace.webp";
import kymaPoolTerraceSmall from "../assets/villas/kyma/pool-terrace-800.webp";
import kymaShadedLounge from "../assets/villas/kyma/shaded-lounge.webp";
import kymaShadedLoungeSmall from "../assets/villas/kyma/shaded-lounge-800.webp";
import kymaVillaFromAbove from "../assets/villas/kyma/villa-from-above.webp";
import kymaVillaFromAboveSmall from "../assets/villas/kyma/villa-from-above-600.webp";

// Villa Akti (Ornos).
import aktiBedroomOne from "../assets/villas/akti/bedroom-one.webp";
import aktiBedroomOneSmall from "../assets/villas/akti/bedroom-one-800.webp";
import aktiBedroomSeaView from "../assets/villas/akti/bedroom-sea-view.webp";
import aktiBedroomSeaViewSmall from "../assets/villas/akti/bedroom-sea-view-800.webp";
import aktiBedroomTwo from "../assets/villas/akti/bedroom-two.webp";
import aktiBedroomTwoSmall from "../assets/villas/akti/bedroom-two-800.webp";
import aktiCoverTerraceDusk from "../assets/villas/akti/cover-terrace-dusk.webp";
import aktiCoverTerraceDuskSmall from "../assets/villas/akti/cover-terrace-dusk-800.webp";
import aktiDiningRoom from "../assets/villas/akti/dining-room.webp";
import aktiDiningRoomSmall from "../assets/villas/akti/dining-room-800.webp";
import aktiEntrance from "../assets/villas/akti/entrance.webp";
import aktiEntranceSmall from "../assets/villas/akti/entrance-600.webp";
import aktiFirepitLounge from "../assets/villas/akti/firepit-lounge.webp";
import aktiFirepitLoungeSmall from "../assets/villas/akti/firepit-lounge-800.webp";
import aktiInfinityPool from "../assets/villas/akti/infinity-pool.webp";
import aktiInfinityPoolSmall from "../assets/villas/akti/infinity-pool-800.webp";
import aktiInterior from "../assets/villas/akti/interior.webp";
import aktiInteriorSmall from "../assets/villas/akti/interior-800.webp";
import aktiPergolaTerrace from "../assets/villas/akti/pergola-terrace.webp";
import aktiPergolaTerraceSmall from "../assets/villas/akti/pergola-terrace-800.webp";
import aktiPrivateDock from "../assets/villas/akti/private-dock.webp";
import aktiPrivateDockSmall from "../assets/villas/akti/private-dock-800.webp";
import aktiSeaDeck from "../assets/villas/akti/sea-deck.webp";
import aktiSeaDeckSmall from "../assets/villas/akti/sea-deck-800.webp";

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
  /**
   * Optional "Private parties and events" section, for villas with the space to host one.
   * One string per paragraph. Also adds a "Private parties & DJ" label on the villa's card.
   */
  events?: string[];
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

const thalassa = {
  bedroomOne: withSmall(thalassaBedroomOne, thalassaBedroomOneSmall, 1600, 800),
  bedroomTwo: withSmall(thalassaBedroomTwo, thalassaBedroomTwoSmall, 1600, 800),
  clubNight: withSmall(thalassaClubNight, thalassaClubNightSmall, 1024, 800),
  coverPoolSunset: withSmall(thalassaCoverPoolSunset, thalassaCoverPoolSunsetSmall, 1600, 800),
  diningNight: withSmall(thalassaDiningNight, thalassaDiningNightSmall, 1600, 800),
  gym: withSmall(thalassaGym, thalassaGymSmall, 1600, 800),
  loungeSea: withSmall(thalassaLoungeSea, thalassaLoungeSeaSmall, 1600, 800),
  nightPools: withSmall(thalassaNightPools, thalassaNightPoolsSmall, 1600, 800),
  poolBar: withSmall(thalassaPoolBar, thalassaPoolBarSmall, 1417, 800),
  poolEdgeSea: withSmall(thalassaPoolEdgeSea, thalassaPoolEdgeSeaSmall, 1440, 800),
  poolFromAbove: withSmall(thalassaPoolFromAbove, thalassaPoolFromAboveSmall, 1000, 600),
  poolTerrace: withSmall(thalassaPoolTerrace, thalassaPoolTerraceSmall, 1600, 800),
  poolsSeaView: withSmall(thalassaPoolsSeaView, thalassaPoolsSeaViewSmall, 1600, 800),
};

const orizon = {
  bedroomOne: withSmall(orizonBedroomOne, orizonBedroomOneSmall, 1600, 800),
  bedroomTwo: withSmall(orizonBedroomTwo, orizonBedroomTwoSmall, 1400, 800),
  coverInfinityPool: withSmall(orizonCoverInfinityPool, orizonCoverInfinityPoolSmall, 1600, 800),
  gym: withSmall(orizonGym, orizonGymSmall, 1600, 800),
  helipad: withSmall(orizonHelipad, orizonHelipadSmall, 1363, 800),
  infinityPool: withSmall(orizonInfinityPool, orizonInfinityPoolSmall, 1600, 800),
  kitchen: withSmall(orizonKitchen, orizonKitchenSmall, 1331, 800),
  livingLounge: withSmall(orizonLivingLounge, orizonLivingLoungeSmall, 1600, 800),
  poolFromAbove: withSmall(orizonPoolFromAbove, orizonPoolFromAboveSmall, 1000, 600),
  poolLounge: withSmall(orizonPoolLounge, orizonPoolLoungeSmall, 1600, 800),
  poolSunset: withSmall(orizonPoolSunset, orizonPoolSunsetSmall, 1080, 800),
  tennisCourt: withSmall(orizonTennisCourt, orizonTennisCourtSmall, 1051, 800),
  terracesNight: withSmall(orizonTerracesNight, orizonTerracesNightSmall, 1600, 800),
};

const ammos = {
  bathroom: withSmall(ammosBathroom, ammosBathroomSmall, 1600, 800),
  bedroomOne: withSmall(ammosBedroomOne, ammosBedroomOneSmall, 1600, 800),
  bedroomTwo: withSmall(ammosBedroomTwo, ammosBedroomTwoSmall, 1600, 800),
  coverVillaPool: withSmall(ammosCoverVillaPool, ammosCoverVillaPoolSmall, 1600, 800),
  kitchen: withSmall(ammosKitchen, ammosKitchenSmall, 1600, 800),
  livingRoom: withSmall(ammosLivingRoom, ammosLivingRoomSmall, 1600, 800),
  outdoorDining: withSmall(ammosOutdoorDining, ammosOutdoorDiningSmall, 1600, 800),
  poolFromAbove: withSmall(ammosPoolFromAbove, ammosPoolFromAboveSmall, 1000, 600),
  poolPergolaBay: withSmall(ammosPoolPergolaBay, ammosPoolPergolaBaySmall, 1600, 800),
  poolTerrace: withSmall(ammosPoolTerrace, ammosPoolTerraceSmall, 1600, 800),
  shadedTerrace: withSmall(ammosShadedTerrace, ammosShadedTerraceSmall, 1600, 800),
  terraceSeaView: withSmall(ammosTerraceSeaView, ammosTerraceSeaViewSmall, 1600, 800),
};

const elia = {
  bathroom: withSmall(eliaBathroom, eliaBathroomSmall, 1600, 800),
  coverPoolDusk: withSmall(eliaCoverPoolDusk, eliaCoverPoolDuskSmall, 1600, 800),
  diningKitchen: withSmall(eliaDiningKitchen, eliaDiningKitchenSmall, 1600, 800),
  fireLoungeFromAbove: withSmall(eliaFireLoungeFromAbove, eliaFireLoungeFromAboveSmall, 1000, 600),
  gardenDining: withSmall(eliaGardenDining, eliaGardenDiningSmall, 1600, 800),
  infinityPool: withSmall(eliaInfinityPool, eliaInfinityPoolSmall, 1600, 800),
  livingRoom: withSmall(eliaLivingRoom, eliaLivingRoomSmall, 1600, 800),
  outdoorDining: withSmall(eliaOutdoorDining, eliaOutdoorDiningSmall, 1600, 800),
  poolNight: withSmall(eliaPoolNight, eliaPoolNightSmall, 1600, 800),
  poolSunbeds: withSmall(eliaPoolSunbeds, eliaPoolSunbedsSmall, 1600, 800),
  shadedLounge: withSmall(eliaShadedLounge, eliaShadedLoungeSmall, 1600, 800),
  suiteOne: withSmall(eliaSuiteOne, eliaSuiteOneSmall, 1600, 800),
  suiteSeaView: withSmall(eliaSuiteSeaView, eliaSuiteSeaViewSmall, 1600, 800),
};

const selini = {
  bathroom: withSmall(seliniBathroom, seliniBathroomSmall, 1600, 800),
  bedroomOne: withSmall(seliniBedroomOne, seliniBedroomOneSmall, 1600, 800),
  bedroomTwo: withSmall(seliniBedroomTwo, seliniBedroomTwoSmall, 1557, 800),
  coverPoolDusk: withSmall(seliniCoverPoolDusk, seliniCoverPoolDuskSmall, 1600, 800),
  diningRoom: withSmall(seliniDiningRoom, seliniDiningRoomSmall, 1600, 800),
  livingRoom: withSmall(seliniLivingRoom, seliniLivingRoomSmall, 1600, 800),
  outdoorBar: withSmall(seliniOutdoorBar, seliniOutdoorBarSmall, 1600, 800),
  poolCurve: withSmall(seliniPoolCurve, seliniPoolCurveSmall, 909, 600),
  poolHammock: withSmall(seliniPoolHammock, seliniPoolHammockSmall, 1600, 800),
  poolSeaView: withSmall(seliniPoolSeaView, seliniPoolSeaViewSmall, 1600, 800),
  poolTerraceDusk: withSmall(seliniPoolTerraceDusk, seliniPoolTerraceDuskSmall, 1600, 800),
  stoneDiningTerrace: withSmall(seliniStoneDiningTerrace, seliniStoneDiningTerraceSmall, 1600, 800),
  terraceNight: withSmall(seliniTerraceNight, seliniTerraceNightSmall, 1600, 800),
};

const galini = {
  bathroom: withSmall(galiniBathroom, galiniBathroomSmall, 1600, 800),
  bedroomOne: withSmall(galiniBedroomOne, galiniBedroomOneSmall, 1600, 800),
  bedroomSeaView: withSmall(galiniBedroomSeaView, galiniBedroomSeaViewSmall, 1600, 800),
  coverPoolSeaView: withSmall(galiniCoverPoolSeaView, galiniCoverPoolSeaViewSmall, 1600, 800),
  diningRoom: withSmall(galiniDiningRoom, galiniDiningRoomSmall, 1600, 800),
  jacuzziNight: withSmall(galiniJacuzziNight, galiniJacuzziNightSmall, 1000, 600),
  kitchen: withSmall(galiniKitchen, galiniKitchenSmall, 1600, 800),
  livingRoom: withSmall(galiniLivingRoom, galiniLivingRoomSmall, 1600, 800),
  outdoorDiningNight: withSmall(galiniOutdoorDiningNight, galiniOutdoorDiningNightSmall, 1600, 800),
  pergolaLounge: withSmall(galiniPergolaLounge, galiniPergolaLoungeSmall, 1600, 800),
  poolNight: withSmall(galiniPoolNight, galiniPoolNightSmall, 1600, 800),
  poolTerrace: withSmall(galiniPoolTerrace, galiniPoolTerraceSmall, 1600, 800),
};

const kyma = {
  bathroom: withSmall(kymaBathroom, kymaBathroomSmall, 1600, 800),
  bayView: withSmall(kymaBayView, kymaBayViewSmall, 1200, 800),
  bedroomOne: withSmall(kymaBedroomOne, kymaBedroomOneSmall, 1600, 800),
  bedroomTwo: withSmall(kymaBedroomTwo, kymaBedroomTwoSmall, 1600, 800),
  coverInfinityPool: withSmall(kymaCoverInfinityPool, kymaCoverInfinityPoolSmall, 1600, 800),
  diningTable: withSmall(kymaDiningTable, kymaDiningTableSmall, 1416, 800),
  kitchen: withSmall(kymaKitchen, kymaKitchenSmall, 1600, 800),
  livingRoom: withSmall(kymaLivingRoom, kymaLivingRoomSmall, 1600, 800),
  outdoorDining: withSmall(kymaOutdoorDining, kymaOutdoorDiningSmall, 1600, 800),
  poolSunbeds: withSmall(kymaPoolSunbeds, kymaPoolSunbedsSmall, 1600, 800),
  poolTerrace: withSmall(kymaPoolTerrace, kymaPoolTerraceSmall, 1600, 800),
  shadedLounge: withSmall(kymaShadedLounge, kymaShadedLoungeSmall, 1053, 800),
  villaFromAbove: withSmall(kymaVillaFromAbove, kymaVillaFromAboveSmall, 1000, 600),
};

const akti = {
  bedroomOne: withSmall(aktiBedroomOne, aktiBedroomOneSmall, 1600, 800),
  bedroomSeaView: withSmall(aktiBedroomSeaView, aktiBedroomSeaViewSmall, 808, 800),
  bedroomTwo: withSmall(aktiBedroomTwo, aktiBedroomTwoSmall, 1600, 800),
  coverTerraceDusk: withSmall(aktiCoverTerraceDusk, aktiCoverTerraceDuskSmall, 1600, 800),
  diningRoom: withSmall(aktiDiningRoom, aktiDiningRoomSmall, 1600, 800),
  entrance: withSmall(aktiEntrance, aktiEntranceSmall, 1000, 600),
  firepitLounge: withSmall(aktiFirepitLounge, aktiFirepitLoungeSmall, 971, 800),
  infinityPool: withSmall(aktiInfinityPool, aktiInfinityPoolSmall, 1086, 800),
  interior: withSmall(aktiInterior, aktiInteriorSmall, 808, 800),
  pergolaTerrace: withSmall(aktiPergolaTerrace, aktiPergolaTerraceSmall, 1086, 800),
  privateDock: withSmall(aktiPrivateDock, aktiPrivateDockSmall, 1093, 800),
  seaDeck: withSmall(aktiSeaDeck, aktiSeaDeckSmall, 1085, 800),
};

const allVillas: Villa[] = [
  {
    slug: "villa-akti",
    name: "Villa Akti",
    area: "Ornos",
    bedrooms: 11,
    bathrooms: 11,
    guests: 22,
    summary:
      "A brand-new eleven-bedroom seafront villa above Ornos Bay, with an infinity pool, a path to the sea and its own private dock. Sleeps 22.",
    description: [
      "Perched in an elevated waterfront position above Ornos Bay, Villa Akti looks across the turquoise water of the Aegean, three kilometres from Mykonos Town and a short walk from Ornos and Agios Ioannis beaches.",
      "Built amphitheatrically over three levels, the villa is filled with sunlight all day. An infinity pool sits at its heart with unlimited sea views, a wooden path leads down to the water, and a private dock means guests can arrive by sea. Inside, earthy tones meet wood, black, grey and gold, with eleven en-suite bedrooms for up to twenty-two guests, and a private chef included in the stay.",
    ],
    amenities: [
      "Seafront, above Ornos Bay",
      "Private dock, reachable by sea",
      "Infinity pool with shallow end",
      "Path down to the sea",
      "Firepit lounge and shaded terraces",
      "Private chef included",
      "Professional kitchen",
      "Sound system",
      "Air conditioning in every room",
      "Daily housekeeping",
      "Accessible for guests with reduced mobility",
      "Gated property with alarm and CCTV",
      "Private parking for 5 cars",
    ],
    photos: [
      akti.coverTerraceDusk,
      akti.infinityPool,
      akti.seaDeck,
      akti.privateDock,
      akti.firepitLounge,
      akti.pergolaTerrace,
      akti.diningRoom,
      akti.interior,
      akti.bedroomOne,
      akti.bedroomTwo,
      akti.bedroomSeaView,
    ],
    featurePhoto: akti.entrance,
    gallery: [
      { title: "The pool and the sea", photos: [akti.infinityPool, akti.seaDeck, akti.privateDock] },
      { title: "Outdoor living", photos: [akti.firepitLounge, akti.pergolaTerrace] },
      { title: "Living and dining", photos: [akti.diningRoom, akti.interior] },
      { title: "Bedrooms", photos: [akti.bedroomOne, akti.bedroomTwo, akti.bedroomSeaView] },
    ],
  },
  {
    slug: "villa-kyma",
    name: "Villa Kyma",
    area: "Kalo Livadi",
    bedrooms: 9,
    bathrooms: 10,
    guests: 18,
    summary:
      "A nine-bedroom villa 300 m from Kalo Livadi beach, with an infinity pool, sea views from every bedroom, a gym and in-house staff. Sleeps 18.",
    description: [
      "Set on 1,200 m² above Kalo Livadi, Villa Kyma looks out over the Aegean and the bay's dramatic coastline, just 300 m from the beach and a dock for boat transfers, with the Kalo Livadi helipad 400 m away.",
      "An infinity pool that seems to merge with the horizon leads onto wide terraces with sun loungers, outdoor sofas and a dining table for twenty. Inside there are two living rooms, a professional kitchen and nine calm, minimalist en-suite bedrooms, every one with its own terrace and sea view. In-house staff, daily cleaning and a night security guard take care of the rest.",
    ],
    amenities: [
      "300 m from Kalo Livadi beach",
      "Infinity pool and pool bar",
      "Sea view from every bedroom",
      "Private terrace for every bedroom",
      "Outdoor dining for 20",
      "Gas BBQ and firepit",
      "Fully equipped gym",
      "Professional kitchen and wine cooler",
      "Two living rooms",
      "Sound system",
      "In-house staff and daily cleaning",
      "Security guard at night",
      "Air conditioning and Wi-Fi",
      "Private parking",
    ],
    photos: [
      kyma.coverInfinityPool,
      kyma.poolSunbeds,
      kyma.poolTerrace,
      kyma.bayView,
      kyma.outdoorDining,
      kyma.diningTable,
      kyma.shadedLounge,
      kyma.livingRoom,
      kyma.kitchen,
      kyma.bedroomOne,
      kyma.bedroomTwo,
      kyma.bathroom,
    ],
    featurePhoto: kyma.villaFromAbove,
    gallery: [
      { title: "The pool and the bay", photos: [kyma.bayView, kyma.poolSunbeds, kyma.poolTerrace] },
      { title: "Terraces and dining", photos: [kyma.outdoorDining, kyma.diningTable, kyma.shadedLounge] },
      { title: "Living and kitchen", photos: [kyma.livingRoom, kyma.kitchen] },
      { title: "Bedrooms", photos: [kyma.bedroomOne, kyma.bedroomTwo, kyma.bathroom] },
    ],
  },
  {
    slug: "villa-galini",
    name: "Villa Galini",
    area: "Psarou",
    bedrooms: 5,
    bathrooms: 5,
    guests: 10,
    summary:
      "A five-bedroom villa on the hillside above Psarou Beach, with a heated pool, an 8-person jacuzzi and panoramic sea views. Sleeps 10.",
    description: [
      "Perched on the hillside of Agios Lazaros above Psarou Beach, Villa Galini looks out over the Aegean from almost every room, a few minutes from some of the island's most exclusive beaches, restaurants and boutiques.",
      "Across 350 m², warm wood, stone and soft neutral tones open onto terraces with a heated pool, shaded pergolas, an outdoor dining table and an eight-person jacuzzi that comes into its own at night. Five deluxe bedrooms, each with its own bathroom, sleep up to ten guests.",
    ],
    amenities: [
      "Above Psarou Beach",
      "Heated pool",
      "8-person jacuzzi",
      "Panoramic sea views",
      "Sunbeds and pergolas",
      "Outdoor dining and BBQ area",
      "Spa and wellness",
      "Living and dining room",
      "Fully equipped kitchen",
      "Air conditioning",
      "Free Wi-Fi",
      "Gated entrance and night security",
      "Private parking",
    ],
    photos: [
      galini.coverPoolSeaView,
      galini.poolNight,
      galini.poolTerrace,
      galini.pergolaLounge,
      galini.outdoorDiningNight,
      galini.livingRoom,
      galini.kitchen,
      galini.diningRoom,
      galini.bedroomSeaView,
      galini.bedroomOne,
      galini.bathroom,
    ],
    featurePhoto: galini.jacuzziNight,
    gallery: [
      { title: "The pool and the view", photos: [galini.poolNight, galini.poolTerrace, galini.pergolaLounge] },
      { title: "Evenings outside", photos: [galini.outdoorDiningNight] },
      { title: "Living and dining", photos: [galini.livingRoom, galini.kitchen, galini.diningRoom] },
      { title: "Bedrooms", photos: [galini.bedroomSeaView, galini.bedroomOne, galini.bathroom] },
    ],
  },
  {
    slug: "villa-elia",
    name: "Villa Elia",
    area: "Agia Anna",
    bedrooms: 7,
    bathrooms: 9,
    guests: 16,
    summary:
      "A seven-bedroom villa 50 m from Agia Anna beach, with an infinity pool with jacuzzi and waterfall, olive gardens and an outdoor fireplace. Sleeps 16.",
    description: [
      "Just steps from the turquoise water of Agia Anna, Villa Elia brings together Cycladic architecture and calm, light-filled modern design, with the beaches of Kalafatis and Kalo Livadi a short stroll or drive away.",
      "Life outside centres on an infinity pool with a jacuzzi and waterfall, framed by shaded lounges, an outdoor bar, a BBQ and an al fresco dining table. Seven en-suite bedrooms, most with sea views and two in independent guesthouses, sleep up to sixteen, with an olive grove, an outdoor fireplace lounge and a yoga and massage space for slower days.",
    ],
    amenities: [
      "50 m from Agia Anna beach",
      "Infinity pool with jacuzzi and waterfall",
      "Sea views",
      "Outdoor bar and BBQ",
      "Shaded lounges and outdoor dining",
      "Outdoor fireplace lounge",
      "Massage and yoga space",
      "Olive grove and organic vegetable garden",
      "Two independent guesthouses",
      "Daily housekeeping",
      "Welcome hamper with Greek produce",
      "Gated estate with private parking",
      "Alarm and security system",
      "Pet friendly on request",
    ],
    photos: [
      elia.coverPoolDusk,
      elia.infinityPool,
      elia.poolSunbeds,
      elia.poolNight,
      elia.shadedLounge,
      elia.outdoorDining,
      elia.gardenDining,
      elia.livingRoom,
      elia.diningKitchen,
      elia.suiteOne,
      elia.suiteSeaView,
      elia.bathroom,
    ],
    featurePhoto: elia.fireLoungeFromAbove,
    gallery: [
      { title: "The pool", photos: [elia.poolNight, elia.infinityPool, elia.poolSunbeds] },
      { title: "Outdoor living", photos: [elia.shadedLounge, elia.outdoorDining, elia.gardenDining] },
      { title: "Living and dining", photos: [elia.livingRoom, elia.diningKitchen] },
      { title: "Suites", photos: [elia.suiteSeaView, elia.suiteOne, elia.bathroom] },
    ],
    events: [
      "With 315 m² of sunlit terraces around a striking infinity pool, Villa Elia is an elegant setting for celebrations, from a private party by the pool to a wedding reception or a family gathering under the Mykonos sky.",
      "We organise the whole event for you: a professional DJ with sound and lighting, a bar team and cocktails, a private chef or catering, decoration, security and transfers for your guests.",
    ],
  },
  {
    slug: "villa-selini",
    name: "Villa Selini",
    area: "Fanari",
    bedrooms: 10,
    bathrooms: 9,
    guests: 20,
    summary:
      "A ten-bedroom Cycladic villa in Fanari with a private pool, outdoor jacuzzi and panoramic sea and sunset views. Sleeps 20.",
    description: [
      "Set in Fanari, Villa Selini is a classic white Cycladic house of flowing curves and wide terraces, with panoramic views of the sea and evenings built around the sunset.",
      "Its free-form pool, outdoor jacuzzi, stone-walled dining terrace and outdoor bar make it a natural gathering place for a large group, with ten bedrooms for up to twenty guests, bright living and dining rooms and a fully equipped kitchen.",
    ],
    amenities: [
      "Private swimming pool",
      "Outdoor jacuzzi",
      "Panoramic sea and sunset view",
      "Private balconies and terraces",
      "Sunbeds",
      "Shaded outdoor dining terrace",
      "BBQ",
      "Air conditioning",
      "Free Wi-Fi",
      "Fully equipped kitchen",
      "Daily maid service",
      "Linen and towels changed every two days",
      "Parking for 4 cars",
    ],
    photos: [
      selini.coverPoolDusk,
      selini.poolTerraceDusk,
      selini.poolSeaView,
      selini.poolHammock,
      selini.stoneDiningTerrace,
      selini.outdoorBar,
      selini.terraceNight,
      selini.livingRoom,
      selini.diningRoom,
      selini.bedroomOne,
      selini.bedroomTwo,
      selini.bathroom,
    ],
    featurePhoto: selini.poolCurve,
    gallery: [
      { title: "The pool", photos: [selini.poolTerraceDusk, selini.poolSeaView, selini.poolHammock] },
      { title: "Terraces and the bar", photos: [selini.stoneDiningTerrace, selini.outdoorBar, selini.terraceNight] },
      { title: "Living and dining", photos: [selini.livingRoom, selini.diningRoom] },
      { title: "Bedrooms", photos: [selini.bedroomOne, selini.bedroomTwo, selini.bathroom] },
    ],
  },
  {
    slug: "villa-ammos",
    name: "Villa Ammos",
    area: "Ftelia",
    bedrooms: 7,
    bathrooms: 8,
    guests: 14,
    summary:
      "A seven-bedroom beachfront villa on Ftelia Bay with a heated infinity pool, an outdoor gym and a path straight down to the sandy beach. Sleeps 14.",
    description: [
      "Villa Ammos sits on the hillside of Ftelia Bay, sheltered from the wind, with uninterrupted views over the sea and a paved path that leads straight down to the golden sand. Newly refurbished, the house spreads across 400 m² on a 6,000 m² plot, ten minutes' drive from Mykonos Town.",
      "Cycladic architecture meets contemporary design across two levels, with seven en-suite bedrooms, six of them with sea views and two set apart as guest suites with their own entrance. Outside, two lounges, a shaded dining and BBQ area, an outdoor bar and a sea-view gym frame the heated infinity pool overlooking the bay.",
    ],
    amenities: [
      "Beachfront, 50 m from Ftelia Beach",
      "Heated infinity pool",
      "Sea views from six bedrooms",
      "Sheltered from the wind",
      "Outdoor gym with sea view",
      "Outdoor bar and lounges",
      "Outdoor dining area and BBQ",
      "Sonos and outdoor sound system",
      "Air conditioning and fans",
      "Smart TVs and high-speed Wi-Fi",
      "Fully equipped kitchen",
      "Daily maid service",
      "Parking",
    ],
    photos: [
      ammos.coverVillaPool,
      ammos.poolPergolaBay,
      ammos.terraceSeaView,
      ammos.poolTerrace,
      ammos.outdoorDining,
      ammos.shadedTerrace,
      ammos.livingRoom,
      ammos.kitchen,
      ammos.bedroomOne,
      ammos.bedroomTwo,
      ammos.bathroom,
    ],
    featurePhoto: ammos.poolFromAbove,
    gallery: [
      { title: "The pool and the bay", photos: [ammos.poolPergolaBay, ammos.terraceSeaView, ammos.poolTerrace] },
      { title: "Outdoor living", photos: [ammos.outdoorDining, ammos.shadedTerrace] },
      { title: "Living and kitchen", photos: [ammos.livingRoom, ammos.kitchen] },
      { title: "Bedrooms", photos: [ammos.bedroomOne, ammos.bedroomTwo, ammos.bathroom] },
    ],
  },
  {
    slug: "villa-thalassa",
    name: "Villa Thalassa",
    area: "Houlakia",
    bedrooms: 12,
    bathrooms: 15,
    guests: 24,
    summary:
      "A twelve-bedroom seafront estate in Houlakia with a 500 m² lake-shaped pool, a second heated pool, five bars and a private seafront club for parties and events.",
    description: [
      "Set right on the water in Houlakia, Villa Thalassa is a private seafront estate with panoramic views of the Aegean from every suite. Its lake-shaped pool covers some 500 m², with a second heated pool by the sunset terrace for the master suites.",
      "Twelve double en-suite bedrooms, nine of them master suites, are spread across the estate, with handcrafted interiors, tropical gardens and a wooden bridge leading to a private seafront club. Two spas, four jacuzzis, a sauna and a large gym make it as easy to rest here as to celebrate.",
    ],
    amenities: [
      "Beachfront access",
      "500 m² lake-shaped pool",
      "Second heated pool",
      "Panoramic sea views",
      "Private seafront club",
      "5 bars, including an underwater bar",
      "4 jacuzzis",
      "2 spas and a sauna",
      "Gym with Technogym equipment",
      "Tropical gardens",
      "Safe in every bedroom",
      "Power generator",
      "Parking for 10 cars",
    ],
    photos: [
      thalassa.coverPoolSunset,
      thalassa.poolsSeaView,
      thalassa.poolTerrace,
      thalassa.poolEdgeSea,
      thalassa.nightPools,
      thalassa.poolBar,
      thalassa.clubNight,
      thalassa.loungeSea,
      thalassa.diningNight,
      thalassa.bedroomOne,
      thalassa.bedroomTwo,
      thalassa.gym,
    ],
    featurePhoto: thalassa.poolFromAbove,
    gallery: [
      { title: "The pools and the sea", photos: [thalassa.poolsSeaView, thalassa.poolTerrace, thalassa.poolEdgeSea] },
      { title: "Bars and the club", photos: [thalassa.nightPools, thalassa.poolBar, thalassa.clubNight] },
      { title: "Living and dining", photos: [thalassa.loungeSea, thalassa.diningNight] },
      { title: "Suites and wellness", photos: [thalassa.gym, thalassa.bedroomOne, thalassa.bedroomTwo] },
    ],
    events: [
      "Villa Thalassa was made for celebrations. With a private seafront club, five bars and terraces that open straight onto the sea, it can host anything from a birthday dinner for your group to a full night party.",
      "We organise the whole event for you: a professional DJ with sound and lighting, a bar team and cocktails, a private chef or catering, decoration, security and transfers for your guests.",
    ],
  },
  {
    slug: "villa-orizon",
    name: "Villa Orizon",
    area: "Kastro",
    bedrooms: 11,
    bathrooms: 14,
    guests: 23,
    summary:
      "An eleven-bedroom villa in Kastro with two pools, jacuzzis, a bar, two kitchens, a private gym, tennis court, helipad and private chapel, five minutes from the port.",
    description: [
      "High above the island in the private area of Kastro, Villa Orizon looks out over a 180° view of Mykonos, by day and by night, and is only five minutes from the port.",
      "Life centres on the infinity pool with its bar and lounges, with a second pool, jacuzzis and sea-view master bedrooms. Two fully equipped kitchens make big dinners easy, and the estate adds a private gym, a tennis court, a shared helipad and its own chapel for weddings and celebrations.",
    ],
    amenities: [
      "180° view of the island",
      "Infinity pool",
      "Second pool",
      "Jacuzzis",
      "Bar and lounges",
      "2 fully equipped kitchens",
      "Private gym with Technogym equipment",
      "Tennis court",
      "Helipad (shared)",
      "Private chapel for weddings",
      "Private water supply",
      "Parking for 10 cars",
      "5 minutes from the port",
    ],
    photos: [
      orizon.coverInfinityPool,
      orizon.infinityPool,
      orizon.poolSunset,
      orizon.terracesNight,
      orizon.poolLounge,
      orizon.livingLounge,
      orizon.bedroomOne,
      orizon.bedroomTwo,
      orizon.kitchen,
      orizon.gym,
      orizon.tennisCourt,
      orizon.helipad,
    ],
    featurePhoto: orizon.poolFromAbove,
    gallery: [
      { title: "The infinity pool", photos: [orizon.infinityPool, orizon.poolSunset] },
      { title: "Lounges and the bar", photos: [orizon.terracesNight, orizon.poolLounge, orizon.livingLounge] },
      { title: "Bedrooms and kitchen", photos: [orizon.bedroomOne, orizon.bedroomTwo, orizon.kitchen] },
      { title: "Gym, tennis and helipad", photos: [orizon.gym, orizon.tennisCourt, orizon.helipad] },
    ],
    events: [
      "With two pools, a bar, jacuzzis, two full kitchens and its own chapel, Villa Orizon has the space for real celebrations, from a private party by the infinity pool to a wedding with dinner under the stars.",
      "We organise the whole event for you: a professional DJ with sound and lighting, a bar team and cocktails, a private chef or catering, decoration, security and transfers for your guests.",
    ],
  },
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

/*
 * THE ORDER OF THE VILLAS ON THE SITE.
 * The villas appear in this order, top to bottom. To move a villa, move its line.
 * A villa that is not in this list is shown after the ones that are.
 */
const VILLA_ORDER = [
  "villa-elia",
  "villa-selini",
  "villa-ammos",
  "villa-thalassa",
  "villa-orizon",
  "villa-ilios",
  "villa-galini",
  "villa-kyma",
  "villa-akti",
];

const position = (villa: Villa) => {
  const index = VILLA_ORDER.indexOf(villa.slug);
  return index === -1 ? VILLA_ORDER.length : index;
};

/** The villas shown on the site, in the order above. Samples are included only in the preview. */
export const villas: Villa[] = allVillas
  .filter((villa) => !villa.sample || import.meta.env.DEV)
  .sort((a, b) => position(a) - position(b));

export function getVilla(slug: string): Villa | undefined {
  return villas.find((villa) => villa.slug === slug);
}

export function formatVillaPrice(villa: Villa): string {
  return villa.priceFrom
    ? `From €${villa.priceFrom.toLocaleString("en-US")} / night`
    : "Price on request";
}

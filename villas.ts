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

// Villa Avra (Tourlos).
import avraCoverInfinityPool from "../assets/villas/avra/cover-infinity-pool.webp";
import avraCoverInfinityPoolSmall from "../assets/villas/avra/cover-infinity-pool-800.webp";
import avraKitchen from "../assets/villas/avra/kitchen.webp";
import avraKitchenSmall from "../assets/villas/avra/kitchen-800.webp";
import avraOutdoorDining from "../assets/villas/avra/outdoor-dining.webp";
import avraOutdoorDiningSmall from "../assets/villas/avra/outdoor-dining-800.webp";
import avraPoolDusk from "../assets/villas/avra/pool-dusk.webp";
import avraPoolDuskSmall from "../assets/villas/avra/pool-dusk-800.webp";
import avraPoolGarden from "../assets/villas/avra/pool-garden.webp";
import avraPoolGardenSmall from "../assets/villas/avra/pool-garden-600.webp";
import avraPoolNight from "../assets/villas/avra/pool-night.webp";
import avraPoolNightSmall from "../assets/villas/avra/pool-night-800.webp";
import avraPoolTerrace from "../assets/villas/avra/pool-terrace.webp";
import avraPoolTerraceSmall from "../assets/villas/avra/pool-terrace-800.webp";
import avraShadedLounge from "../assets/villas/avra/shaded-lounge.webp";
import avraShadedLoungeSmall from "../assets/villas/avra/shaded-lounge-800.webp";
import avraSuiteOne from "../assets/villas/avra/suite-one.webp";
import avraSuiteOneSmall from "../assets/villas/avra/suite-one-800.webp";
import avraSuiteSeaView from "../assets/villas/avra/suite-sea-view.webp";
import avraSuiteSeaViewSmall from "../assets/villas/avra/suite-sea-view-800.webp";
import avraSuiteTwo from "../assets/villas/avra/suite-two.webp";
import avraSuiteTwoSmall from "../assets/villas/avra/suite-two-800.webp";
import avraWineRoom from "../assets/villas/avra/wine-room.webp";
import avraWineRoomSmall from "../assets/villas/avra/wine-room-800.webp";

// Villa Petra (Kanalia).
import petraBedroomOne from "../assets/villas/petra/bedroom-one.webp";
import petraBedroomOneSmall from "../assets/villas/petra/bedroom-one-800.webp";
import petraBedroomTwo from "../assets/villas/petra/bedroom-two.webp";
import petraBedroomTwoSmall from "../assets/villas/petra/bedroom-two-800.webp";
import petraCoverPool from "../assets/villas/petra/cover-pool.webp";
import petraCoverPoolSmall from "../assets/villas/petra/cover-pool-800.webp";
import petraJacuzziSeaView from "../assets/villas/petra/jacuzzi-sea-view.webp";
import petraJacuzziSeaViewSmall from "../assets/villas/petra/jacuzzi-sea-view-800.webp";
import petraKitchen from "../assets/villas/petra/kitchen.webp";
import petraKitchenSmall from "../assets/villas/petra/kitchen-800.webp";
import petraLivingRoom from "../assets/villas/petra/living-room.webp";
import petraLivingRoomSmall from "../assets/villas/petra/living-room-800.webp";
import petraOutdoorDining from "../assets/villas/petra/outdoor-dining.webp";
import petraOutdoorDiningSmall from "../assets/villas/petra/outdoor-dining-800.webp";
import petraPoolFromAbove from "../assets/villas/petra/pool-from-above.webp";
import petraPoolFromAboveSmall from "../assets/villas/petra/pool-from-above-600.webp";
import petraPoolSunset from "../assets/villas/petra/pool-sunset.webp";
import petraPoolSunsetSmall from "../assets/villas/petra/pool-sunset-800.webp";
import petraPoolTerrace from "../assets/villas/petra/pool-terrace.webp";
import petraPoolTerraceSmall from "../assets/villas/petra/pool-terrace-800.webp";
import petraSuiteJacuzzi from "../assets/villas/petra/suite-jacuzzi.webp";
import petraSuiteJacuzziSmall from "../assets/villas/petra/suite-jacuzzi-800.webp";
import petraSunbedsSeaView from "../assets/villas/petra/sunbeds-sea-view.webp";
import petraSunbedsSeaViewSmall from "../assets/villas/petra/sunbeds-sea-view-800.webp";
import petraTerraceDining from "../assets/villas/petra/terrace-dining.webp";
import petraTerraceDiningSmall from "../assets/villas/petra/terrace-dining-800.webp";

// Villa Oneiro (Ano Mera).
import oneiroBathroom from "../assets/villas/oneiro/bathroom.webp";
import oneiroBathroomSmall from "../assets/villas/oneiro/bathroom-800.webp";
import oneiroBedroomGardenView from "../assets/villas/oneiro/bedroom-garden-view.webp";
import oneiroBedroomGardenViewSmall from "../assets/villas/oneiro/bedroom-garden-view-800.webp";
import oneiroBedroomStoneWall from "../assets/villas/oneiro/bedroom-stone-wall.webp";
import oneiroBedroomStoneWallSmall from "../assets/villas/oneiro/bedroom-stone-wall-800.webp";
import oneiroCoverPoolDusk from "../assets/villas/oneiro/cover-pool-dusk.webp";
import oneiroCoverPoolDuskSmall from "../assets/villas/oneiro/cover-pool-dusk-800.webp";
import oneiroDiningRoom from "../assets/villas/oneiro/dining-room.webp";
import oneiroDiningRoomSmall from "../assets/villas/oneiro/dining-room-800.webp";
import oneiroHangingChairs from "../assets/villas/oneiro/hanging-chairs.webp";
import oneiroHangingChairsSmall from "../assets/villas/oneiro/hanging-chairs-800.webp";
import oneiroLivingRoomSeaView from "../assets/villas/oneiro/living-room-sea-view.webp";
import oneiroLivingRoomSeaViewSmall from "../assets/villas/oneiro/living-room-sea-view-800.webp";
import oneiroLivingRoomStoneWall from "../assets/villas/oneiro/living-room-stone-wall.webp";
import oneiroLivingRoomStoneWallSmall from "../assets/villas/oneiro/living-room-stone-wall-800.webp";
import oneiroOutdoorLounge from "../assets/villas/oneiro/outdoor-lounge.webp";
import oneiroOutdoorLoungeSmall from "../assets/villas/oneiro/outdoor-lounge-800.webp";
import oneiroShadedLoungeSeaView from "../assets/villas/oneiro/shaded-lounge-sea-view.webp";
import oneiroShadedLoungeSeaViewSmall from "../assets/villas/oneiro/shaded-lounge-sea-view-800.webp";
import oneiroVillaFromAbove from "../assets/villas/oneiro/villa-from-above.webp";
import oneiroVillaFromAboveSmall from "../assets/villas/oneiro/villa-from-above-600.webp";

// Villa Thea (Tourlos). Brochure photos only; swap for originals when available.
import theaBathroom from "../assets/villas/thea/bathroom.webp";
import theaBathroomSmall from "../assets/villas/thea/bathroom-800.webp";
import theaBedroomSeaView from "../assets/villas/thea/bedroom-sea-view.webp";
import theaBedroomSeaViewSmall from "../assets/villas/thea/bedroom-sea-view-800.webp";
import theaCoverInfinityPool from "../assets/villas/thea/cover-infinity-pool.webp";
import theaCoverInfinityPoolSmall from "../assets/villas/thea/cover-infinity-pool-800.webp";
import theaDiningRoom from "../assets/villas/thea/dining-room.webp";
import theaDiningRoomSmall from "../assets/villas/thea/dining-room-800.webp";
import theaGardenSeaView from "../assets/villas/thea/garden-sea-view.webp";
import theaGardenSeaViewSmall from "../assets/villas/thea/garden-sea-view-800.webp";
import theaGuestHouseBedroom from "../assets/villas/thea/guest-house-bedroom.webp";
import theaGuestHouseBedroomSmall from "../assets/villas/thea/guest-house-bedroom-800.webp";
import theaLivingRoom from "../assets/villas/thea/living-room.webp";
import theaLivingRoomSmall from "../assets/villas/thea/living-room-800.webp";
import theaMasterBedroom from "../assets/villas/thea/master-bedroom.webp";
import theaMasterBedroomSmall from "../assets/villas/thea/master-bedroom-800.webp";
import theaOutdoorDining from "../assets/villas/thea/outdoor-dining.webp";
import theaOutdoorDiningSmall from "../assets/villas/thea/outdoor-dining-800.webp";
import theaPergolaLoungeDusk from "../assets/villas/thea/pergola-lounge-dusk.webp";
import theaPergolaLoungeDuskSmall from "../assets/villas/thea/pergola-lounge-dusk-800.webp";
import theaPoolDusk from "../assets/villas/thea/pool-dusk.webp";
import theaPoolDuskSmall from "../assets/villas/thea/pool-dusk-800.webp";
import theaPoolFromAbove from "../assets/villas/thea/pool-from-above.webp";
import theaPoolFromAboveSmall from "../assets/villas/thea/pool-from-above-600.webp";

// Villa Kyanos (Tourlos, Paradisia hills).
import kyanosBathroom from "../assets/villas/kyanos/bathroom.webp";
import kyanosBathroomSmall from "../assets/villas/kyanos/bathroom-800.webp";
import kyanosBedroomSeaView from "../assets/villas/kyanos/bedroom-sea-view.webp";
import kyanosBedroomSeaViewSmall from "../assets/villas/kyanos/bedroom-sea-view-800.webp";
import kyanosBedroomTerraceDoor from "../assets/villas/kyanos/bedroom-terrace-door.webp";
import kyanosBedroomTerraceDoorSmall from "../assets/villas/kyanos/bedroom-terrace-door-800.webp";
import kyanosCourtyardLounge from "../assets/villas/kyanos/courtyard-lounge.webp";
import kyanosCourtyardLoungeSmall from "../assets/villas/kyanos/courtyard-lounge-800.webp";
import kyanosCoverInfinityPool from "../assets/villas/kyanos/cover-infinity-pool.webp";
import kyanosCoverInfinityPoolSmall from "../assets/villas/kyanos/cover-infinity-pool-800.webp";
import kyanosGarden from "../assets/villas/kyanos/garden.webp";
import kyanosGardenSmall from "../assets/villas/kyanos/garden-800.webp";
import kyanosInfinityPool from "../assets/villas/kyanos/infinity-pool.webp";
import kyanosInfinityPoolSmall from "../assets/villas/kyanos/infinity-pool-800.webp";
import kyanosKitchen from "../assets/villas/kyanos/kitchen.webp";
import kyanosKitchenSmall from "../assets/villas/kyanos/kitchen-800.webp";
import kyanosKitchenIsland from "../assets/villas/kyanos/kitchen-island.webp";
import kyanosKitchenIslandSmall from "../assets/villas/kyanos/kitchen-island-800.webp";
import kyanosPoolFromAbove from "../assets/villas/kyanos/pool-from-above.webp";
import kyanosPoolFromAboveSmall from "../assets/villas/kyanos/pool-from-above-600.webp";
import kyanosPoolTerrace from "../assets/villas/kyanos/pool-terrace.webp";
import kyanosPoolTerraceSmall from "../assets/villas/kyanos/pool-terrace-800.webp";
import kyanosShadedTerrace from "../assets/villas/kyanos/shaded-terrace.webp";
import kyanosShadedTerraceSmall from "../assets/villas/kyanos/shaded-terrace-800.webp";
import kyanosVillaNight from "../assets/villas/kyanos/villa-night.webp";
import kyanosVillaNightSmall from "../assets/villas/kyanos/villa-night-800.webp";

// Villa Fos (Fanari).
import fosArchSunset from "../assets/villas/fos/arch-sunset.webp";
import fosArchSunsetSmall from "../assets/villas/fos/arch-sunset-600.webp";
import fosBathroom from "../assets/villas/fos/bathroom.webp";
import fosBathroomSmall from "../assets/villas/fos/bathroom-800.webp";
import fosBedroomBlueShutters from "../assets/villas/fos/bedroom-blue-shutters.webp";
import fosBedroomBlueShuttersSmall from "../assets/villas/fos/bedroom-blue-shutters-800.webp";
import fosBedroomOne from "../assets/villas/fos/bedroom-one.webp";
import fosBedroomOneSmall from "../assets/villas/fos/bedroom-one-800.webp";
import fosCoverVillaPool from "../assets/villas/fos/cover-villa-pool.webp";
import fosCoverVillaPoolSmall from "../assets/villas/fos/cover-villa-pool-800.webp";
import fosGuestHouseLiving from "../assets/villas/fos/guest-house-living.webp";
import fosGuestHouseLivingSmall from "../assets/villas/fos/guest-house-living-800.webp";
import fosKitchen from "../assets/villas/fos/kitchen.webp";
import fosKitchenSmall from "../assets/villas/fos/kitchen-800.webp";
import fosLivingRoom from "../assets/villas/fos/living-room.webp";
import fosLivingRoomSmall from "../assets/villas/fos/living-room-800.webp";
import fosOutdoorLounge from "../assets/villas/fos/outdoor-lounge.webp";
import fosOutdoorLoungeSmall from "../assets/villas/fos/outdoor-lounge-800.webp";
import fosPergolaDining from "../assets/villas/fos/pergola-dining.webp";
import fosPergolaDiningSmall from "../assets/villas/fos/pergola-dining-800.webp";
import fosPoolSeaView from "../assets/villas/fos/pool-sea-view.webp";
import fosPoolSeaViewSmall from "../assets/villas/fos/pool-sea-view-800.webp";
import fosPoolSunbeds from "../assets/villas/fos/pool-sunbeds.webp";
import fosPoolSunbedsSmall from "../assets/villas/fos/pool-sunbeds-800.webp";
import fosSunsetTerrace from "../assets/villas/fos/sunset-terrace.webp";
import fosSunsetTerraceSmall from "../assets/villas/fos/sunset-terrace-800.webp";

// Villa Aelia (Lino). Brochure photos only; swap for originals when available.
import aeliaBathroom from "../assets/villas/aelia/bathroom.webp";
import aeliaBathroomSmall from "../assets/villas/aelia/bathroom-800.webp";
import aeliaCoverPoolDusk from "../assets/villas/aelia/cover-pool-dusk.webp";
import aeliaCoverPoolDuskSmall from "../assets/villas/aelia/cover-pool-dusk-800.webp";
import aeliaDiningRoom from "../assets/villas/aelia/dining-room.webp";
import aeliaDiningRoomSmall from "../assets/villas/aelia/dining-room-800.webp";
import aeliaInfinityPool from "../assets/villas/aelia/infinity-pool.webp";
import aeliaInfinityPoolSmall from "../assets/villas/aelia/infinity-pool-800.webp";
import aeliaKitchen from "../assets/villas/aelia/kitchen.webp";
import aeliaKitchenSmall from "../assets/villas/aelia/kitchen-800.webp";
import aeliaLivingRoom from "../assets/villas/aelia/living-room.webp";
import aeliaLivingRoomSmall from "../assets/villas/aelia/living-room-800.webp";
import aeliaOutdoorDining from "../assets/villas/aelia/outdoor-dining.webp";
import aeliaOutdoorDiningSmall from "../assets/villas/aelia/outdoor-dining-800.webp";
import aeliaSuiteOne from "../assets/villas/aelia/suite-one.webp";
import aeliaSuiteOneSmall from "../assets/villas/aelia/suite-one-800.webp";
import aeliaSuiteThree from "../assets/villas/aelia/suite-three.webp";
import aeliaSuiteThreeSmall from "../assets/villas/aelia/suite-three-800.webp";
import aeliaSuiteTwo from "../assets/villas/aelia/suite-two.webp";
import aeliaSuiteTwoSmall from "../assets/villas/aelia/suite-two-800.webp";
import aeliaTerraceUmbrella from "../assets/villas/aelia/terrace-umbrella.webp";
import aeliaTerraceUmbrellaSmall from "../assets/villas/aelia/terrace-umbrella-800.webp";
import aeliaVillaFromAbove from "../assets/villas/aelia/villa-from-above.webp";
import aeliaVillaFromAboveSmall from "../assets/villas/aelia/villa-from-above-600.webp";

// Villa Esperos (Kanalia).
import esperosCoverPergolaSunset from "../assets/villas/esperos/cover-pergola-sunset.webp";
import esperosCoverPergolaSunsetSmall from "../assets/villas/esperos/cover-pergola-sunset-800.webp";
import esperosHeatedPool from "../assets/villas/esperos/heated-pool.webp";
import esperosHeatedPoolSmall from "../assets/villas/esperos/heated-pool-800.webp";
import esperosPoolSeaView from "../assets/villas/esperos/pool-sea-view.webp";
import esperosPoolSeaViewSmall from "../assets/villas/esperos/pool-sea-view-800.webp";
import esperosOutdoorDining from "../assets/villas/esperos/outdoor-dining.webp";
import esperosOutdoorDiningSmall from "../assets/villas/esperos/outdoor-dining-800.webp";
import esperosPergolaLounge from "../assets/villas/esperos/pergola-lounge.webp";
import esperosPergolaLoungeSmall from "../assets/villas/esperos/pergola-lounge-800.webp";
import esperosPrivateBeach from "../assets/villas/esperos/private-beach.webp";
import esperosPrivateBeachSmall from "../assets/villas/esperos/private-beach-800.webp";
import esperosLivingRoom from "../assets/villas/esperos/living-room.webp";
import esperosLivingRoomSmall from "../assets/villas/esperos/living-room-800.webp";
import esperosKitchen from "../assets/villas/esperos/kitchen.webp";
import esperosKitchenSmall from "../assets/villas/esperos/kitchen-800.webp";
import esperosMasterBedroom from "../assets/villas/esperos/master-bedroom.webp";
import esperosMasterBedroomSmall from "../assets/villas/esperos/master-bedroom-800.webp";
import esperosBedroomSeaView from "../assets/villas/esperos/bedroom-sea-view.webp";
import esperosBedroomSeaViewSmall from "../assets/villas/esperos/bedroom-sea-view-800.webp";
import esperosBathroom from "../assets/villas/esperos/bathroom.webp";
import esperosBathroomSmall from "../assets/villas/esperos/bathroom-800.webp";
import esperosGym from "../assets/villas/esperos/gym.webp";
import esperosGymSmall from "../assets/villas/esperos/gym-800.webp";
import esperosPoolNight from "../assets/villas/esperos/pool-night.webp";
import esperosPoolNightSmall from "../assets/villas/esperos/pool-night-800.webp";
import esperosJacuzziSunset from "../assets/villas/esperos/jacuzzi-sunset.webp";
import esperosJacuzziSunsetSmall from "../assets/villas/esperos/jacuzzi-sunset-600.webp";

// Villa Asteri (Mykonos Town).
import asteriCoverPool from "../assets/villas/asteri/cover-pool.webp";
import asteriCoverPoolSmall from "../assets/villas/asteri/cover-pool-800.webp";
import asteriPoolGarden from "../assets/villas/asteri/pool-garden.webp";
import asteriPoolGardenSmall from "../assets/villas/asteri/pool-garden-800.webp";
import asteriPoolSunbeds from "../assets/villas/asteri/pool-sunbeds.webp";
import asteriPoolSunbedsSmall from "../assets/villas/asteri/pool-sunbeds-800.webp";
import asteriTerraceSeaView from "../assets/villas/asteri/terrace-sea-view.webp";
import asteriTerraceSeaViewSmall from "../assets/villas/asteri/terrace-sea-view-800.webp";
import asteriPergolaLounge from "../assets/villas/asteri/pergola-lounge.webp";
import asteriPergolaLoungeSmall from "../assets/villas/asteri/pergola-lounge-800.webp";
import asteriOutdoorDining from "../assets/villas/asteri/outdoor-dining.webp";
import asteriOutdoorDiningSmall from "../assets/villas/asteri/outdoor-dining-800.webp";
import asteriLivingRoom from "../assets/villas/asteri/living-room.webp";
import asteriLivingRoomSmall from "../assets/villas/asteri/living-room-800.webp";
import asteriDiningRoom from "../assets/villas/asteri/dining-room.webp";
import asteriDiningRoomSmall from "../assets/villas/asteri/dining-room-800.webp";
import asteriKitchen from "../assets/villas/asteri/kitchen.webp";
import asteriKitchenSmall from "../assets/villas/asteri/kitchen-800.webp";
import asteriMasterBedroom from "../assets/villas/asteri/master-bedroom.webp";
import asteriMasterBedroomSmall from "../assets/villas/asteri/master-bedroom-800.webp";
import asteriBedroomTwo from "../assets/villas/asteri/bedroom-two.webp";
import asteriBedroomTwoSmall from "../assets/villas/asteri/bedroom-two-800.webp";
import asteriBedroomThree from "../assets/villas/asteri/bedroom-three.webp";
import asteriBedroomThreeSmall from "../assets/villas/asteri/bedroom-three-800.webp";
import asteriBathroom from "../assets/villas/asteri/bathroom.webp";
import asteriBathroomSmall from "../assets/villas/asteri/bathroom-800.webp";
import asteriPoolDusk from "../assets/villas/asteri/pool-dusk.webp";
import asteriPoolDuskSmall from "../assets/villas/asteri/pool-dusk-800.webp";
import asteriTerraceDusk from "../assets/villas/asteri/terrace-dusk.webp";
import asteriTerraceDuskSmall from "../assets/villas/asteri/terrace-dusk-600.webp";

// Villa Irini (Kalo Livadi).
import iriniCoverInfinityPool from "../assets/villas/irini/cover-infinity-pool.webp";
import iriniCoverInfinityPoolSmall from "../assets/villas/irini/cover-infinity-pool-800.webp";
import iriniPoolBayView from "../assets/villas/irini/pool-bay-view.webp";
import iriniPoolBayViewSmall from "../assets/villas/irini/pool-bay-view-800.webp";
import iriniPoolUmbrellas from "../assets/villas/irini/pool-umbrellas.webp";
import iriniPoolUmbrellasSmall from "../assets/villas/irini/pool-umbrellas-800.webp";
import iriniPoolAndVilla from "../assets/villas/irini/pool-and-villa.webp";
import iriniPoolAndVillaSmall from "../assets/villas/irini/pool-and-villa-800.webp";
import iriniPoolsideLounge from "../assets/villas/irini/poolside-lounge.webp";
import iriniPoolsideLoungeSmall from "../assets/villas/irini/poolside-lounge-800.webp";
import iriniLivingRoom from "../assets/villas/irini/living-room.webp";
import iriniLivingRoomSmall from "../assets/villas/irini/living-room-800.webp";
import iriniLivingSeaView from "../assets/villas/irini/living-sea-view.webp";
import iriniLivingSeaViewSmall from "../assets/villas/irini/living-sea-view-800.webp";
import iriniDiningKitchen from "../assets/villas/irini/dining-kitchen.webp";
import iriniDiningKitchenSmall from "../assets/villas/irini/dining-kitchen-800.webp";
import iriniMasterBedroom from "../assets/villas/irini/master-bedroom.webp";
import iriniMasterBedroomSmall from "../assets/villas/irini/master-bedroom-800.webp";
import iriniBedroomTwo from "../assets/villas/irini/bedroom-two.webp";
import iriniBedroomTwoSmall from "../assets/villas/irini/bedroom-two-800.webp";
import iriniBathroom from "../assets/villas/irini/bathroom.webp";
import iriniBathroomSmall from "../assets/villas/irini/bathroom-800.webp";
import iriniPoolDusk from "../assets/villas/irini/pool-dusk.webp";
import iriniPoolDuskSmall from "../assets/villas/irini/pool-dusk-800.webp";
import iriniPoolFromAbove from "../assets/villas/irini/pool-from-above.webp";
import iriniPoolFromAboveSmall from "../assets/villas/irini/pool-from-above-600.webp";

// Villa Aigli (Kalafatis).
import aigliCoverPoolDusk from "../assets/villas/aigli/cover-pool-dusk.webp";
import aigliCoverPoolDuskSmall from "../assets/villas/aigli/cover-pool-dusk-800.webp";
import aigliPoolSeaView from "../assets/villas/aigli/pool-sea-view.webp";
import aigliPoolSeaViewSmall from "../assets/villas/aigli/pool-sea-view-800.webp";
import aigliPoolFromTerrace from "../assets/villas/aigli/pool-from-terrace.webp";
import aigliPoolFromTerraceSmall from "../assets/villas/aigli/pool-from-terrace-800.webp";
import aigliVillaGarden from "../assets/villas/aigli/villa-garden.webp";
import aigliVillaGardenSmall from "../assets/villas/aigli/villa-garden-800.webp";
import aigliOutdoorDining from "../assets/villas/aigli/outdoor-dining.webp";
import aigliOutdoorDiningSmall from "../assets/villas/aigli/outdoor-dining-800.webp";
import aigliTerraceSeaView from "../assets/villas/aigli/terrace-sea-view.webp";
import aigliTerraceSeaViewSmall from "../assets/villas/aigli/terrace-sea-view-800.webp";
import aigliLivingRoom from "../assets/villas/aigli/living-room.webp";
import aigliLivingRoomSmall from "../assets/villas/aigli/living-room-800.webp";
import aigliDiningLiving from "../assets/villas/aigli/dining-living.webp";
import aigliDiningLivingSmall from "../assets/villas/aigli/dining-living-800.webp";
import aigliKitchen from "../assets/villas/aigli/kitchen.webp";
import aigliKitchenSmall from "../assets/villas/aigli/kitchen-800.webp";
import aigliMasterBedroom from "../assets/villas/aigli/master-bedroom.webp";
import aigliMasterBedroomSmall from "../assets/villas/aigli/master-bedroom-800.webp";
import aigliBedroomTwo from "../assets/villas/aigli/bedroom-two.webp";
import aigliBedroomTwoSmall from "../assets/villas/aigli/bedroom-two-800.webp";
import aigliTwinBedroom from "../assets/villas/aigli/twin-bedroom.webp";
import aigliTwinBedroomSmall from "../assets/villas/aigli/twin-bedroom-800.webp";
import aigliVillaFromAbove from "../assets/villas/aigli/villa-from-above.webp";
import aigliVillaFromAboveSmall from "../assets/villas/aigli/villa-from-above-600.webp";

// Villa Pelagos (Super Paradise).
import pelagosCoverInfinityPool from "../assets/villas/pelagos/cover-infinity-pool.webp";
import pelagosCoverInfinityPoolSmall from "../assets/villas/pelagos/cover-infinity-pool-800.webp";
import pelagosPoolSunbeds from "../assets/villas/pelagos/pool-sunbeds.webp";
import pelagosPoolSunbedsSmall from "../assets/villas/pelagos/pool-sunbeds-800.webp";
import pelagosPoolSunset from "../assets/villas/pelagos/pool-sunset.webp";
import pelagosPoolSunsetSmall from "../assets/villas/pelagos/pool-sunset-800.webp";
import pelagosPoolDusk from "../assets/villas/pelagos/pool-dusk.webp";
import pelagosPoolDuskSmall from "../assets/villas/pelagos/pool-dusk-800.webp";
import pelagosPergolaLounge from "../assets/villas/pelagos/pergola-lounge.webp";
import pelagosPergolaLoungeSmall from "../assets/villas/pelagos/pergola-lounge-800.webp";
import pelagosOutdoorDining from "../assets/villas/pelagos/outdoor-dining.webp";
import pelagosOutdoorDiningSmall from "../assets/villas/pelagos/outdoor-dining-800.webp";
import pelagosPergolaDusk from "../assets/villas/pelagos/pergola-dusk.webp";
import pelagosPergolaDuskSmall from "../assets/villas/pelagos/pergola-dusk-800.webp";
import pelagosLivingRoom from "../assets/villas/pelagos/living-room.webp";
import pelagosLivingRoomSmall from "../assets/villas/pelagos/living-room-800.webp";
import pelagosDiningRoom from "../assets/villas/pelagos/dining-room.webp";
import pelagosDiningRoomSmall from "../assets/villas/pelagos/dining-room-800.webp";
import pelagosKitchenStaircase from "../assets/villas/pelagos/kitchen-staircase.webp";
import pelagosKitchenStaircaseSmall from "../assets/villas/pelagos/kitchen-staircase-800.webp";
import pelagosMasterBedroom from "../assets/villas/pelagos/master-bedroom.webp";
import pelagosMasterBedroomSmall from "../assets/villas/pelagos/master-bedroom-800.webp";
import pelagosBedroomBalcony from "../assets/villas/pelagos/bedroom-balcony.webp";
import pelagosBedroomBalconySmall from "../assets/villas/pelagos/bedroom-balcony-800.webp";
import pelagosBedroomTwo from "../assets/villas/pelagos/bedroom-two.webp";
import pelagosBedroomTwoSmall from "../assets/villas/pelagos/bedroom-two-800.webp";
import pelagosBathroom from "../assets/villas/pelagos/bathroom.webp";
import pelagosBathroomSmall from "../assets/villas/pelagos/bathroom-800.webp";
import pelagosTerraceSeaView from "../assets/villas/pelagos/terrace-sea-view.webp";
import pelagosTerraceSeaViewSmall from "../assets/villas/pelagos/terrace-sea-view-600.webp";

// Villa Ourania (Agios Lazaros).
import ouraniaCoverPoolSea from "../assets/villas/ourania/cover-pool-sea.webp";
import ouraniaCoverPoolSeaSmall from "../assets/villas/ourania/cover-pool-sea-800.webp";
import ouraniaPoolSpaView from "../assets/villas/ourania/pool-spa-view.webp";
import ouraniaPoolSpaViewSmall from "../assets/villas/ourania/pool-spa-view-800.webp";
import ouraniaPoolPergola from "../assets/villas/ourania/pool-pergola.webp";
import ouraniaPoolPergolaSmall from "../assets/villas/ourania/pool-pergola-800.webp";
import ouraniaPoolDusk from "../assets/villas/ourania/pool-dusk.webp";
import ouraniaPoolDuskSmall from "../assets/villas/ourania/pool-dusk-800.webp";
import ouraniaArchLounge from "../assets/villas/ourania/arch-lounge.webp";
import ouraniaArchLoungeSmall from "../assets/villas/ourania/arch-lounge-800.webp";
import ouraniaPergolaLounge from "../assets/villas/ourania/pergola-lounge.webp";
import ouraniaPergolaLoungeSmall from "../assets/villas/ourania/pergola-lounge-800.webp";
import ouraniaOutdoorDining from "../assets/villas/ourania/outdoor-dining.webp";
import ouraniaOutdoorDiningSmall from "../assets/villas/ourania/outdoor-dining-800.webp";
import ouraniaPergolaNight from "../assets/villas/ourania/pergola-night.webp";
import ouraniaPergolaNightSmall from "../assets/villas/ourania/pergola-night-800.webp";
import ouraniaLivingRoom from "../assets/villas/ourania/living-room.webp";
import ouraniaLivingRoomSmall from "../assets/villas/ourania/living-room-800.webp";
import ouraniaLoungeFireplace from "../assets/villas/ourania/lounge-fireplace.webp";
import ouraniaLoungeFireplaceSmall from "../assets/villas/ourania/lounge-fireplace-800.webp";
import ouraniaBedroomSeaView from "../assets/villas/ourania/bedroom-sea-view.webp";
import ouraniaBedroomSeaViewSmall from "../assets/villas/ourania/bedroom-sea-view-800.webp";
import ouraniaBedroomTwo from "../assets/villas/ourania/bedroom-two.webp";
import ouraniaBedroomTwoSmall from "../assets/villas/ourania/bedroom-two-800.webp";
import ouraniaBedroomThree from "../assets/villas/ourania/bedroom-three.webp";
import ouraniaBedroomThreeSmall from "../assets/villas/ourania/bedroom-three-800.webp";
import ouraniaBathroom from "../assets/villas/ourania/bathroom.webp";
import ouraniaBathroomSmall from "../assets/villas/ourania/bathroom-800.webp";
import ouraniaVillaAboveBay from "../assets/villas/ourania/villa-above-bay.webp";
import ouraniaVillaAboveBaySmall from "../assets/villas/ourania/villa-above-bay-600.webp";

// Villa Ktima (Kalafatis).
import ktimaCoverPoolVilla from "../assets/villas/ktima/cover-pool-villa.webp";
import ktimaCoverPoolVillaSmall from "../assets/villas/ktima/cover-pool-villa-800.webp";
import ktimaPoolSeaView from "../assets/villas/ktima/pool-sea-view.webp";
import ktimaPoolSeaViewSmall from "../assets/villas/ktima/pool-sea-view-800.webp";
import ktimaPoolLoungers from "../assets/villas/ktima/pool-loungers.webp";
import ktimaPoolLoungersSmall from "../assets/villas/ktima/pool-loungers-800.webp";
import ktimaEstateLawn from "../assets/villas/ktima/estate-lawn.webp";
import ktimaEstateLawnSmall from "../assets/villas/ktima/estate-lawn-800.webp";
import ktimaJacuzzi from "../assets/villas/ktima/jacuzzi.webp";
import ktimaJacuzziSmall from "../assets/villas/ktima/jacuzzi-800.webp";
import ktimaPoolBar from "../assets/villas/ktima/pool-bar.webp";
import ktimaPoolBarSmall from "../assets/villas/ktima/pool-bar-800.webp";
import ktimaPergolaLounge from "../assets/villas/ktima/pergola-lounge.webp";
import ktimaPergolaLoungeSmall from "../assets/villas/ktima/pergola-lounge-800.webp";
import ktimaDiningHall from "../assets/villas/ktima/dining-hall.webp";
import ktimaDiningHallSmall from "../assets/villas/ktima/dining-hall-800.webp";
import ktimaWhiteHouse from "../assets/villas/ktima/white-house.webp";
import ktimaWhiteHouseSmall from "../assets/villas/ktima/white-house-800.webp";
import ktimaLivingRoom from "../assets/villas/ktima/living-room.webp";
import ktimaLivingRoomSmall from "../assets/villas/ktima/living-room-800.webp";
import ktimaSuiteSeaView from "../assets/villas/ktima/suite-sea-view.webp";
import ktimaSuiteSeaViewSmall from "../assets/villas/ktima/suite-sea-view-800.webp";
import ktimaSuiteTwo from "../assets/villas/ktima/suite-two.webp";
import ktimaSuiteTwoSmall from "../assets/villas/ktima/suite-two-800.webp";
import ktimaSpaRoom from "../assets/villas/ktima/spa-room.webp";
import ktimaSpaRoomSmall from "../assets/villas/ktima/spa-room-800.webp";
import ktimaPoolNight from "../assets/villas/ktima/pool-night.webp";
import ktimaPoolNightSmall from "../assets/villas/ktima/pool-night-800.webp";
import ktimaChapel from "../assets/villas/ktima/chapel.webp";
import ktimaChapelSmall from "../assets/villas/ktima/chapel-600.webp";

// Villa Lithos (Pirgi).
import lithosCoverInfinityPool from "../assets/villas/lithos/cover-infinity-pool.webp";
import lithosCoverInfinityPoolSmall from "../assets/villas/lithos/cover-infinity-pool-800.webp";
import lithosPoolTerrace from "../assets/villas/lithos/pool-terrace.webp";
import lithosPoolTerraceSmall from "../assets/villas/lithos/pool-terrace-800.webp";
import lithosPoolPavilion from "../assets/villas/lithos/pool-pavilion.webp";
import lithosPoolPavilionSmall from "../assets/villas/lithos/pool-pavilion-800.webp";
import lithosLoungeSeaView from "../assets/villas/lithos/lounge-sea-view.webp";
import lithosLoungeSeaViewSmall from "../assets/villas/lithos/lounge-sea-view-800.webp";
import lithosPergolaLounge from "../assets/villas/lithos/pergola-lounge.webp";
import lithosPergolaLoungeSmall from "../assets/villas/lithos/pergola-lounge-800.webp";
import lithosPrivatePool from "../assets/villas/lithos/private-pool.webp";
import lithosPrivatePoolSmall from "../assets/villas/lithos/private-pool-800.webp";
import lithosGardenPools from "../assets/villas/lithos/garden-pools.webp";
import lithosGardenPoolsSmall from "../assets/villas/lithos/garden-pools-800.webp";
import lithosLivingRoom from "../assets/villas/lithos/living-room.webp";
import lithosLivingRoomSmall from "../assets/villas/lithos/living-room-800.webp";
import lithosKitchen from "../assets/villas/lithos/kitchen.webp";
import lithosKitchenSmall from "../assets/villas/lithos/kitchen-800.webp";
import lithosDiningArch from "../assets/villas/lithos/dining-arch.webp";
import lithosDiningArchSmall from "../assets/villas/lithos/dining-arch-800.webp";
import lithosMasterBedroom from "../assets/villas/lithos/master-bedroom.webp";
import lithosMasterBedroomSmall from "../assets/villas/lithos/master-bedroom-800.webp";
import lithosBedroomSeaView from "../assets/villas/lithos/bedroom-sea-view.webp";
import lithosBedroomSeaViewSmall from "../assets/villas/lithos/bedroom-sea-view-800.webp";
import lithosBathroom from "../assets/villas/lithos/bathroom.webp";
import lithosBathroomSmall from "../assets/villas/lithos/bathroom-800.webp";
import lithosSpaMassage from "../assets/villas/lithos/spa-massage.webp";
import lithosSpaMassageSmall from "../assets/villas/lithos/spa-massage-800.webp";
import lithosGym from "../assets/villas/lithos/gym.webp";
import lithosGymSmall from "../assets/villas/lithos/gym-800.webp";
import lithosTennisCourt from "../assets/villas/lithos/tennis-court.webp";
import lithosTennisCourtSmall from "../assets/villas/lithos/tennis-court-800.webp";
import lithosChapel from "../assets/villas/lithos/chapel.webp";
import lithosChapelSmall from "../assets/villas/lithos/chapel-600.webp";

// Villa Delfini (Ornos).
import delfiniCoverInfinityPool from "../assets/villas/delfini/cover-infinity-pool.webp";
import delfiniCoverInfinityPoolSmall from "../assets/villas/delfini/cover-infinity-pool-800.webp";
import delfiniPoolOrnosBay from "../assets/villas/delfini/pool-ornos-bay.webp";
import delfiniPoolOrnosBaySmall from "../assets/villas/delfini/pool-ornos-bay-800.webp";
import delfiniPoolAndVilla from "../assets/villas/delfini/pool-and-villa.webp";
import delfiniPoolAndVillaSmall from "../assets/villas/delfini/pool-and-villa-800.webp";
import delfiniPoolTerrace from "../assets/villas/delfini/pool-terrace.webp";
import delfiniPoolTerraceSmall from "../assets/villas/delfini/pool-terrace-800.webp";
import delfiniPoolSunset from "../assets/villas/delfini/pool-sunset.webp";
import delfiniPoolSunsetSmall from "../assets/villas/delfini/pool-sunset-800.webp";
import delfiniPoolDusk from "../assets/villas/delfini/pool-dusk.webp";
import delfiniPoolDuskSmall from "../assets/villas/delfini/pool-dusk-800.webp";
import delfiniPergolaLounge from "../assets/villas/delfini/pergola-lounge.webp";
import delfiniPergolaLoungeSmall from "../assets/villas/delfini/pergola-lounge-800.webp";
import delfiniPergolaDining from "../assets/villas/delfini/pergola-dining.webp";
import delfiniPergolaDiningSmall from "../assets/villas/delfini/pergola-dining-800.webp";
import delfiniBalconySeaView from "../assets/villas/delfini/balcony-sea-view.webp";
import delfiniBalconySeaViewSmall from "../assets/villas/delfini/balcony-sea-view-800.webp";
import delfiniLivingRoom from "../assets/villas/delfini/living-room.webp";
import delfiniLivingRoomSmall from "../assets/villas/delfini/living-room-800.webp";
import delfiniKitchen from "../assets/villas/delfini/kitchen.webp";
import delfiniKitchenSmall from "../assets/villas/delfini/kitchen-800.webp";
import delfiniMasterBedroom from "../assets/villas/delfini/master-bedroom.webp";
import delfiniMasterBedroomSmall from "../assets/villas/delfini/master-bedroom-800.webp";
import delfiniBedroomTwo from "../assets/villas/delfini/bedroom-two.webp";
import delfiniBedroomTwoSmall from "../assets/villas/delfini/bedroom-two-800.webp";
import delfiniBedroomThree from "../assets/villas/delfini/bedroom-three.webp";
import delfiniBedroomThreeSmall from "../assets/villas/delfini/bedroom-three-800.webp";
import delfiniBathroom from "../assets/villas/delfini/bathroom.webp";
import delfiniBathroomSmall from "../assets/villas/delfini/bathroom-800.webp";
import delfiniSunsetLoungers from "../assets/villas/delfini/sunset-loungers.webp";
import delfiniSunsetLoungersSmall from "../assets/villas/delfini/sunset-loungers-600.webp";

// Villa Erato (Agios Lazaros).
import eratoCoverInfinityPool from "../assets/villas/erato/cover-infinity-pool.webp";
import eratoCoverInfinityPoolSmall from "../assets/villas/erato/cover-infinity-pool-800.webp";
import eratoPoolTerrace from "../assets/villas/erato/pool-terrace.webp";
import eratoPoolTerraceSmall from "../assets/villas/erato/pool-terrace-800.webp";
import eratoTerracePalm from "../assets/villas/erato/terrace-palm.webp";
import eratoTerracePalmSmall from "../assets/villas/erato/terrace-palm-800.webp";
import eratoJacuzziSeaView from "../assets/villas/erato/jacuzzi-sea-view.webp";
import eratoJacuzziSeaViewSmall from "../assets/villas/erato/jacuzzi-sea-view-800.webp";
import eratoLoungeUmbrella from "../assets/villas/erato/lounge-umbrella.webp";
import eratoLoungeUmbrellaSmall from "../assets/villas/erato/lounge-umbrella-800.webp";
import eratoOutdoorLounge from "../assets/villas/erato/outdoor-lounge.webp";
import eratoOutdoorLoungeSmall from "../assets/villas/erato/outdoor-lounge-800.webp";
import eratoPoolDusk from "../assets/villas/erato/pool-dusk.webp";
import eratoPoolDuskSmall from "../assets/villas/erato/pool-dusk-800.webp";
import eratoTerraceDusk from "../assets/villas/erato/terrace-dusk.webp";
import eratoTerraceDuskSmall from "../assets/villas/erato/terrace-dusk-800.webp";
import eratoLivingRoom from "../assets/villas/erato/living-room.webp";
import eratoLivingRoomSmall from "../assets/villas/erato/living-room-800.webp";
import eratoDiningKitchen from "../assets/villas/erato/dining-kitchen.webp";
import eratoDiningKitchenSmall from "../assets/villas/erato/dining-kitchen-800.webp";
import eratoMasterBedroom from "../assets/villas/erato/master-bedroom.webp";
import eratoMasterBedroomSmall from "../assets/villas/erato/master-bedroom-800.webp";
import eratoBedroomTwo from "../assets/villas/erato/bedroom-two.webp";
import eratoBedroomTwoSmall from "../assets/villas/erato/bedroom-two-800.webp";
import eratoBedroomStoneWall from "../assets/villas/erato/bedroom-stone-wall.webp";
import eratoBedroomStoneWallSmall from "../assets/villas/erato/bedroom-stone-wall-800.webp";
import eratoBedroomPoolWindow from "../assets/villas/erato/bedroom-pool-window.webp";
import eratoBedroomPoolWindowSmall from "../assets/villas/erato/bedroom-pool-window-800.webp";
import eratoSeaViewTerrace from "../assets/villas/erato/sea-view-terrace.webp";
import eratoSeaViewTerraceSmall from "../assets/villas/erato/sea-view-terrace-600.webp";

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

const avra = {
  coverInfinityPool: withSmall(avraCoverInfinityPool, avraCoverInfinityPoolSmall, 1437, 800),
  kitchen: withSmall(avraKitchen, avraKitchenSmall, 902, 800),
  outdoorDining: withSmall(avraOutdoorDining, avraOutdoorDiningSmall, 900, 800),
  poolDusk: withSmall(avraPoolDusk, avraPoolDuskSmall, 913, 800),
  poolGarden: withSmall(avraPoolGarden, avraPoolGardenSmall, 720, 600),
  poolNight: withSmall(avraPoolNight, avraPoolNightSmall, 800, 800),
  poolTerrace: withSmall(avraPoolTerrace, avraPoolTerraceSmall, 1200, 800),
  shadedLounge: withSmall(avraShadedLounge, avraShadedLoungeSmall, 900, 800),
  suiteOne: withSmall(avraSuiteOne, avraSuiteOneSmall, 1260, 800),
  suiteSeaView: withSmall(avraSuiteSeaView, avraSuiteSeaViewSmall, 1262, 800),
  suiteTwo: withSmall(avraSuiteTwo, avraSuiteTwoSmall, 1260, 800),
  wineRoom: withSmall(avraWineRoom, avraWineRoomSmall, 1200, 800),
};

const petra = {
  bedroomOne: withSmall(petraBedroomOne, petraBedroomOneSmall, 1600, 800),
  bedroomTwo: withSmall(petraBedroomTwo, petraBedroomTwoSmall, 1600, 800),
  coverPool: withSmall(petraCoverPool, petraCoverPoolSmall, 1600, 800),
  jacuzziSeaView: withSmall(petraJacuzziSeaView, petraJacuzziSeaViewSmall, 1261, 800),
  kitchen: withSmall(petraKitchen, petraKitchenSmall, 1600, 800),
  livingRoom: withSmall(petraLivingRoom, petraLivingRoomSmall, 1600, 800),
  outdoorDining: withSmall(petraOutdoorDining, petraOutdoorDiningSmall, 1600, 800),
  poolFromAbove: withSmall(petraPoolFromAbove, petraPoolFromAboveSmall, 1000, 600),
  poolSunset: withSmall(petraPoolSunset, petraPoolSunsetSmall, 1600, 800),
  poolTerrace: withSmall(petraPoolTerrace, petraPoolTerraceSmall, 1600, 800),
  suiteJacuzzi: withSmall(petraSuiteJacuzzi, petraSuiteJacuzziSmall, 1369, 800),
  sunbedsSeaView: withSmall(petraSunbedsSeaView, petraSunbedsSeaViewSmall, 1600, 800),
  terraceDining: withSmall(petraTerraceDining, petraTerraceDiningSmall, 1291, 800),
};

const oneiro = {
  bathroom: withSmall(oneiroBathroom, oneiroBathroomSmall, 1600, 800),
  bedroomGardenView: withSmall(oneiroBedroomGardenView, oneiroBedroomGardenViewSmall, 1600, 800),
  bedroomStoneWall: withSmall(oneiroBedroomStoneWall, oneiroBedroomStoneWallSmall, 1600, 800),
  coverPoolDusk: withSmall(oneiroCoverPoolDusk, oneiroCoverPoolDuskSmall, 1600, 800),
  diningRoom: withSmall(oneiroDiningRoom, oneiroDiningRoomSmall, 1600, 800),
  hangingChairs: withSmall(oneiroHangingChairs, oneiroHangingChairsSmall, 1600, 800),
  livingRoomSeaView: withSmall(oneiroLivingRoomSeaView, oneiroLivingRoomSeaViewSmall, 1600, 800),
  livingRoomStoneWall: withSmall(oneiroLivingRoomStoneWall, oneiroLivingRoomStoneWallSmall, 1600, 800),
  outdoorLounge: withSmall(oneiroOutdoorLounge, oneiroOutdoorLoungeSmall, 1600, 800),
  shadedLoungeSeaView: withSmall(oneiroShadedLoungeSeaView, oneiroShadedLoungeSeaViewSmall, 1600, 800),
  villaFromAbove: withSmall(oneiroVillaFromAbove, oneiroVillaFromAboveSmall, 1000, 600),
};

const thea = {
  bathroom: withSmall(theaBathroom, theaBathroomSmall, 983, 800),
  bedroomSeaView: withSmall(theaBedroomSeaView, theaBedroomSeaViewSmall, 966, 800),
  coverInfinityPool: withSmall(theaCoverInfinityPool, theaCoverInfinityPoolSmall, 1439, 800),
  diningRoom: withSmall(theaDiningRoom, theaDiningRoomSmall, 883, 800),
  gardenSeaView: withSmall(theaGardenSeaView, theaGardenSeaViewSmall, 898, 800),
  guestHouseBedroom: withSmall(theaGuestHouseBedroom, theaGuestHouseBedroomSmall, 898, 800),
  livingRoom: withSmall(theaLivingRoom, theaLivingRoomSmall, 812, 800),
  masterBedroom: withSmall(theaMasterBedroom, theaMasterBedroomSmall, 898, 800),
  outdoorDining: withSmall(theaOutdoorDining, theaOutdoorDiningSmall, 909, 800),
  pergolaLoungeDusk: withSmall(theaPergolaLoungeDusk, theaPergolaLoungeDuskSmall, 898, 800),
  poolDusk: withSmall(theaPoolDusk, theaPoolDuskSmall, 812, 800),
  poolFromAbove: withSmall(theaPoolFromAbove, theaPoolFromAboveSmall, 601, 600),
};

const kyanos = {
  bathroom: withSmall(kyanosBathroom, kyanosBathroomSmall, 1017, 800),
  bedroomSeaView: withSmall(kyanosBedroomSeaView, kyanosBedroomSeaViewSmall, 1600, 800),
  bedroomTerraceDoor: withSmall(kyanosBedroomTerraceDoor, kyanosBedroomTerraceDoorSmall, 1016, 800),
  courtyardLounge: withSmall(kyanosCourtyardLounge, kyanosCourtyardLoungeSmall, 1600, 800),
  coverInfinityPool: withSmall(kyanosCoverInfinityPool, kyanosCoverInfinityPoolSmall, 1600, 800),
  garden: withSmall(kyanosGarden, kyanosGardenSmall, 1600, 800),
  infinityPool: withSmall(kyanosInfinityPool, kyanosInfinityPoolSmall, 1292, 800),
  kitchen: withSmall(kyanosKitchen, kyanosKitchenSmall, 1600, 800),
  kitchenIsland: withSmall(kyanosKitchenIsland, kyanosKitchenIslandSmall, 1600, 800),
  poolFromAbove: withSmall(kyanosPoolFromAbove, kyanosPoolFromAboveSmall, 1000, 600),
  poolTerrace: withSmall(kyanosPoolTerrace, kyanosPoolTerraceSmall, 1600, 800),
  shadedTerrace: withSmall(kyanosShadedTerrace, kyanosShadedTerraceSmall, 1600, 800),
  villaNight: withSmall(kyanosVillaNight, kyanosVillaNightSmall, 1600, 800),
};

const fos = {
  archSunset: withSmall(fosArchSunset, fosArchSunsetSmall, 1000, 600),
  bathroom: withSmall(fosBathroom, fosBathroomSmall, 1246, 800),
  bedroomBlueShutters: withSmall(fosBedroomBlueShutters, fosBedroomBlueShuttersSmall, 1600, 800),
  bedroomOne: withSmall(fosBedroomOne, fosBedroomOneSmall, 1600, 800),
  coverVillaPool: withSmall(fosCoverVillaPool, fosCoverVillaPoolSmall, 1600, 800),
  guestHouseLiving: withSmall(fosGuestHouseLiving, fosGuestHouseLivingSmall, 1600, 800),
  kitchen: withSmall(fosKitchen, fosKitchenSmall, 1600, 800),
  livingRoom: withSmall(fosLivingRoom, fosLivingRoomSmall, 1600, 800),
  outdoorLounge: withSmall(fosOutdoorLounge, fosOutdoorLoungeSmall, 1417, 800),
  pergolaDining: withSmall(fosPergolaDining, fosPergolaDiningSmall, 1600, 800),
  poolSeaView: withSmall(fosPoolSeaView, fosPoolSeaViewSmall, 1600, 800),
  poolSunbeds: withSmall(fosPoolSunbeds, fosPoolSunbedsSmall, 1600, 800),
  sunsetTerrace: withSmall(fosSunsetTerrace, fosSunsetTerraceSmall, 1600, 800),
};

const aelia = {
  bathroom: withSmall(aeliaBathroom, aeliaBathroomSmall, 899, 800),
  coverPoolDusk: withSmall(aeliaCoverPoolDusk, aeliaCoverPoolDuskSmall, 1474, 800),
  diningRoom: withSmall(aeliaDiningRoom, aeliaDiningRoomSmall, 899, 800),
  infinityPool: withSmall(aeliaInfinityPool, aeliaInfinityPoolSmall, 909, 800),
  kitchen: withSmall(aeliaKitchen, aeliaKitchenSmall, 812, 800),
  livingRoom: withSmall(aeliaLivingRoom, aeliaLivingRoomSmall, 865, 800),
  outdoorDining: withSmall(aeliaOutdoorDining, aeliaOutdoorDiningSmall, 1439, 800),
  suiteOne: withSmall(aeliaSuiteOne, aeliaSuiteOneSmall, 832, 800),
  suiteThree: withSmall(aeliaSuiteThree, aeliaSuiteThreeSmall, 898, 800),
  suiteTwo: withSmall(aeliaSuiteTwo, aeliaSuiteTwoSmall, 1440, 800),
  terraceUmbrella: withSmall(aeliaTerraceUmbrella, aeliaTerraceUmbrellaSmall, 1471, 800),
  villaFromAbove: withSmall(aeliaVillaFromAbove, aeliaVillaFromAboveSmall, 802, 600),
};

const esperos = {
  coverPergolaSunset: withSmall(esperosCoverPergolaSunset, esperosCoverPergolaSunsetSmall, 1600, 800),
  heatedPool: withSmall(esperosHeatedPool, esperosHeatedPoolSmall, 1600, 800),
  poolSeaView: withSmall(esperosPoolSeaView, esperosPoolSeaViewSmall, 1600, 800),
  outdoorDining: withSmall(esperosOutdoorDining, esperosOutdoorDiningSmall, 1600, 800),
  pergolaLounge: withSmall(esperosPergolaLounge, esperosPergolaLoungeSmall, 1600, 800),
  privateBeach: withSmall(esperosPrivateBeach, esperosPrivateBeachSmall, 1600, 800),
  livingRoom: withSmall(esperosLivingRoom, esperosLivingRoomSmall, 1228, 800),
  kitchen: withSmall(esperosKitchen, esperosKitchenSmall, 1600, 800),
  masterBedroom: withSmall(esperosMasterBedroom, esperosMasterBedroomSmall, 1600, 800),
  bedroomSeaView: withSmall(esperosBedroomSeaView, esperosBedroomSeaViewSmall, 1600, 800),
  bathroom: withSmall(esperosBathroom, esperosBathroomSmall, 1600, 800),
  gym: withSmall(esperosGym, esperosGymSmall, 1600, 800),
  poolNight: withSmall(esperosPoolNight, esperosPoolNightSmall, 1600, 800),
  jacuzziSunset: withSmall(esperosJacuzziSunset, esperosJacuzziSunsetSmall, 1000, 600),
};

const asteri = {
  coverPool: withSmall(asteriCoverPool, asteriCoverPoolSmall, 1600, 800),
  poolGarden: withSmall(asteriPoolGarden, asteriPoolGardenSmall, 1600, 800),
  poolSunbeds: withSmall(asteriPoolSunbeds, asteriPoolSunbedsSmall, 1600, 800),
  terraceSeaView: withSmall(asteriTerraceSeaView, asteriTerraceSeaViewSmall, 1600, 800),
  pergolaLounge: withSmall(asteriPergolaLounge, asteriPergolaLoungeSmall, 1600, 800),
  outdoorDining: withSmall(asteriOutdoorDining, asteriOutdoorDiningSmall, 1600, 800),
  livingRoom: withSmall(asteriLivingRoom, asteriLivingRoomSmall, 1600, 800),
  diningRoom: withSmall(asteriDiningRoom, asteriDiningRoomSmall, 1600, 800),
  kitchen: withSmall(asteriKitchen, asteriKitchenSmall, 1600, 800),
  masterBedroom: withSmall(asteriMasterBedroom, asteriMasterBedroomSmall, 1600, 800),
  bedroomTwo: withSmall(asteriBedroomTwo, asteriBedroomTwoSmall, 1600, 800),
  bedroomThree: withSmall(asteriBedroomThree, asteriBedroomThreeSmall, 1600, 800),
  bathroom: withSmall(asteriBathroom, asteriBathroomSmall, 1600, 800),
  poolDusk: withSmall(asteriPoolDusk, asteriPoolDuskSmall, 1600, 800),
  terraceDusk: withSmall(asteriTerraceDusk, asteriTerraceDuskSmall, 1000, 600),
};

const irini = {
  coverInfinityPool: withSmall(iriniCoverInfinityPool, iriniCoverInfinityPoolSmall, 1600, 800),
  poolBayView: withSmall(iriniPoolBayView, iriniPoolBayViewSmall, 1536, 800),
  poolUmbrellas: withSmall(iriniPoolUmbrellas, iriniPoolUmbrellasSmall, 1536, 800),
  poolAndVilla: withSmall(iriniPoolAndVilla, iriniPoolAndVillaSmall, 1536, 800),
  poolsideLounge: withSmall(iriniPoolsideLounge, iriniPoolsideLoungeSmall, 1600, 800),
  livingRoom: withSmall(iriniLivingRoom, iriniLivingRoomSmall, 1600, 800),
  livingSeaView: withSmall(iriniLivingSeaView, iriniLivingSeaViewSmall, 1600, 800),
  diningKitchen: withSmall(iriniDiningKitchen, iriniDiningKitchenSmall, 1600, 800),
  masterBedroom: withSmall(iriniMasterBedroom, iriniMasterBedroomSmall, 1600, 800),
  bedroomTwo: withSmall(iriniBedroomTwo, iriniBedroomTwoSmall, 1568, 800),
  bathroom: withSmall(iriniBathroom, iriniBathroomSmall, 1552, 800),
  poolDusk: withSmall(iriniPoolDusk, iriniPoolDuskSmall, 1536, 800),
  poolFromAbove: withSmall(iriniPoolFromAbove, iriniPoolFromAboveSmall, 1000, 600),
};

const aigli = {
  coverPoolDusk: withSmall(aigliCoverPoolDusk, aigliCoverPoolDuskSmall, 1600, 800),
  poolSeaView: withSmall(aigliPoolSeaView, aigliPoolSeaViewSmall, 1600, 800),
  poolFromTerrace: withSmall(aigliPoolFromTerrace, aigliPoolFromTerraceSmall, 1600, 800),
  villaGarden: withSmall(aigliVillaGarden, aigliVillaGardenSmall, 1600, 800),
  outdoorDining: withSmall(aigliOutdoorDining, aigliOutdoorDiningSmall, 1600, 800),
  terraceSeaView: withSmall(aigliTerraceSeaView, aigliTerraceSeaViewSmall, 1600, 800),
  livingRoom: withSmall(aigliLivingRoom, aigliLivingRoomSmall, 1600, 800),
  diningLiving: withSmall(aigliDiningLiving, aigliDiningLivingSmall, 1412, 800),
  kitchen: withSmall(aigliKitchen, aigliKitchenSmall, 1600, 800),
  masterBedroom: withSmall(aigliMasterBedroom, aigliMasterBedroomSmall, 1600, 800),
  bedroomTwo: withSmall(aigliBedroomTwo, aigliBedroomTwoSmall, 1600, 800),
  twinBedroom: withSmall(aigliTwinBedroom, aigliTwinBedroomSmall, 1600, 800),
  villaFromAbove: withSmall(aigliVillaFromAbove, aigliVillaFromAboveSmall, 1000, 600),
};

const pelagos = {
  coverInfinityPool: withSmall(pelagosCoverInfinityPool, pelagosCoverInfinityPoolSmall, 1600, 800),
  poolSunbeds: withSmall(pelagosPoolSunbeds, pelagosPoolSunbedsSmall, 1600, 800),
  poolSunset: withSmall(pelagosPoolSunset, pelagosPoolSunsetSmall, 1600, 800),
  poolDusk: withSmall(pelagosPoolDusk, pelagosPoolDuskSmall, 1600, 800),
  pergolaLounge: withSmall(pelagosPergolaLounge, pelagosPergolaLoungeSmall, 1600, 800),
  outdoorDining: withSmall(pelagosOutdoorDining, pelagosOutdoorDiningSmall, 1600, 800),
  pergolaDusk: withSmall(pelagosPergolaDusk, pelagosPergolaDuskSmall, 1600, 800),
  livingRoom: withSmall(pelagosLivingRoom, pelagosLivingRoomSmall, 1600, 800),
  diningRoom: withSmall(pelagosDiningRoom, pelagosDiningRoomSmall, 1600, 800),
  kitchenStaircase: withSmall(pelagosKitchenStaircase, pelagosKitchenStaircaseSmall, 1600, 800),
  masterBedroom: withSmall(pelagosMasterBedroom, pelagosMasterBedroomSmall, 1600, 800),
  bedroomBalcony: withSmall(pelagosBedroomBalcony, pelagosBedroomBalconySmall, 1600, 800),
  bedroomTwo: withSmall(pelagosBedroomTwo, pelagosBedroomTwoSmall, 952, 800),
  bathroom: withSmall(pelagosBathroom, pelagosBathroomSmall, 1600, 800),
  terraceSeaView: withSmall(pelagosTerraceSeaView, pelagosTerraceSeaViewSmall, 1000, 600),
};

const ourania = {
  coverPoolSea: withSmall(ouraniaCoverPoolSea, ouraniaCoverPoolSeaSmall, 1600, 800),
  poolSpaView: withSmall(ouraniaPoolSpaView, ouraniaPoolSpaViewSmall, 1600, 800),
  poolPergola: withSmall(ouraniaPoolPergola, ouraniaPoolPergolaSmall, 1600, 800),
  poolDusk: withSmall(ouraniaPoolDusk, ouraniaPoolDuskSmall, 1600, 800),
  archLounge: withSmall(ouraniaArchLounge, ouraniaArchLoungeSmall, 1600, 800),
  pergolaLounge: withSmall(ouraniaPergolaLounge, ouraniaPergolaLoungeSmall, 1600, 800),
  outdoorDining: withSmall(ouraniaOutdoorDining, ouraniaOutdoorDiningSmall, 1600, 800),
  pergolaNight: withSmall(ouraniaPergolaNight, ouraniaPergolaNightSmall, 1600, 800),
  livingRoom: withSmall(ouraniaLivingRoom, ouraniaLivingRoomSmall, 1600, 800),
  loungeFireplace: withSmall(ouraniaLoungeFireplace, ouraniaLoungeFireplaceSmall, 1600, 800),
  bedroomSeaView: withSmall(ouraniaBedroomSeaView, ouraniaBedroomSeaViewSmall, 1600, 800),
  bedroomTwo: withSmall(ouraniaBedroomTwo, ouraniaBedroomTwoSmall, 1600, 800),
  bedroomThree: withSmall(ouraniaBedroomThree, ouraniaBedroomThreeSmall, 1600, 800),
  bathroom: withSmall(ouraniaBathroom, ouraniaBathroomSmall, 1600, 800),
  villaAboveBay: withSmall(ouraniaVillaAboveBay, ouraniaVillaAboveBaySmall, 1000, 600),
};

const ktima = {
  coverPoolVilla: withSmall(ktimaCoverPoolVilla, ktimaCoverPoolVillaSmall, 1600, 800),
  poolSeaView: withSmall(ktimaPoolSeaView, ktimaPoolSeaViewSmall, 1600, 800),
  poolLoungers: withSmall(ktimaPoolLoungers, ktimaPoolLoungersSmall, 1600, 800),
  estateLawn: withSmall(ktimaEstateLawn, ktimaEstateLawnSmall, 1600, 800),
  jacuzzi: withSmall(ktimaJacuzzi, ktimaJacuzziSmall, 1600, 800),
  poolBar: withSmall(ktimaPoolBar, ktimaPoolBarSmall, 1411, 800),
  pergolaLounge: withSmall(ktimaPergolaLounge, ktimaPergolaLoungeSmall, 1411, 800),
  diningHall: withSmall(ktimaDiningHall, ktimaDiningHallSmall, 1395, 800),
  whiteHouse: withSmall(ktimaWhiteHouse, ktimaWhiteHouseSmall, 1600, 800),
  livingRoom: withSmall(ktimaLivingRoom, ktimaLivingRoomSmall, 1412, 800),
  suiteSeaView: withSmall(ktimaSuiteSeaView, ktimaSuiteSeaViewSmall, 1600, 800),
  suiteTwo: withSmall(ktimaSuiteTwo, ktimaSuiteTwoSmall, 1600, 800),
  spaRoom: withSmall(ktimaSpaRoom, ktimaSpaRoomSmall, 1121, 800),
  poolNight: withSmall(ktimaPoolNight, ktimaPoolNightSmall, 1600, 800),
  chapel: withSmall(ktimaChapel, ktimaChapelSmall, 1000, 600),
};

const lithos = {
  coverInfinityPool: withSmall(lithosCoverInfinityPool, lithosCoverInfinityPoolSmall, 1600, 800),
  poolTerrace: withSmall(lithosPoolTerrace, lithosPoolTerraceSmall, 1600, 800),
  poolPavilion: withSmall(lithosPoolPavilion, lithosPoolPavilionSmall, 1600, 800),
  loungeSeaView: withSmall(lithosLoungeSeaView, lithosLoungeSeaViewSmall, 1600, 800),
  pergolaLounge: withSmall(lithosPergolaLounge, lithosPergolaLoungeSmall, 1600, 800),
  privatePool: withSmall(lithosPrivatePool, lithosPrivatePoolSmall, 1600, 800),
  gardenPools: withSmall(lithosGardenPools, lithosGardenPoolsSmall, 1600, 800),
  livingRoom: withSmall(lithosLivingRoom, lithosLivingRoomSmall, 1600, 800),
  kitchen: withSmall(lithosKitchen, lithosKitchenSmall, 1210, 800),
  diningArch: withSmall(lithosDiningArch, lithosDiningArchSmall, 1178, 800),
  masterBedroom: withSmall(lithosMasterBedroom, lithosMasterBedroomSmall, 1600, 800),
  bedroomSeaView: withSmall(lithosBedroomSeaView, lithosBedroomSeaViewSmall, 1600, 800),
  bathroom: withSmall(lithosBathroom, lithosBathroomSmall, 1600, 800),
  spaMassage: withSmall(lithosSpaMassage, lithosSpaMassageSmall, 1600, 800),
  gym: withSmall(lithosGym, lithosGymSmall, 1326, 800),
  tennisCourt: withSmall(lithosTennisCourt, lithosTennisCourtSmall, 1322, 800),
  chapel: withSmall(lithosChapel, lithosChapelSmall, 1000, 600),
};

const delfini = {
  coverInfinityPool: withSmall(delfiniCoverInfinityPool, delfiniCoverInfinityPoolSmall, 1600, 800),
  poolOrnosBay: withSmall(delfiniPoolOrnosBay, delfiniPoolOrnosBaySmall, 1600, 800),
  poolAndVilla: withSmall(delfiniPoolAndVilla, delfiniPoolAndVillaSmall, 1600, 800),
  poolTerrace: withSmall(delfiniPoolTerrace, delfiniPoolTerraceSmall, 1600, 800),
  poolSunset: withSmall(delfiniPoolSunset, delfiniPoolSunsetSmall, 1600, 800),
  poolDusk: withSmall(delfiniPoolDusk, delfiniPoolDuskSmall, 1600, 800),
  pergolaLounge: withSmall(delfiniPergolaLounge, delfiniPergolaLoungeSmall, 1600, 800),
  pergolaDining: withSmall(delfiniPergolaDining, delfiniPergolaDiningSmall, 1600, 800),
  balconySeaView: withSmall(delfiniBalconySeaView, delfiniBalconySeaViewSmall, 1600, 800),
  livingRoom: withSmall(delfiniLivingRoom, delfiniLivingRoomSmall, 1600, 800),
  kitchen: withSmall(delfiniKitchen, delfiniKitchenSmall, 1600, 800),
  masterBedroom: withSmall(delfiniMasterBedroom, delfiniMasterBedroomSmall, 1600, 800),
  bedroomTwo: withSmall(delfiniBedroomTwo, delfiniBedroomTwoSmall, 1600, 800),
  bedroomThree: withSmall(delfiniBedroomThree, delfiniBedroomThreeSmall, 1600, 800),
  bathroom: withSmall(delfiniBathroom, delfiniBathroomSmall, 1600, 800),
  sunsetLoungers: withSmall(delfiniSunsetLoungers, delfiniSunsetLoungersSmall, 1000, 600),
};

const erato = {
  coverInfinityPool: withSmall(eratoCoverInfinityPool, eratoCoverInfinityPoolSmall, 1600, 800),
  poolTerrace: withSmall(eratoPoolTerrace, eratoPoolTerraceSmall, 1600, 800),
  terracePalm: withSmall(eratoTerracePalm, eratoTerracePalmSmall, 1600, 800),
  jacuzziSeaView: withSmall(eratoJacuzziSeaView, eratoJacuzziSeaViewSmall, 1022, 800),
  loungeUmbrella: withSmall(eratoLoungeUmbrella, eratoLoungeUmbrellaSmall, 1600, 800),
  outdoorLounge: withSmall(eratoOutdoorLounge, eratoOutdoorLoungeSmall, 1600, 800),
  poolDusk: withSmall(eratoPoolDusk, eratoPoolDuskSmall, 1600, 800),
  terraceDusk: withSmall(eratoTerraceDusk, eratoTerraceDuskSmall, 1600, 800),
  livingRoom: withSmall(eratoLivingRoom, eratoLivingRoomSmall, 1600, 800),
  diningKitchen: withSmall(eratoDiningKitchen, eratoDiningKitchenSmall, 931, 800),
  masterBedroom: withSmall(eratoMasterBedroom, eratoMasterBedroomSmall, 1600, 800),
  bedroomTwo: withSmall(eratoBedroomTwo, eratoBedroomTwoSmall, 1600, 800),
  bedroomStoneWall: withSmall(eratoBedroomStoneWall, eratoBedroomStoneWallSmall, 1600, 800),
  bedroomPoolWindow: withSmall(eratoBedroomPoolWindow, eratoBedroomPoolWindowSmall, 1600, 800),
  seaViewTerrace: withSmall(eratoSeaViewTerrace, eratoSeaViewTerraceSmall, 1000, 600),
};

const allVillas: Villa[] = [
  {
    slug: "villa-erato",
    name: "Villa Erato",
    area: "Agios Lazaros",
    bedrooms: 4,
    bathrooms: 4,
    wcs: 1,
    guests: 8,
    summary:
      "A newly renovated four-bedroom villa in Agios Lazaros with an infinity pool, a jacuzzi and sweeping views over Psarou, Paraga and the islands of Paros and Naxos. Sleeps 8.",
    description: [
      "High on the hill of Agios Lazaros, Villa Erato has one of the most spectacular views in Mykonos, over the beaches of Psarou and Paraga and across the sea to Paros and Naxos. Mykonos Town is about 4 km away, and Psarou beach is a short drive.",
      "The terrace has everything for long days outside: a 30 m² infinity pool, an outdoor jacuzzi, sun loungers, a bar, a barbecue corner and a wind-protected lounge and dining area under the pergola. The villa has just been fully renovated in a modern Mykonian style, with a living room, dining area and open-plan kitchen that open straight onto the pool. Four independent en-suite bedrooms each have their own character, including one on the lower level with a window looking into the pool.",
    ],
    amenities: [
      "Infinity pool (30 m²)",
      "Outdoor jacuzzi",
      "Views over Psarou, Paraga, Paros and Naxos",
      "Outdoor bar and BBQ corner",
      "Wind-protected lounge and dining area",
      "Four en-suite bedrooms",
      "Bedroom with a window into the pool",
      "Open-plan kitchen and wine fridge",
      "Smart 4K TVs",
      "Air conditioning and Wi-Fi",
      "Bathrobes and slippers",
      "Daily light cleaning",
      "Private parking for 2 cars",
    ],
    photos: [
      erato.coverInfinityPool,
      erato.poolTerrace,
      erato.terracePalm,
      erato.jacuzziSeaView,
      erato.loungeUmbrella,
      erato.outdoorLounge,
      erato.poolDusk,
      erato.terraceDusk,
      erato.livingRoom,
      erato.diningKitchen,
      erato.masterBedroom,
      erato.bedroomTwo,
      erato.bedroomStoneWall,
      erato.bedroomPoolWindow,
    ],
    featurePhoto: erato.seaViewTerrace,
    gallery: [
      { title: "The pool and jacuzzi", photos: [erato.poolTerrace, erato.terracePalm, erato.jacuzziSeaView, erato.poolDusk] },
      { title: "Terraces", photos: [erato.loungeUmbrella, erato.outdoorLounge, erato.terraceDusk] },
      { title: "Living and kitchen", photos: [erato.livingRoom, erato.diningKitchen] },
      { title: "Bedrooms", photos: [erato.masterBedroom, erato.bedroomTwo, erato.bedroomStoneWall, erato.bedroomPoolWindow] },
    ],
  },
  {
    slug: "villa-delfini",
    name: "Villa Delfini",
    area: "Ornos",
    bedrooms: 4,
    bathrooms: 5,
    wcs: 1,
    guests: 9,
    summary:
      "A four-bedroom villa inside a gated five-star resort above Ornos Bay, with an infinity pool, a large pergola and a short walk to Ornos beach. Sleeps 9.",
    description: [
      "Villa Delfini sits inside a gated five-star resort in Ornos, with 24-hour security and wide views over Ornos Bay. The beach, its restaurants and bars are a short walk away, and Mykonos Town is about 3 km away.",
      "Outside, a 50 m² infinity pool with sunbeds runs along the terrace, beside a large pergola with an outdoor dining table, a bar, a chic lounge and table tennis. Inside are an open-plan living room and kitchen, four double en-suite bedrooms, including a super-king master and a guest suite with its own entrance, plus an extra en-suite room for an assistant or nanny.",
      "Guests can also use the resort's private beach, spa, gym, tennis court and restaurants on request, at an extra cost.",
    ],
    amenities: [
      "Gated resort with 24-hour security",
      "Infinity pool (50 m², heating on request)",
      "Views over Ornos Bay",
      "Short walk to Ornos beach",
      "Large pergola with outdoor dining and bar",
      "Outdoor lounge and table tennis",
      "Extra room for an assistant or nanny",
      "Open-plan kitchen with espresso machine",
      "Smart TVs and Bluetooth sound system",
      "Air conditioning and Wi-Fi",
      "Daily light cleaning",
      "Resort beach, spa and gym on request",
      "Private parking for 3 cars",
    ],
    photos: [
      delfini.coverInfinityPool,
      delfini.poolOrnosBay,
      delfini.poolAndVilla,
      delfini.poolTerrace,
      delfini.poolSunset,
      delfini.poolDusk,
      delfini.pergolaLounge,
      delfini.pergolaDining,
      delfini.balconySeaView,
      delfini.livingRoom,
      delfini.kitchen,
      delfini.masterBedroom,
      delfini.bedroomTwo,
      delfini.bedroomThree,
      delfini.bathroom,
    ],
    featurePhoto: delfini.sunsetLoungers,
    gallery: [
      { title: "The infinity pool", photos: [delfini.poolOrnosBay, delfini.poolAndVilla, delfini.poolTerrace, delfini.poolSunset, delfini.poolDusk] },
      { title: "Terraces", photos: [delfini.pergolaLounge, delfini.pergolaDining, delfini.balconySeaView] },
      { title: "Living and kitchen", photos: [delfini.livingRoom, delfini.kitchen] },
      { title: "Bedrooms", photos: [delfini.masterBedroom, delfini.bedroomTwo, delfini.bedroomThree, delfini.bathroom] },
    ],
  },
  {
    slug: "villa-ktima",
    name: "Villa Ktima",
    area: "Kalafatis",
    bedrooms: 9,
    bathrooms: 11,
    guests: 18,
    summary:
      "A private estate in Kalafatis with two houses, a 250 m² heated infinity pool, three heated jacuzzis, a spa, a chapel and an in-house team. Sleeps 18.",
    description: [
      "Set among the quiet fields of Kalafatis, a 10-minute walk from the beach and about 6 km from Mykonos Town, Villa Ktima is a full private estate: a Mediterranean garden, open views to the sea and an impressive 250 m² lake-shaped heated infinity pool at its heart.",
      "Nine double rooms are shared between two houses. The White House has four suites, including a honeymoon suite with its own terrace and heated jacuzzi, and the Stone House has two suites and three bedrooms, with its own kitchen, living room and BBQ veranda. Around them are two pool bars, sheltered dining areas, a wine cellar, a spa room, a gym, yoga and massage spaces, a chapel and even a helipad.",
      "Days start with a signature breakfast, and an in-house team looks after daily housekeeping, turndown and night security. Private chefs, a sommelier, spa treatments, yacht and helicopter trips can all be arranged.",
    ],
    amenities: [
      "250 m² heated infinity pool",
      "Three heated jacuzzis",
      "Two houses with nine double rooms",
      "Two pool bars",
      "Sheltered dining areas and two BBQ spots",
      "Wine cellar",
      "Spa room, gym, yoga and massage spaces",
      "Chapel and helipad",
      "Daily breakfast and welcome hamper",
      "Daily maid and turndown service",
      "Night security",
      "Parking for 20 cars",
    ],
    photos: [
      ktima.coverPoolVilla,
      ktima.poolSeaView,
      ktima.poolLoungers,
      ktima.estateLawn,
      ktima.jacuzzi,
      ktima.poolNight,
      ktima.poolBar,
      ktima.pergolaLounge,
      ktima.diningHall,
      ktima.whiteHouse,
      ktima.livingRoom,
      ktima.suiteSeaView,
      ktima.suiteTwo,
      ktima.spaRoom,
    ],
    featurePhoto: ktima.chapel,
    gallery: [
      { title: "The pool and gardens", photos: [ktima.poolSeaView, ktima.poolLoungers, ktima.estateLawn, ktima.jacuzzi, ktima.poolNight] },
      { title: "Bars, lounges and dining", photos: [ktima.poolBar, ktima.pergolaLounge, ktima.diningHall] },
      { title: "The houses and suites", photos: [ktima.whiteHouse, ktima.livingRoom, ktima.suiteSeaView, ktima.suiteTwo] },
      { title: "Wellness", photos: [ktima.spaRoom] },
    ],
  },
  {
    slug: "villa-lithos",
    name: "Villa Lithos",
    area: "Pirgi",
    bedrooms: 8,
    bathrooms: 8,
    guests: 16,
    summary:
      "A brand-new 2026 estate in Pirgi with a heated infinity pool, private bedroom pools, a spa, a gym, a tennis court and a chapel. Sleeps 16.",
    description: [
      "Brand new for 2026, Villa Lithos sits on 6.5 acres in Pirgi with uninterrupted views of the Aegean, just 5 km from Mykonos Town and 3.5 km from the airport. Natural rocks and local plants run through the gardens, blending the villa into the landscape.",
      "A three-floor main house and two guest houses offer 805 m² of space, with eight king-size bedrooms, each with its own marble bathroom and many with private entrances. Some bedrooms have their own heated pools, in addition to the main heated infinity pool. Inside, the interiors feature Baxter, Riva and Fantini pieces alongside handmade Mykonian ceramics.",
      "There is a private spa with sauna and massage room, a gym, a professional tennis court, an outdoor BBQ with indoor and outdoor dining, a SONOS sound system throughout and a chapel for private ceremonies. A private chef serves breakfast daily, with a butler eight hours a day, daily housekeeping and night security included.",
    ],
    amenities: [
      "Heated infinity pool with sea views",
      "Private heated pools for some bedrooms",
      "Eight king-size bedrooms with marble bathrooms",
      "Private spa with sauna and massage room",
      "Gym and tennis court",
      "Chapel for ceremonies",
      "Outdoor BBQ with indoor and outdoor dining",
      "SONOS sound system throughout",
      "Daily breakfast by a private chef",
      "Butler service (8 hours a day)",
      "Daily housekeeping and night security",
      "Private parking and EV charger",
    ],
    photos: [
      lithos.coverInfinityPool,
      lithos.poolTerrace,
      lithos.poolPavilion,
      lithos.loungeSeaView,
      lithos.pergolaLounge,
      lithos.privatePool,
      lithos.gardenPools,
      lithos.livingRoom,
      lithos.kitchen,
      lithos.diningArch,
      lithos.masterBedroom,
      lithos.bedroomSeaView,
      lithos.bathroom,
      lithos.spaMassage,
      lithos.gym,
      lithos.tennisCourt,
    ],
    featurePhoto: lithos.chapel,
    gallery: [
      { title: "The pools", photos: [lithos.poolTerrace, lithos.poolPavilion, lithos.privatePool, lithos.gardenPools] },
      { title: "Terraces", photos: [lithos.loungeSeaView, lithos.pergolaLounge] },
      { title: "Living and dining", photos: [lithos.livingRoom, lithos.kitchen, lithos.diningArch] },
      { title: "Bedrooms", photos: [lithos.masterBedroom, lithos.bedroomSeaView, lithos.bathroom] },
      { title: "Spa, gym and tennis", photos: [lithos.spaMassage, lithos.gym, lithos.tennisCourt] },
    ],
  },
  {
    slug: "villa-aigli",
    name: "Villa Aigli",
    area: "Kalafatis",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    summary:
      "A bright Cycladic villa near Kalafatis beach with a private pool with hydromassage, a wind-protected dining terrace and Aegean views. Sleeps 6.",
    description: [
      "Villa Aigli sits in Kalafatis, on the south-east tip of Mykonos, close to the beaches of Kalafatis, Agia Anna and Kalo Livadi and about 6 km from Mykonos Town. It shares a 4,700 m² plot with one neighbouring villa, yet each has its own privacy and entrance.",
      "Cycladic architecture meets clean, minimal interiors. The 42 m² private pool with hydromassage is surrounded by gardens, sunbeds and outdoor showers, while a stone pergola shelters a wind-protected dining area and bar. Inside, the living and dining room looks out to sea, with two queen-size bedrooms and a twin room. An extra single room with its own entrance is available for staff on request.",
    ],
    amenities: [
      "Private pool (42 m²) with hydromassage",
      "Aegean sea views",
      "Wind-protected outdoor dining and bar",
      "Shaded pergola lounge",
      "Sunbeds and outdoor showers",
      "Fully equipped kitchen",
      "Smart 4K TVs",
      "Air conditioning and Wi-Fi",
      "Bathrobes and slippers",
      "Alarm and security cameras",
      "Daily light cleaning",
      "Private parking for 4 cars",
    ],
    photos: [
      aigli.coverPoolDusk,
      aigli.poolSeaView,
      aigli.poolFromTerrace,
      aigli.villaGarden,
      aigli.outdoorDining,
      aigli.terraceSeaView,
      aigli.livingRoom,
      aigli.diningLiving,
      aigli.kitchen,
      aigli.masterBedroom,
      aigli.bedroomTwo,
      aigli.twinBedroom,
    ],
    featurePhoto: aigli.villaFromAbove,
    gallery: [
      { title: "The pool and gardens", photos: [aigli.poolSeaView, aigli.poolFromTerrace, aigli.villaGarden] },
      { title: "Terraces", photos: [aigli.outdoorDining, aigli.terraceSeaView] },
      { title: "Living and kitchen", photos: [aigli.livingRoom, aigli.diningLiving, aigli.kitchen] },
      { title: "Bedrooms", photos: [aigli.masterBedroom, aigli.bedroomTwo, aigli.twinBedroom] },
    ],
  },
  {
    slug: "villa-pelagos",
    name: "Villa Pelagos",
    area: "Super Paradise",
    bedrooms: 6,
    bathrooms: 6,
    wcs: 1,
    guests: 11,
    summary:
      "A new six-bedroom villa just 150 m from Super Paradise beach, with an infinity pool, terraces on three levels and panoramic views of the bay. Sleeps 11.",
    description: [
      "Villa Pelagos looks straight out over the famous Super Paradise bay, only 150 metres from the beach and its well-known beach bars and restaurants. The villa is sheltered from the north winds, so its terraces stay calm on breezy days.",
      "Newly built in a Cycladic style with a modern edge, the house opens from its open-plan living room and kitchen onto sea-view terraces and an infinity pool, with lounge and dining areas spread over three levels. On the first floor are four king-size bedrooms and a single room, and the second floor holds the master bedroom with its own terrace and views. Every bedroom has its own bathroom.",
    ],
    amenities: [
      "150 m from Super Paradise beach",
      "Infinity pool with sea view",
      "Panoramic views of Super Paradise bay",
      "Wind-protected outdoor lounge and dining",
      "Terraces on three levels",
      "Master suite with private terrace",
      "Open-plan kitchen with espresso machine",
      "Smart 4K TVs",
      "Air conditioning and Wi-Fi",
      "Washing machine and dryer",
      "Daily light cleaning",
      "Private parking for 5 cars",
    ],
    photos: [
      pelagos.coverInfinityPool,
      pelagos.poolSunbeds,
      pelagos.poolSunset,
      pelagos.poolDusk,
      pelagos.pergolaLounge,
      pelagos.outdoorDining,
      pelagos.pergolaDusk,
      pelagos.livingRoom,
      pelagos.diningRoom,
      pelagos.kitchenStaircase,
      pelagos.masterBedroom,
      pelagos.bedroomBalcony,
      pelagos.bedroomTwo,
      pelagos.bathroom,
    ],
    featurePhoto: pelagos.terraceSeaView,
    gallery: [
      { title: "The infinity pool", photos: [pelagos.poolSunbeds, pelagos.poolSunset, pelagos.poolDusk] },
      { title: "Terraces", photos: [pelagos.pergolaLounge, pelagos.outdoorDining, pelagos.pergolaDusk] },
      { title: "Living and kitchen", photos: [pelagos.livingRoom, pelagos.diningRoom, pelagos.kitchenStaircase] },
      { title: "Bedrooms", photos: [pelagos.masterBedroom, pelagos.bedroomBalcony, pelagos.bedroomTwo, pelagos.bathroom] },
    ],
  },
  {
    slug: "villa-ourania",
    name: "Villa Ourania",
    area: "Agios Lazaros",
    bedrooms: 7,
    bathrooms: 7,
    wcs: 1,
    guests: 14,
    summary:
      "A seven-bedroom Cycladic villa above Psarou, with a private pool, a sea-view spa pool and shaded terraces, 10 minutes from Psarou beach. Sleeps 14.",
    description: [
      "Villa Ourania sits in Agios Lazaros, one of the most sought-after areas of Mykonos, overlooking Psarou bay and the Aegean. Mykonos Town is about 4 km away, and Psarou, Platis Gialos, Ornos and Paraga are all close by.",
      "The 350 m² villa is spread over a two-level main house and two independent guest houses, with seven en-suite double bedrooms in all. At the back, an 11 x 6 m pool with sunbeds is a private spot to sunbathe, while at the front a spa pool with hydromassage looks out over Psarou. Shaded pergolas hold several lounge and dining areas, a BBQ and a wind-protected outdoor table, and inside there is a living room with a fireplace, a dining area and a fully equipped kitchen.",
    ],
    amenities: [
      "Private pool (11 x 6 m)",
      "Spa pool with hydromassage and sea view",
      "Views over Psarou bay",
      "Two independent guest houses",
      "Shaded pergolas with lounges and dining",
      "Outdoor BBQ",
      "Living room with fireplace",
      "Fully equipped kitchen",
      "Sound system and smart TVs",
      "Air conditioning and Wi-Fi",
      "Daily light cleaning",
      "Private parking for 3 cars",
    ],
    photos: [
      ourania.coverPoolSea,
      ourania.poolSpaView,
      ourania.poolPergola,
      ourania.poolDusk,
      ourania.archLounge,
      ourania.pergolaLounge,
      ourania.outdoorDining,
      ourania.pergolaNight,
      ourania.livingRoom,
      ourania.loungeFireplace,
      ourania.bedroomSeaView,
      ourania.bedroomTwo,
      ourania.bedroomThree,
      ourania.bathroom,
    ],
    featurePhoto: ourania.villaAboveBay,
    gallery: [
      { title: "The pools", photos: [ourania.poolSpaView, ourania.poolPergola, ourania.poolDusk] },
      { title: "Terraces", photos: [ourania.archLounge, ourania.pergolaLounge, ourania.outdoorDining, ourania.pergolaNight] },
      { title: "Living", photos: [ourania.livingRoom, ourania.loungeFireplace] },
      { title: "Bedrooms", photos: [ourania.bedroomSeaView, ourania.bedroomTwo, ourania.bedroomThree, ourania.bathroom] },
    ],
  },
  {
    slug: "villa-esperos",
    name: "Villa Esperos",
    area: "Kanalia",
    bedrooms: 4,
    bathrooms: 6,
    guests: 8,
    summary:
      "A 2023 clifftop villa in Kanalia with its own small private beach, an 80 m² marble pool, a jacuzzi and sunset views over Delos and Tinos. Sleeps 8.",
    description: [
      "Set on a southwest-facing cliff in Kanalia, Villa Esperos was completed in 2023 and looks out over the Aegean to Delos, Rhenia and Tinos. Below the villa, steps lead down to its own small private beach, a rare thing in Mykonos, while Mykonos Town is just under 5 km away.",
      "Whitewashed walls, natural stone and wooden pergolas frame wide terraces made for long lunches and slow sunsets. The 80 m² marble pool sits right at the edge of the view, with a jacuzzi, sunbeds, an outdoor kitchen with BBQ and a dining table under the pergola. Inside are four en-suite bedrooms with king-size beds, a bright living room and kitchen, a TV room, a gym and a hammam.",
    ],
    amenities: [
      "Small private beach",
      "80 m² marble pool (heating on request)",
      "Heated jacuzzi",
      "Sunset views over Delos and Tinos",
      "Outdoor kitchen with BBQ",
      "Outdoor dining under the pergola",
      "Gym and hammam",
      "TV room",
      "Four en-suite bedrooms with king-size beds",
      "Air conditioning and Wi-Fi",
      "Daily light cleaning",
      "Private parking for 5 cars",
    ],
    photos: [
      esperos.coverPergolaSunset,
      esperos.poolSeaView,
      esperos.heatedPool,
      esperos.poolNight,
      esperos.privateBeach,
      esperos.outdoorDining,
      esperos.pergolaLounge,
      esperos.livingRoom,
      esperos.kitchen,
      esperos.masterBedroom,
      esperos.bedroomSeaView,
      esperos.bathroom,
      esperos.gym,
    ],
    featurePhoto: esperos.jacuzziSunset,
    gallery: [
      { title: "The pool and the private beach", photos: [esperos.poolSeaView, esperos.heatedPool, esperos.poolNight, esperos.privateBeach] },
      { title: "Terraces", photos: [esperos.outdoorDining, esperos.pergolaLounge] },
      { title: "Living and kitchen", photos: [esperos.livingRoom, esperos.kitchen] },
      { title: "Bedrooms, bathroom and gym", photos: [esperos.masterBedroom, esperos.bedroomSeaView, esperos.bathroom, esperos.gym] },
    ],
  },
  {
    slug: "villa-asteri",
    name: "Villa Asteri",
    area: "Mykonos Town",
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    summary:
      "A Cycladic villa with a bohemian touch, a short walk from the centre of Mykonos Town, with a private pool, gardens and sunset views over the town. Sleeps 8.",
    description: [
      "Villa Asteri sits in a quiet, traditional neighbourhood just above Mykonos Town, a short walk from its restaurants, bars and nightlife, yet calm enough for slow days by the pool. From above, it looks out over the sea, the town and some memorable sunsets.",
      "The 36 m² pool is on its own level at the front of the villa, surrounded by gardens, sunbeds and shady lounge areas. A wind-protected terrace under the pergola has an outdoor dining table and a BBQ. Inside, a bright living room, dining room and kitchen are dressed with bohemian, ethnic details. There are four en-suite bedrooms: two in the main house and one in each of two private guest houses.",
    ],
    amenities: [
      "Walking distance to Mykonos Town",
      "Private pool (36 m²)",
      "Sea, town and sunset views",
      "Wind-protected outdoor dining with BBQ",
      "Gardens, sunbeds and shaded lounges",
      "Two private guest houses",
      "Fully equipped kitchen",
      "Smart 4K TVs",
      "Air conditioning and Wi-Fi",
      "Apivita bath products, bathrobes and slippers",
      "Daily light cleaning",
      "Private parking for 2 cars",
    ],
    photos: [
      asteri.coverPool,
      asteri.poolGarden,
      asteri.poolSunbeds,
      asteri.terraceSeaView,
      asteri.poolDusk,
      asteri.pergolaLounge,
      asteri.outdoorDining,
      asteri.livingRoom,
      asteri.diningRoom,
      asteri.kitchen,
      asteri.masterBedroom,
      asteri.bedroomTwo,
      asteri.bedroomThree,
      asteri.bathroom,
    ],
    featurePhoto: asteri.terraceDusk,
    gallery: [
      { title: "The pool and gardens", photos: [asteri.poolGarden, asteri.poolSunbeds, asteri.terraceSeaView, asteri.poolDusk] },
      { title: "Terraces", photos: [asteri.pergolaLounge, asteri.outdoorDining] },
      { title: "Living and kitchen", photos: [asteri.livingRoom, asteri.diningRoom, asteri.kitchen] },
      { title: "Bedrooms", photos: [asteri.masterBedroom, asteri.bedroomTwo, asteri.bedroomThree, asteri.bathroom] },
    ],
  },
  {
    slug: "villa-irini",
    name: "Villa Irini",
    area: "Kalo Livadi",
    bedrooms: 3,
    bathrooms: 3,
    wcs: 1,
    guests: 6,
    summary:
      "A contemporary three-suite villa above Kalo Livadi bay, with a 100 m² infinity pool and panoramic sea views, a short walk from the beach. Sleeps 6.",
    description: [
      "Villa Irini looks out over Kalo Livadi, one of the most beautiful bays in Mykonos, with turquoise water and golden sand. The beach and the well-known Solymar beach bar and restaurant are a 6 to 7 minute walk away.",
      "Designed in warm earth tones and natural materials, the villa opens onto a 100 m² infinity pool with sunbeds, umbrellas, an outdoor shower and a wind-protected lounge. Inside, the living room, dining area and kitchen open fully to the view. Three spacious suites, each with its own en-suite bathroom finished in premium materials, make it ideal for couples or a family.",
    ],
    amenities: [
      "100 m² infinity pool",
      "Panoramic views of Kalo Livadi bay",
      "Short walk to Kalo Livadi beach",
      "Wind-protected outdoor lounge",
      "BBQ and outdoor shower",
      "Three en-suite bedrooms",
      "Fully equipped kitchen",
      "Air conditioning and ceiling fans",
      "Molton Brown bath products, bathrobes and slippers",
      "Dyson hair dryer in every room",
      "Wi-Fi",
      "Daily light cleaning",
      "Private parking",
    ],
    photos: [
      irini.coverInfinityPool,
      irini.poolBayView,
      irini.poolUmbrellas,
      irini.poolAndVilla,
      irini.poolsideLounge,
      irini.poolDusk,
      irini.livingRoom,
      irini.livingSeaView,
      irini.diningKitchen,
      irini.masterBedroom,
      irini.bedroomTwo,
      irini.bathroom,
    ],
    featurePhoto: irini.poolFromAbove,
    gallery: [
      { title: "The infinity pool", photos: [irini.poolBayView, irini.poolUmbrellas, irini.poolAndVilla, irini.poolsideLounge, irini.poolDusk] },
      { title: "Living and kitchen", photos: [irini.livingRoom, irini.livingSeaView, irini.diningKitchen] },
      { title: "Suites", photos: [irini.masterBedroom, irini.bedroomTwo, irini.bathroom] },
    ],
  },
  {
    slug: "villa-aelia",
    name: "Villa Aelia",
    area: "Lino",
    bedrooms: 3,
    bathrooms: 3,
    wcs: 1,
    guests: 6,
    summary:
      "A brand-new three-suite villa in Lino with an 80 m² heated infinity pool and sea views, minutes from Mykonos Town and the south-coast beaches. Sleeps 6.",
    description: [
      "Brand new and created under the supervision of a team specialising in luxury homes, Villa Aelia sits in Lino, 3.7 km from Mykonos Town and only a short drive from Psarou, Platis Gialos and the beach clubs of the south coast.",
      "The entrance level opens onto an 80 m² heated infinity pool with loungers, umbrellas, an outdoor shower and a dining table for eight. Inside, an open-plan kitchen with Smeg appliances flows into a bright living and dining room with pool and sea views. Three sea-view suites, one opening straight onto the pool terrace and two upstairs with their own lounge areas and balconies, make it ideal for couples or a family.",
    ],
    amenities: [
      "80 m² heated infinity pool",
      "Sea view from every suite",
      "Outdoor dining for 8",
      "Loungers, umbrellas and outdoor shower",
      "Smart home",
      "Heated floors and central cooling",
      "Kitchen with Smeg appliances",
      "Daily maid service",
      "Alarm, CCTV and power generator",
      "Safe in every room",
      "Wi-Fi and TV",
      "Private parking",
    ],
    photos: [
      aelia.coverPoolDusk,
      aelia.infinityPool,
      aelia.terraceUmbrella,
      aelia.outdoorDining,
      aelia.livingRoom,
      aelia.diningRoom,
      aelia.kitchen,
      aelia.suiteOne,
      aelia.suiteTwo,
      aelia.suiteThree,
      aelia.bathroom,
    ],
    featurePhoto: aelia.villaFromAbove,
    gallery: [
      { title: "The pool and terraces", photos: [aelia.infinityPool, aelia.terraceUmbrella, aelia.outdoorDining] },
      { title: "Living and kitchen", photos: [aelia.livingRoom, aelia.diningRoom, aelia.kitchen] },
      { title: "Suites", photos: [aelia.suiteOne, aelia.suiteTwo, aelia.suiteThree, aelia.bathroom] },
    ],
  },
  {
    slug: "villa-fos",
    name: "Villa Fos",
    area: "Fanari",
    bedrooms: 5,
    bathrooms: 5,
    guests: 10,
    summary:
      "A five-bedroom Cycladic villa near the Fanari lighthouse, with a private pool, panoramic Aegean views and three guest rooms with their own entrances. Sleeps 10.",
    description: [
      "In the peaceful area of Fanari, near the historic lighthouse of Mykonos, Villa Fos looks out over a sweeping panorama of the Aegean, with natural stone terraces, Mediterranean planting and some of the island's most beautiful sunsets.",
      "Traditional Cycladic architecture meets modern comfort across a bright living room and kitchen with sea views, a shaded pergola with a built-in dining table for ten, a BBQ and a wood-fired oven, and a private pool lined with sunbeds. Two bedrooms are in the main house, while two guest rooms and an independent suite with its own living room and kitchen each have a private entrance, sleeping ten in all.",
    ],
    amenities: [
      "Private pool",
      "Panoramic sea and sunset view",
      "Outdoor dining for 10 under a pergola",
      "Built-in BBQ and wood-fired oven",
      "Outdoor lounges and sunbeds",
      "Independent guest suite with kitchen",
      "Fully equipped kitchen",
      "Air conditioning",
      "Sound system, TV and Wi-Fi",
      "Daily cleaning",
      "Washing machine and dryer",
      "Alarm and CCTV",
      "Outdoor parking",
    ],
    photos: [
      fos.coverVillaPool,
      fos.poolSeaView,
      fos.poolSunbeds,
      fos.sunsetTerrace,
      fos.pergolaDining,
      fos.outdoorLounge,
      fos.livingRoom,
      fos.kitchen,
      fos.bedroomOne,
      fos.bedroomBlueShutters,
      fos.guestHouseLiving,
      fos.bathroom,
    ],
    featurePhoto: fos.archSunset,
    gallery: [
      { title: "The pool and the sea", photos: [fos.poolSeaView, fos.poolSunbeds, fos.sunsetTerrace] },
      { title: "Terraces", photos: [fos.pergolaDining, fos.outdoorLounge] },
      { title: "Living and kitchen", photos: [fos.livingRoom, fos.kitchen] },
      { title: "Bedrooms and guest suite", photos: [fos.bedroomOne, fos.bedroomBlueShutters, fos.guestHouseLiving, fos.bathroom] },
    ],
  },
  {
    slug: "villa-kyanos",
    name: "Villa Kyanos",
    area: "Tourlos",
    bedrooms: 5,
    bathrooms: 9,
    guests: 10,
    summary:
      "A newly available five-bedroom villa in the Paradisia hills of Tourlos, with an 18-metre infinity pool, a gym and sea, sunset and town views from every bedroom terrace. Sleeps 10.",
    description: [
      "Nestled among the Paradisia hills above Tourlos, Villa Kyanos is a private sea-view retreat of crafted wood, white walls and terraced Mediterranean gardens that give a feeling of complete seclusion, 1.3 km from the new port and a few minutes from Mykonos Town.",
      "A sprawling terrace looks over the Aegean and the coastline, with sun loungers, outdoor sofas and a dining table for ten beside an 18-metre infinity pool that seems to run into the horizon. Inside, a warm wooden kitchen and a calm, minimal living room frame the view, and five spacious bedrooms each open onto their own sea-view terrace, with nine bathrooms across the house.",
    ],
    amenities: [
      "18 m infinity pool",
      "Sea, sunset, port and town views",
      "Private terrace for every bedroom",
      "Outdoor dining for 10",
      "Outdoor lounges and sun loungers",
      "Equipped indoor gym",
      "Mediterranean terraced garden",
      "Central air conditioning",
      "In-house staff and daily housekeeping",
      "Security guard",
      "Alarm, CCTV and power generator",
      "Safe in every room",
    ],
    photos: [
      kyanos.coverInfinityPool,
      kyanos.infinityPool,
      kyanos.poolTerrace,
      kyanos.villaNight,
      kyanos.shadedTerrace,
      kyanos.courtyardLounge,
      kyanos.garden,
      kyanos.kitchen,
      kyanos.kitchenIsland,
      kyanos.bedroomSeaView,
      kyanos.bedroomTerraceDoor,
      kyanos.bathroom,
    ],
    featurePhoto: kyanos.poolFromAbove,
    gallery: [
      { title: "The infinity pool", photos: [kyanos.infinityPool, kyanos.poolTerrace, kyanos.villaNight] },
      { title: "Terraces and garden", photos: [kyanos.shadedTerrace, kyanos.courtyardLounge, kyanos.garden] },
      { title: "Kitchen", photos: [kyanos.kitchen, kyanos.kitchenIsland] },
      { title: "Bedrooms", photos: [kyanos.bedroomSeaView, kyanos.bedroomTerraceDoor, kyanos.bathroom] },
    ],
  },
  {
    slug: "villa-thea",
    name: "Villa Thea",
    area: "Tourlos",
    bedrooms: 6,
    bathrooms: 7,
    wcs: 1,
    guests: 12,
    summary:
      "A six-bedroom villa in Tourlos with a 15-metre heated infinity pool, views of the sea and Mykonos Town, an al fresco gym and a private guest house. Sleeps 12.",
    description: [
      "Sheltered from the northern summer winds on the hillside of Tourlos, Villa Thea looks out over the Aegean and Mykonos Town, with stone-walled paths winding between terraces and gardens, 1.3 km from the new port and a few minutes from Agios Stefanos beach.",
      "The entrance level opens onto a 15-metre infinity pool with loungers, a built-in dining area for twelve, a lounge under a pergola and an al fresco gym. Inside, an open-plan kitchen with a wine fridge flows into the living and dining room with sea views. Three lower-level bedrooms each have their own entrance, and a separate guest house with a sea view and private lounge completes the six en-suite bedrooms for up to twelve guests.",
    ],
    amenities: [
      "Sea, town and sunset view",
      "15 m heated infinity pool (heating on request)",
      "Sheltered from the north winds",
      "Outdoor dining for 12 and BBQ",
      "Lounge under a pergola",
      "Al fresco gym",
      "Private guest house with sea view",
      "Kitchen with wine fridge",
      "Central air conditioning",
      "In-house staff and daily maid service",
      "Smart TV, sound system and Wi-Fi",
      "Alarm, CCTV and power generator",
      "Private parking",
    ],
    photos: [
      thea.coverInfinityPool,
      thea.poolDusk,
      thea.gardenSeaView,
      thea.pergolaLoungeDusk,
      thea.outdoorDining,
      thea.diningRoom,
      thea.livingRoom,
      thea.masterBedroom,
      thea.bedroomSeaView,
      thea.guestHouseBedroom,
      thea.bathroom,
    ],
    featurePhoto: thea.poolFromAbove,
    gallery: [
      { title: "The pool and the view", photos: [thea.poolDusk, thea.pergolaLoungeDusk, thea.gardenSeaView] },
      { title: "Dining and living", photos: [thea.outdoorDining, thea.diningRoom, thea.livingRoom] },
      { title: "Bedrooms", photos: [thea.masterBedroom, thea.bedroomSeaView, thea.guestHouseBedroom, thea.bathroom] },
    ],
  },
  {
    slug: "villa-oneiro",
    name: "Villa Oneiro",
    area: "Ano Mera",
    bedrooms: 6,
    bathrooms: 6,
    wcs: 1,
    guests: 12,
    summary:
      "A six-bedroom villa near Ano Mera with a heated private pool, two heated jacuzzi balconies and panoramic views of the island and the sea. Sleeps 12.",
    description: [
      "Set in the quiet countryside near Ano Mera, 1.8 km from Agia Anna beach, Villa Oneiro looks out over the hills to the sea, with clean lines, natural stone and wood, and large glass doors that fill every room with light.",
      "Outside, a heated pool with a sun deck and lawn sits in front of shaded lounges under a traditional reed pergola, with hanging chairs, an outdoor kitchenette and bar with BBQ, and dining for eight. Inside, a sunken living room with a stone wall opens straight onto the pool, and six en-suite bedrooms sleep twelve, two of them upstairs with balconies holding their own heated jacuzzi.",
    ],
    amenities: [
      "Heated private pool",
      "2 heated jacuzzis (5 seats each)",
      "Sea and island views",
      "Shaded lounges and hanging chairs",
      "Outdoor kitchenette and bar with BBQ",
      "Outdoor dining for 8",
      "Outdoor showers",
      "Air conditioning",
      "TV in every room and Wi-Fi",
      "Fully equipped kitchen",
      "Daily maid service",
      "Alarm system",
      "Private parking",
    ],
    photos: [
      oneiro.coverPoolDusk,
      oneiro.shadedLoungeSeaView,
      oneiro.hangingChairs,
      oneiro.outdoorLounge,
      oneiro.livingRoomSeaView,
      oneiro.livingRoomStoneWall,
      oneiro.diningRoom,
      oneiro.bedroomGardenView,
      oneiro.bedroomStoneWall,
      oneiro.bathroom,
    ],
    featurePhoto: oneiro.villaFromAbove,
    gallery: [
      { title: "Terraces and the pool", photos: [oneiro.shadedLoungeSeaView, oneiro.hangingChairs, oneiro.outdoorLounge] },
      { title: "Living and dining", photos: [oneiro.livingRoomSeaView, oneiro.livingRoomStoneWall, oneiro.diningRoom] },
      { title: "Bedrooms", photos: [oneiro.bedroomGardenView, oneiro.bedroomStoneWall, oneiro.bathroom] },
    ],
  },
  {
    slug: "villa-petra",
    name: "Villa Petra",
    area: "Kanalia",
    bedrooms: 6,
    bathrooms: 6,
    guests: 15,
    summary:
      "A six-bedroom villa 150 m from the beach in Kanalia, with a private pool, four heated jacuzzis, a massage room and sea, town and sunset views. Sleeps 15.",
    description: [
      "Just 150 m from the beach in Kanalia, Villa Petra looks over the bay to the lights of Mykonos Town, with a private pool, a sunset lounge for aperitifs under painted skies and every bedroom opening onto its own sea-view terrace.",
      "The main house holds an open-plan living room with a fireplace, a designer kitchen and three en-suite bedrooms, while three detached suites, each with a private entrance, a lounge, a kitchenette and its own heated jacuzzi, give couples and friends their own space. A dining terrace sheltered from the wind seats sixteen beside a BBQ and wood-fired pizza oven, and a spa room with a massage table completes the stay.",
    ],
    amenities: [
      "150 m from the beach",
      "Private pool",
      "4 heated jacuzzis",
      "Sea, town and sunset view",
      "Sunset lounge and 10 loungers",
      "Outdoor dining for 16",
      "BBQ and wood-fired pizza oven",
      "Spa room with massage table",
      "Three detached suites with private entrances",
      "Living room with fireplace",
      "Central air conditioning and smart home",
      "Daily housekeeping",
      "Security guard at night, alarm and CCTV",
      "Power generator",
    ],
    photos: [
      petra.coverPool,
      petra.poolSunset,
      petra.sunbedsSeaView,
      petra.poolTerrace,
      petra.jacuzziSeaView,
      petra.suiteJacuzzi,
      petra.terraceDining,
      petra.outdoorDining,
      petra.kitchen,
      petra.livingRoom,
      petra.bedroomOne,
      petra.bedroomTwo,
    ],
    featurePhoto: petra.poolFromAbove,
    gallery: [
      { title: "The pool and the view", photos: [petra.poolSunset, petra.sunbedsSeaView, petra.poolTerrace] },
      { title: "Jacuzzis and terraces", photos: [petra.jacuzziSeaView, petra.suiteJacuzzi, petra.terraceDining] },
      { title: "Dining, kitchen and living", photos: [petra.outdoorDining, petra.kitchen, petra.livingRoom] },
      { title: "Bedrooms", photos: [petra.bedroomOne, petra.bedroomTwo] },
    ],
  },
  {
    slug: "villa-avra",
    name: "Villa Avra",
    area: "Tourlos",
    bedrooms: 6,
    bathrooms: 7,
    wcs: 1,
    guests: 12,
    summary:
      "A brand-new six-bedroom villa in Tourlos with a 20-metre heated infinity pool, sea and sunset views, a sea-view gym and two private guest houses. Sleeps 12.",
    description: [
      "Brand new and designed by a team specialising in luxury homes, Villa Avra sits on the hillside of Tourlos with wide views over the sea and the sunset, 1.3 km from the new port and a few minutes from Mykonos Town and Agios Stefanos beach.",
      "Life outside centres on a 20-metre infinity pool, with loungers, several lounge areas, an outdoor kitchenette with BBQ, a dining table for twelve and an outdoor home theatre. Inside, an open-plan kitchen and living room, a home theatre, a wine room and a sea-view gym join four suites, while two attached guest houses with their own entrances give extra privacy. Twelve guests in all.",
    ],
    amenities: [
      "Sea and sunset view",
      "20 m heated infinity pool (heating on request)",
      "Outdoor home theatre",
      "Outdoor kitchenette and BBQ",
      "Outdoor dining for 12",
      "Fully equipped gym with sea view",
      "Wine room",
      "Two guest houses with private entrances",
      "Smart TVs, sound system and Wi-Fi",
      "Air conditioning",
      "Daily maid service",
      "Alarm, CCTV and power generator",
      "Private parking",
    ],
    photos: [
      avra.coverInfinityPool,
      avra.poolTerrace,
      avra.poolDusk,
      avra.poolNight,
      avra.outdoorDining,
      avra.shadedLounge,
      avra.kitchen,
      avra.wineRoom,
      avra.suiteOne,
      avra.suiteTwo,
      avra.suiteSeaView,
    ],
    featurePhoto: avra.poolGarden,
    gallery: [
      { title: "The pool", photos: [avra.poolTerrace, avra.poolDusk, avra.poolNight] },
      { title: "Outdoor living", photos: [avra.outdoorDining, avra.shadedLounge] },
      { title: "Kitchen and wine room", photos: [avra.kitchen, avra.wineRoom] },
      { title: "Suites", photos: [avra.suiteOne, avra.suiteTwo, avra.suiteSeaView] },
    ],
  },
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
    events: [
      "With an infinity pool at its heart, terraces over three levels and its own private dock, Villa Akti is made for celebrations by the sea, from a birthday or anniversary to a wedding proposal or a party under the stars. Your guests can even arrive by boat, with transfers straight to the dock.",
      "We organise the whole event for you: a professional DJ with sound and lighting, a bar team and cocktails, a private chef or catering, decoration, security and transfers for your guests.",
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
    events: [
      "With wide terraces, a pool bar, a sound system and a dining table for twenty, Villa Kyma is a natural setting for a private party by the infinity pool, from a sunset celebration with the whole group to a full night with a DJ.",
      "We organise the whole event for you: a professional DJ with sound and lighting, a bar team and cocktails, a private chef or catering, decoration, security and transfers for your guests.",
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
    events: [
      "With its free-form pool, outdoor jacuzzi, outdoor bar and wide terraces facing the sunset, Villa Selini has the space for a real celebration, from a sunset party with the whole group to a full night with a DJ under the Mykonos sky.",
      "We organise the whole event for you: a professional DJ with sound and lighting, a bar team and cocktails, a private chef or catering, decoration, security and transfers for your guests.",
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
  "villa-avra",
  "villa-petra",
  "villa-oneiro",
  "villa-thea",
  "villa-kyanos",
  "villa-fos",
  "villa-aelia",
  "villa-esperos",
  "villa-asteri",
  "villa-irini",
  "villa-aigli",
  "villa-pelagos",
  "villa-ourania",
  "villa-ktima",
  "villa-lithos",
  "villa-delfini",
  "villa-erato",
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

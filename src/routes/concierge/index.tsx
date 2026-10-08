import { createFileRoute, Link } from "@tanstack/react-router";
import { ConciergeRequestDialog } from "../../components/ConciergeRequestDialog";
import heroImage from "../../assets/mykonos-terrace-view.webp";
import villaImage from "../../assets/villa-pool-terrace.webp";
import yachtImage from "../../assets/van-yacht.webp";
import transferImage from "../../assets/van-hotel-arrival.webp";
import helicopterImage from "../../assets/helipad-helicopters.webp";
import beachImage from "../../assets/venues/nammos-psarou.webp";
import restaurantImage from "../../assets/venues/sea-satin-little-venice.webp";
import sunsetImage from "../../assets/venues/numi-sunset.webp";
import nightlifeImage from "../../assets/venues/nightlife-palms.webp";
import yachtsNightImage from "../../assets/yachts-night-mykonos.webp";

const TITLE = "Mykonos Concierge Services | VIP Reservations, Villas, Yachts & Private Chef";
const DESCRIPTION =
  "Luxury concierge services in Mykonos from a local team, on call 24/7: villas, yachts, restaurant and beach club reservations, VIP tables, private chef, security, events, weddings and private transfers.";
const URL = "https://www.islavidajmk.com/concierge";

export const Route = createFileRoute("/concierge/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ConciergePage,
});

/**
 * One tile in the services mosaic.
 * - With `photo` and `to`: a picture tile that opens that service's page.
 * - Without them: a coloured tile that opens the request window.
 * `size` and `tone` are complete class names so the stylesheet picks them up.
 */
interface Service {
  name: string;
  line: string;
  photo?: string;
  alt?: string;
  to?: string;
  hash?: string;
  size?: string;
  tone?: string;
  /** How the request reads: "I would like to request ...". */
  topic?: string;
}

const WIDE = "sm:col-span-2";
const LARGE = "sm:col-span-2 sm:row-span-2";
const TALL = "lg:row-span-2";

const CHAMPAGNE = "bg-champagne text-navy";
const NAVY = "bg-navy text-white";
const INK = "bg-[oklch(0.17_0.05_264)] text-white";
const PALE = "bg-navy-muted text-navy";

// The order is the order on the page. On wide screens the sizes below fill six rows of four.
const services: Service[] = [
  {
    name: "Luxury villas",
    line: "Private villas across the island, prepared for your arrival.",
    photo: villaImage,
    alt: "Villa terrace and pool above the sea in Mykonos at sunset",
    to: "/villas",
    size: LARGE,
  },
  {
    name: "Yachts and catamarans",
    line: "Private charters to Delos and Rhenia.",
    photo: yachtImage,
    alt: "Motor yacht moored in Mykonos with our vehicles waiting on the quay",
    to: "/services",
    hash: "yacht-catamaran-chartering",
    size: WIDE,
  },
  {
    name: "24/7 guest services",
    line: "One team on call, day and night, for the whole stay.",
    tone: CHAMPAGNE,
    topic: "24/7 guest services",
  },
  {
    name: "Private chef",
    line: "A chef in your villa or on your yacht, with the menu agreed with you.",
    tone: NAVY,
    topic: "a private chef",
  },
  {
    name: "Beach clubs",
    line: "Sunbeds and tables at Scorpios, Nammos and Principote.",
    photo: beachImage,
    alt: "Sunbeds on Psarou Beach, Mykonos",
    to: "/concierge/beach-club-reservations",
    size: TALL,
  },
  {
    name: "Restaurants",
    line: "Tables at Interni, Buddha-Bar Beach, Sea Satin and more.",
    photo: restaurantImage,
    alt: "Tables set by the water in Little Venice, Mykonos",
    to: "/concierge/restaurant-reservations",
    size: WIDE,
  },
  {
    name: "Security and protection",
    line: "Discreet personal security for you and your guests.",
    tone: INK,
    topic: "personal security",
  },
  {
    name: "Sunset bars",
    line: "Golden hour at 180°, Negrita and Scarpa.",
    photo: sunsetImage,
    alt: "Sunset over Mykonos Town seen from a hillside bar",
    to: "/concierge/sunset-bars",
    size: WIDE,
  },
  {
    name: "Nightlife and VIP tables",
    line: "The table, and a driver until you are home.",
    photo: nightlifeImage,
    alt: "Open-air club in Mykonos at night under lit palm trees",
    to: "/concierge/nightlife-vip-tables",
  },
  {
    name: "Private transfers",
    line: "Airport, port and villa transfers with a private chauffeur.",
    photo: transferImage,
    alt: "Black Mercedes transfer van waiting at a hillside hotel in Mykonos",
    to: "/services",
    size: WIDE,
  },
  {
    name: "Events and parties",
    line: "Villa parties, birthdays and private celebrations, planned end to end.",
    tone: PALE,
    topic: "event and party planning",
  },
  {
    name: "Weddings",
    line: "Wedding planning on the island, from the venue to the last transfer.",
    tone: CHAMPAGNE,
    topic: "wedding planning",
  },
  {
    name: "Personal shopping",
    line: "A personal shopping assistant for the boutiques of Mykonos Town.",
    tone: NAVY,
    topic: "a personal shopping assistant",
  },
  {
    name: "Helicopters",
    line: "Private helicopter charters to and from the island.",
    photo: helicopterImage,
    alt: "Two private helicopters on a helipad above the Mykonos coast",
    to: "/services",
    hash: "helicopter-chartering",
    size: WIDE,
  },
  {
    name: "Something else?",
    line: "If it can be arranged in Mykonos, ask us.",
    tone: INK,
    topic: "concierge help in Mykonos",
  },
];

const promises = [
  {
    title: "Local",
    text: "We work on Mykonos every day of the season. We know which table, which row of sunbeds and which hour.",
  },
  {
    title: "Discreet",
    text: "Your plans and your guests stay private. We speak to the venue so you do not have to.",
  },
  {
    title: "Confirmed with you",
    text: "We tell you the time, the conditions and any minimum spend before you commit.",
  },
];

const requestPlaceholder = "A beach club on Saturday, dinner for six, a yacht day, a chef for the villa";

const requestButton =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors";

const tileFocus =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-accent focus-visible:ring-offset-2";

function ServiceTile({ service }: { service: Service }) {
  const size = service.size ?? "";

  if (service.photo && service.to) {
    return (
      <Link
        to={service.to}
        hash={service.hash}
        className={`group relative isolate block h-60 overflow-hidden sm:h-auto ${tileFocus} ${size}`}
      >
        <img
          src={service.photo}
          alt={service.alt ?? ""}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.17_0.05_264)]/95 via-[oklch(0.17_0.05_264)]/30 to-transparent" />
        <div className="flex h-full flex-col justify-end p-5 text-white lg:p-6">
          <h3 className="font-display text-3xl font-semibold leading-none">{service.name}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">{service.line}</p>
        </div>
      </Link>
    );
  }

  return (
    <ConciergeRequestDialog
      topic={service.topic ?? "concierge help in Mykonos"}
      placeholder={requestPlaceholder}
    >
      <button
        type="button"
        className={`group flex flex-col justify-between gap-8 p-5 text-left lg:p-6 ${tileFocus} ${service.tone ?? NAVY} ${size}`}
      >
        <span className="block font-display text-3xl font-semibold leading-none">
          {service.name}
        </span>
        <span>
          <span className="block text-sm leading-relaxed opacity-85">{service.line}</span>
          <span className="mt-3 inline-block text-sm font-semibold underline underline-offset-4 decoration-current/40 group-hover:decoration-current">
            Ask for this
          </span>
        </span>
      </button>
    </ConciergeRequestDialog>
  );
}

function ConciergePage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate flex min-h-[36rem] items-end overflow-hidden bg-[oklch(0.17_0.05_264)] text-white lg:min-h-[46rem]">
        <img
          src={heroImage}
          alt="Mykonos Town, its windmill and the sea seen from a terrace above the old port"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.17_0.05_264)] via-[oklch(0.17_0.05_264)]/70 to-[oklch(0.17_0.05_264)]/20" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-24">
          <h1 className="text-base font-semibold tracking-wide text-champagne sm:text-lg">
            Mykonos concierge services
          </h1>
          <p className="mt-5 max-w-5xl font-display text-5xl font-medium italic leading-[1.02] sm:text-7xl lg:text-8xl">
            Mykonos reveals itself when a local makes a call.
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Isla Vida is a private concierge based on the island. One team, on call day and
            night, for the villa, the yacht, the table and everything between.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ConciergeRequestDialog topic="concierge help in Mykonos" placeholder={requestPlaceholder}>
              <button type="button" className={`${requestButton} bg-white text-navy hover:bg-white/90`}>
                Tell us what you need
              </button>
            </ConciergeRequestDialog>
            <a
              href="#services"
              className="text-sm font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white"
            >
              See everything we arrange
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding scroll-mt-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-6xl">
            Everything we arrange
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From the first transfer to the last night out, one message reaches the team
            that arranges all of it.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-flow-dense sm:auto-rows-[15rem] sm:grid-cols-2 lg:auto-rows-[16rem] lg:grid-cols-4">
            {services.map((service) => (
              <ServiceTile key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Yachts at night behind the statement: dark on the left for the words, the lit
          water left to show on the right. */}
      <section className="section-padding relative isolate overflow-hidden bg-[oklch(0.17_0.05_264)] text-white">
        <img
          src={yachtsNightImage}
          alt="Yachts at anchor at night, their lights turning the water turquoise"
          width={1920}
          height={700}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 -z-10 bg-[oklch(0.17_0.05_264)]/65 lg:bg-[oklch(0.17_0.05_264)]/30" />
        <div className="absolute inset-y-0 left-0 -z-10 hidden w-3/4 bg-gradient-to-r from-[oklch(0.17_0.05_264)]/85 to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[oklch(0.17_0.05_264)]/90 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl font-display text-4xl font-medium italic leading-[1.1] text-champagne sm:text-6xl">
            Local knowledge is not a list of venues. It is knowing whom to call, and being
            answered.
          </p>
          <dl className="mt-14 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3">
            {promises.map((promise) => (
              <div key={promise.title}>
                <dt className="font-display text-3xl font-semibold">{promise.title}</dt>
                <dd className="mt-3 max-w-sm leading-relaxed text-white/80">{promise.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            One message is enough
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Send your dates and what you have in mind. We answer on WhatsApp or by email,
            day or night.
          </p>
          <div className="mt-8">
            <ConciergeRequestDialog topic="concierge help in Mykonos" placeholder={requestPlaceholder}>
              <button type="button" className={`${requestButton} bg-navy text-white hover:bg-navy-light`}>
                Send your request
              </button>
            </ConciergeRequestDialog>
          </div>
        </div>
      </section>
    </div>
  );
}

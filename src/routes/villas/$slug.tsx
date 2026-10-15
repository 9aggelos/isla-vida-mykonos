import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Disc3, MessageCircle, Music, PartyPopper, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VillaRequestDialog } from "../../components/VillaRequestDialog";
import { formatVillaPrice, getVilla, villaSrcSet, type Villa } from "../../data/villas";

const BASE_URL = "https://www.islavidajmk.com";

export const Route = createFileRoute("/villas/$slug")({
  loader: ({ params }) => {
    const villa = getVilla(params.slug);
    if (!villa) throw notFound();
    return { villa };
  },
  head: ({ loaderData }) => {
    const villa = loaderData?.villa;
    if (!villa) return {};
    const title = `${villa.name}: ${villa.bedrooms}-Bedroom Villa in ${villa.area}, Mykonos | Isla Vida`;
    const url = `${BASE_URL}/villas/${villa.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: villa.summary },
        { property: "og:site_name", content: "Isla Vida Mykonos" },
        { property: "og:title", content: title },
        { property: "og:description", content: villa.summary },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: `${BASE_URL}${villa.photos[0]}` },
        { name: "twitter:image", content: `${BASE_URL}${villa.photos[0]}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: url },
        {
          rel: "preload",
          as: "image",
          href: villa.photos[0],
          imageSrcSet: villaSrcSet(villa.photos[0]),
          imageSizes: "100vw",
        },
      ],
    };
  },
  notFoundComponent: VillaNotFound,
  component: VillaPage,
});

function VillaNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">Villa not found</h1>
      <p className="mt-4 text-muted-foreground">
        This villa is no longer in our portfolio. Have a look at the ones available now.
      </p>
      <Link
        to="/villas"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
      >
        See all villas
      </Link>
    </div>
  );
}

/*
 * The villa page follows the style of a villa brochure: a full-width cover, a
 * "Villa Summary" with a round photo, then the photos in short chapters.
 * Everything it shows comes from src/data/villas.ts.
 */

/** Thin line with a small diamond at each end, as in the brochure. */
function LineAccent({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center ${className}`}>
      <span className="h-2 w-2 rotate-45 bg-current" />
      <span className="h-px flex-1 bg-current" />
      <span className="h-2 w-2 rotate-45 bg-current" />
    </div>
  );
}

/** Outline diamonds drawn behind the round photo. */
function DiamondPattern({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 200" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M60 2 L100 50 L60 98 L20 50 Z" />
        <path d="M60 52 L100 100 L60 148 L20 100 Z" />
        <path d="M60 102 L100 150 L60 198 L20 150 Z" />
        <path d="M20 50 L60 98 L20 146" />
        <path d="M100 50 L60 98 L100 146" />
      </g>
    </svg>
  );
}

function RequestButton({
  villa,
  light = false,
  className = "",
}: {
  villa: Villa;
  light?: boolean;
  className?: string;
}) {
  return (
    <VillaRequestDialog villa={villa}>
      <button
        type="button"
        className={`inline-flex items-center justify-center gap-2 rounded-md px-7 py-3 text-sm font-semibold transition-colors ${
          light ? "bg-white text-navy hover:bg-white/90" : "bg-navy text-white hover:bg-navy-light"
        } ${className}`}
      >
        <MessageCircle className="h-4 w-4" />
        Request this villa
      </button>
    </VillaRequestDialog>
  );
}

/** What we arrange for a private party, shown on villas that can host one. */
const PARTY_SERVICES = [
  { icon: Disc3, label: "Professional DJ" },
  { icon: Music, label: "Sound and lighting" },
  { icon: PartyPopper, label: "Bar team and cocktails" },
  { icon: UtensilsCrossed, label: "Private chef or catering" },
  { icon: Sparkles, label: "Decoration and flowers" },
  { icon: ShieldCheck, label: "Security and guest transfers" },
];

function PartySection({ villa }: { villa: Villa }) {
  if (!villa.events?.length) return null;
  const message = `Hello Isla Vida, I would like to organise a private party at ${villa.name}. Our dates and number of guests:`;
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-20">
      <DiamondPattern className="absolute -right-8 top-6 -z-10 h-64 w-auto text-white/10 lg:right-12" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">
            Space to celebrate
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Private parties with a DJ</h2>
          <LineAccent className="mt-4 w-48 text-white/50" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/85">
            {villa.events.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <a
            href={`https://wa.me/306948041931?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
          >
            <MessageCircle className="h-4 w-4" />
            Plan a party at {villa.name}
          </a>
          <p className="mt-3 text-sm text-white/60">
            Events are arranged on request and subject to the villa&apos;s approval for your dates.
          </p>
        </div>
        <ul className="grid grid-cols-2 content-center gap-3 sm:gap-4">
          {PARTY_SERVICES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col gap-2 rounded-lg border border-white/15 bg-white/5 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5"
            >
              <Icon className="h-6 w-6 shrink-0 text-champagne" />
              <span className="text-sm font-medium sm:text-base">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function VillaPage() {
  const { villa } = Route.useLoaderData();
  const chapters =
    villa.gallery ?? (villa.photos.length > 1 ? [{ title: "Gallery", photos: villa.photos.slice(1) }] : []);
  const galleryPhotos = chapters.flatMap((chapter) => chapter.photos);
  const featurePhoto = villa.featurePhoto ?? villa.photos[1] ?? villa.photos[0];
  const [openAt, setOpenAt] = useState<number | null>(null);

  const bathrooms = `${villa.bathrooms} Bathrooms${villa.wcs ? ` + ${villa.wcs} WCs` : ""}`;
  const facts = [
    `${villa.bedrooms} Bedrooms`,
    bathrooms,
    `Up to ${villa.guests} guests`,
    villa.area,
  ];
  const altFor = (index: number) =>
    `${villa.name}, luxury villa in ${villa.area}, Mykonos, photo ${index + 1}`;

  let photoIndex = 0;

  return (
    <div className="bg-background">
      {/* Cover */}
      <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-navy text-white">
        <img
          src={villa.photos[0]}
          srcSet={villaSrcSet(villa.photos[0])}
          sizes="100vw"
          alt={`${villa.name} in ${villa.area}, Mykonos`}
          width={1600}
          height={1064}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/85 via-navy/30 to-navy/10" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16">
          <Link
            to="/villas"
            className="absolute left-4 top-6 inline-flex items-center gap-2 rounded-full bg-navy/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-navy/80 sm:left-6 lg:left-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All villas
          </Link>
          <h1 className="font-display text-5xl font-bold leading-[1.05] [text-shadow:0_2px_16px_rgb(0_0_0/0.35)] sm:text-6xl lg:text-7xl">
            {villa.name}
          </h1>
          <p className="mt-3 font-display text-2xl italic text-white/90 sm:text-3xl">
            {villa.bedrooms} Bedrooms · Mykonos Island
          </p>
          <LineAccent className="mt-6 w-56 text-white/70" />
        </div>
      </section>

      {/* Villa summary */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <DiamondPattern className="absolute -right-6 -top-10 h-56 w-auto text-navy-accent/40 sm:-right-10 lg:h-72" />
            <div className="relative aspect-square overflow-hidden rounded-full shadow-xl ring-8 ring-background">
              <img
                src={featurePhoto}
                srcSet={villaSrcSet(featurePhoto)}
                sizes="(min-width: 1024px) 480px, 384px"
                alt={`${villa.name} pool seen from above`}
                width={1000}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Villa Summary</h2>
            <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {facts.map((fact, index) => (
                <span key={fact} className="flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true" className="text-navy-accent/50">|</span>}
                  {fact}
                </span>
              ))}
            </p>
            <LineAccent className="mt-4 max-w-md text-navy-accent/60" />

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {villa.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">Amenities</h3>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-muted-foreground sm:grid-cols-2">
              {villa.amenities.map((amenity) => (
                <li key={amenity} className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 -translate-y-0.5 rotate-45 bg-navy-accent" />
                  {amenity}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <RequestButton villa={villa} />
              <p className="font-semibold text-foreground">{formatVillaPrice(villa)}</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              A request is not a booking. We confirm availability and send you a clear quote.
            </p>
          </div>
        </div>
      </section>

      <PartySection villa={villa} />

      {/* Photo chapters */}
      {chapters.map((chapter, chapterIndex) => (
        <section
          key={chapter.title}
          className={`py-12 sm:py-16 ${chapterIndex % 2 === 0 ? "border-y border-border bg-secondary" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{chapter.title}</h2>
            <LineAccent className="mt-3 w-40 text-navy-accent/60" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {chapter.photos.map((photo, index) => {
                const position = photoIndex++;
                const wide = chapter.photos.length % 2 === 1 && index === 0;
                return (
                  <button
                    key={photo}
                    type="button"
                    onClick={() => setOpenAt(position)}
                    aria-label={`Open photo ${position + 1} of ${galleryPhotos.length} full screen`}
                    className={`group block overflow-hidden rounded-lg bg-navy-muted ${
                      wide ? "aspect-[3/2] sm:col-span-2 sm:aspect-[2/1]" : "aspect-[3/2]"
                    }`}
                  >
                    <img
                      src={photo}
                      srcSet={villaSrcSet(photo)}
                      sizes={wide ? "(min-width: 1280px) 1216px, 100vw" : "(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"}
                      alt={altFor(position)}
                      width={1600}
                      height={1064}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Closing call to action */}
      <section className="bg-navy py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-5xl">Stay at {villa.name}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Tell us your dates and group size. We confirm availability and can add transfers, a
            private chef or a yacht day to your stay.
          </p>
          <RequestButton villa={villa} light className="mt-8" />
        </div>
      </section>

      {/* Full-screen photo viewer */}
      <Dialog open={openAt !== null} onOpenChange={(open) => !open && setOpenAt(null)}>
        <DialogContent className="max-w-6xl border-none bg-navy p-2 text-white sm:p-4">
          <DialogTitle className="sr-only">{villa.name} photos</DialogTitle>
          {openAt !== null && (
            <Carousel opts={{ startIndex: openAt, loop: true }}>
              <CarouselContent>
                {galleryPhotos.map((photo, index) => (
                  <CarouselItem key={photo}>
                    <img
                      src={photo}
                      alt={altFor(index)}
                      width={1600}
                      height={1064}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[80vh] w-full rounded-md object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 h-10 w-10 border-none bg-white/90 text-navy" />
              <CarouselNext className="right-2 h-10 w-10 border-none bg-white/90 text-navy" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

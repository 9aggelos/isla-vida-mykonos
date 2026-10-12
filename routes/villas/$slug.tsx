import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Bath, BedDouble, Check, MapPin, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { VillaRequestDialog } from "../../components/VillaRequestDialog";
import { formatVillaPrice, getVilla } from "../../data/villas";

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
      links: [{ rel: "canonical", href: url }],
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

function VillaPage() {
  const { villa } = Route.useLoaderData();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const photoAlt = (index: number) =>
    `${villa.name} in ${villa.area}, Mykonos, photo ${index + 1} of ${villa.photos.length}`;

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Link
          to="/villas"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy-accent transition-colors hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          All villas
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          {/* Gallery */}
          <div className="lg:col-span-2">
            <Carousel setApi={setApi} opts={{ loop: villa.photos.length > 1 }}>
              <CarouselContent>
                {villa.photos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[3/2] overflow-hidden rounded-lg bg-navy-muted">
                      <img
                        src={photo}
                        alt={photoAlt(index)}
                        width={1600}
                        height={1067}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : undefined}
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {villa.photos.length > 1 && (
                <>
                  <CarouselPrevious className="left-3 h-10 w-10" />
                  <CarouselNext className="right-3 h-10 w-10" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-white">
                    {current + 1} / {villa.photos.length}
                  </span>
                </>
              )}
            </Carousel>

            {villa.photos.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {villa.photos.map((photo, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={index === current}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-opacity ${
                      index === current
                        ? "border-navy"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={photo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Summary and request */}
          <aside className="lg:col-span-1 lg:row-span-2">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm lg:sticky lg:top-28">
              <p className="flex items-center gap-1.5 text-sm font-medium text-navy-accent">
                <MapPin className="h-4 w-4" />
                {villa.area}, Mykonos
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-card-foreground">
                {villa.name}
              </h1>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <BedDouble className="h-4 w-4" />
                  {villa.bedrooms} bedrooms
                </li>
                <li className="flex items-center gap-2">
                  <Bath className="h-4 w-4" />
                  {villa.bathrooms} bathrooms
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Up to {villa.guests} guests
                </li>
              </ul>

              <p className="mt-6 text-lg font-semibold text-foreground">
                {formatVillaPrice(villa)}
              </p>

              <VillaRequestDialog villa={villa}>
                <button
                  type="button"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                >
                  Request this villa
                </button>
              </VillaRequestDialog>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                A request is not a booking. We confirm availability first.
              </p>
            </div>
          </aside>

          {/* Description and amenities */}
          <div className="lg:col-span-2">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              {villa.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-10 font-display text-3xl font-bold text-foreground">Amenities</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {villa.amenities.map((amenity) => (
                <li key={amenity} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-navy-accent" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

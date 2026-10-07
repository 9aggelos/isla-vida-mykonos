import { Link } from "@tanstack/react-router";
import { ArrowRight, Bath, BedDouble, MapPin, Users } from "lucide-react";
import { formatVillaPrice, type Villa } from "../data/villas";
import { VillaRequestDialog } from "./VillaRequestDialog";

export function VillaCard({ villa }: { villa: Villa }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link
        to="/villas/$slug"
        params={{ slug: villa.slug }}
        className="block aspect-[4/3] overflow-hidden"
      >
        <img
          src={villa.photos[0]}
          alt={`${villa.name}, luxury villa in ${villa.area}, Mykonos`}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-sm font-medium text-navy-accent">
          <MapPin className="h-4 w-4" />
          {villa.area}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-card-foreground">
          <Link to="/villas/$slug" params={{ slug: villa.slug }} className="hover:text-navy-light">
            {villa.name}
          </Link>
        </h3>

        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" />
            {villa.bedrooms} bedrooms
          </li>
          <li className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            {villa.bathrooms} baths
          </li>
          <li className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            {villa.guests} guests
          </li>
        </ul>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{villa.summary}</p>

        <p className="mt-5 font-semibold text-foreground">{formatVillaPrice(villa)}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <VillaRequestDialog villa={villa}>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Request this villa
            </button>
          </VillaRequestDialog>
          <Link
            to="/villas/$slug"
            params={{ slug: villa.slug }}
            className="inline-flex items-center gap-1 text-sm font-medium text-navy-accent transition-colors hover:text-navy"
          >
            View photos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

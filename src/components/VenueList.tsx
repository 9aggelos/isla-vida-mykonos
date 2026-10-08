import { ConciergeRequestDialog } from "./ConciergeRequestDialog";
import type { Venue } from "../data/concierge";

/** One venue: small photo or initial, what and where it is, and its own request button. */
function VenueRow({ venue }: { venue: Venue }) {
  return (
    <li className="flex items-center gap-4 py-4">
      {venue.photo ? (
        <img
          src={venue.photo}
          alt=""
          width={192}
          height={144}
          loading="lazy"
          decoding="async"
          className="h-[4.5rem] w-24 shrink-0 object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-[4.5rem] w-24 shrink-0 items-center justify-center bg-navy font-display text-3xl text-white/90"
        >
          {venue.name.charAt(0)}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="font-display text-2xl font-semibold leading-tight text-foreground">
          {venue.name}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {venue.note}, {venue.place}
        </p>
      </div>
      <ConciergeRequestDialog
        topic={`a reservation at ${venue.name}`}
        placeholder="Lunch or dinner, sunbeds, preferred time, a celebration"
      >
        <button
          type="button"
          aria-label={`Request a reservation at ${venue.name}`}
          className="shrink-0 rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Request
        </button>
      </ConciergeRequestDialog>
    </li>
  );
}

interface VenueListProps {
  /** Heading above the list of venues. */
  title: string;
  /** A line under the heading. */
  intro: string;
  /** The venues to show. */
  venues: Venue[];
}

/** The "Signature addresses" photo grid plus the full request list, for one venue type. */
export function VenueList({ title, intro, venues }: VenueListProps) {
  // Signature addresses, in list order.
  const featured = venues.filter((venue) => venue.featured && venue.photo);
  // Only a photo marked "large" is sharp enough to lead at full width. Otherwise
  // every signature address gets the same size tile.
  const lead = featured[0]?.featured === "large" ? featured[0] : undefined;
  const rest = featured.filter((venue) => venue !== lead);
  const hasFeatured = featured.length > 0;
  const columns = rest.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <>
      {hasFeatured && (
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Signature addresses
            </h2>
            {lead && (
              <figure className="mt-10">
                <img
                  src={lead.photo}
                  alt={`${lead.name}, ${lead.place}, Mykonos`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover sm:aspect-[2/1]"
                />
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <span className="font-display text-3xl font-semibold text-foreground">
                    {lead.name}
                  </span>
                  <span className="text-right text-sm text-muted-foreground">{lead.place}</span>
                </figcaption>
              </figure>
            )}
            {rest.length > 0 && (
              <div className={`mt-10 grid grid-cols-2 gap-x-5 gap-y-8 lg:gap-x-8 ${columns}`}>
                {rest.map((venue) => (
                  <figure key={venue.name}>
                    <img
                      src={venue.photo}
                      alt={`${venue.name}, ${venue.place}, Mykonos`}
                      width={660}
                      height={440}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <figcaption className="mt-3 border-b border-border pb-3">
                      <span className="block font-display text-2xl font-semibold leading-tight text-foreground">
                        {venue.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">{venue.place}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section-padding bg-navy-muted/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <ul className="mt-10 grid gap-x-16 border-y border-border sm:grid-cols-2 sm:gap-x-16 [&>li]:border-b [&>li]:border-border sm:[&>li:nth-last-child(-n+2):nth-child(odd)]:border-b-0 sm:[&>li:last-child]:border-b-0">
            {venues.map((venue) => (
              <VenueRow key={venue.name} venue={venue} />
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted-foreground">
            Reservations depend on each venue's availability. Isla Vida is an independent
            concierge and is not affiliated with the venues listed.
          </p>
        </div>
      </section>
    </>
  );
}

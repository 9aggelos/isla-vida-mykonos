import { createFileRoute, redirect } from "@tanstack/react-router";

// The combined page was split into two: beach clubs and restaurants. Anyone who
// reaches the old address, from a bookmark or an old link, is sent to the beach
// clubs page, which links on to restaurants.
export const Route = createFileRoute("/concierge/restaurants-beach-clubs")({
  beforeLoad: () => {
    throw redirect({ to: "/concierge/beach-club-reservations" });
  },
});

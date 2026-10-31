import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout for /blog and /blog/<article>. The pages themselves are in src/routes/blog/.
export const Route = createFileRoute("/blog")({
  component: () => <Outlet />,
});

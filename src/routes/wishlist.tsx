import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/wishlist")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

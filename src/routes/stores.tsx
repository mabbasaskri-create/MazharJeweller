import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/stores")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

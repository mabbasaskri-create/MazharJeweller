import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sale")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

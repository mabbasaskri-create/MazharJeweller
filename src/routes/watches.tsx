import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/watches")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

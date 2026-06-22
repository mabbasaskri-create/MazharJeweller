import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/gifts")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

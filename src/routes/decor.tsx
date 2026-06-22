import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/decor")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

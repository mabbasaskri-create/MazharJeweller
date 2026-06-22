import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jewelry")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

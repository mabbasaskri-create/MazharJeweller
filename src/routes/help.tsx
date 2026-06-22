import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  loader: () => { throw redirect({ to: "/" }); },
  component: () => null,
});

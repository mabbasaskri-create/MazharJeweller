import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl">404</h1>
        <p className="mt-4 text-muted-foreground">Yeh page mojood nahi.</p>
        <Link to="/" className="mt-6 inline-block underline">Wapas Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">Kuch ghalat ho gaya</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 bg-primary text-primary-foreground px-4 py-2">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sparkle Pakistan — Crystal Jewelry & Gifts" },
      { name: "description", content: "Premium crystal jewelry, watches & home décor with prices in PKR. Free shipping across Pakistan." },
      { property: "og:title", content: "Sparkle Pakistan — Crystal Jewelry & Gifts" },
      { property: "og:description", content: "Premium crystal jewelry, watches & home décor with prices in PKR. Free shipping across Pakistan." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Sparkle Pakistan — Crystal Jewelry & Gifts" },
      { name: "twitter:description", content: "Premium crystal jewelry, watches & home décor with prices in PKR. Free shipping across Pakistan." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/defd23c4-ccad-44f5-aabf-4cb4d474e7e4/id-preview-6dfc19c8--db8fc734-b15f-49f4-93d2-39967fca1e31.lovable.app-1782158011403.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/defd23c4-ccad-44f5-aabf-4cb4d474e7e4/id-preview-6dfc19c8--db8fc734-b15f-49f4-93d2-39967fca1e31.lovable.app-1782158011403.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

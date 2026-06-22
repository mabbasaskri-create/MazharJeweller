import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, pkr } from "@/lib/products";
import watch from "@/assets/watch.jpg";

export const Route = createFileRoute("/watches")({
  head: () => ({
    meta: [
      { title: "Crystal Watches for Women — Sparkle·PK" },
      { name: "description", content: "Discover our collection of crystal-adorned watches in Pakistan. Swiss-inspired precision with sparkling elegance." },
    ],
  }),
  component: WatchesPage,
});

function WatchesPage() {
  const watchProducts = products.filter((p) => p.category === "watches");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="serif text-5xl md:text-6xl">Crystal Watches</h1>
          <p className="mt-3 text-muted-foreground">Where precision meets brilliance — timepieces adorned with crystal</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="aspect-[2/1] overflow-hidden bg-[var(--blush)] mb-12">
          <img src={watch} alt="Crystal Watches Collection" width={1200} height={600} className="w-full h-full object-cover" />
        </div>

        {watchProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="serif text-3xl mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">New watch collections are on their way. Sign up for updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {watchProducts.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-card">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {p.tag && <span className="absolute top-3 left-3 bg-background/95 text-xs px-2 py-1 uppercase tracking-wider">{p.tag}</span>}
                  <button aria-label="Wishlist" className="absolute top-3 right-3 h-9 w-9 bg-background/95 flex items-center justify-center hover:bg-background" onClick={(e) => { e.preventDefault(); }}>
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium">{p.name}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm">{pkr(p.price)}</span>
                    {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{pkr(p.oldPrice)}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

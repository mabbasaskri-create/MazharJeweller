import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { categories, products, pkr } from "@/lib/products";

export const Route = createFileRoute("/jewelry")({
  head: () => ({
    meta: [
      { title: "Crystal Jewelry Collection — Sparkle·PK" },
      { name: "description", content: "Browse our complete jewelry collection. Necklaces, earrings, bracelets and rings for every occasion." },
    ],
  }),
  component: JewelryPage,
});

function JewelryPage() {
  const jewelryCategories = categories.filter((c) => c.slug !== "watches" && c.slug !== "decor");
  const jewelryProducts = products.filter((p) => p.category !== "watches" && p.category !== "decor");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="serif text-5xl md:text-6xl">Crystal Jewelry</h1>
          <p className="mt-3 text-muted-foreground">Necklaces, earrings, bracelets & rings crafted to celebrate every moment</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {jewelryCategories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="group">
              <div className="aspect-square overflow-hidden bg-[var(--blush)]">
                <img src={c.img} alt={c.title} loading="lazy" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="mt-3 text-center text-sm uppercase tracking-wider">{c.title}</p>
            </Link>
          ))}
        </div>

        <h2 className="serif text-3xl mb-8">All Jewelry</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {jewelryProducts.map((p) => (
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
      </section>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Gift, Package, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, pkr } from "@/lib/products";

export const Route = createFileRoute("/gifts")({
  head: () => ({
    meta: [
      { title: "Crystal Gift Collection — Sparkle·PK" },
      { name: "description", content: "Find the perfect crystal gift in Pakistan. Shop by price, occasion or recipient. Complimentary gift wrapping." },
    ],
  }),
  component: GiftsPage,
});

function GiftsPage() {
  const under10k = products.filter((p) => p.price <= 10000);
  const giftProducts = products;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="serif text-5xl md:text-6xl">Gifts</h1>
          <p className="mt-3 text-muted-foreground">Find the perfect piece for someone special</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Gift, t: "Gift Wrapped", d: "Complimentary signature packaging" },
            { Icon: Package, t: "Free Shipping", d: "On orders above PKR 5,000" },
            { Icon: Sparkles, t: "Personal Message", d: "Handwritten note included" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="border border-border p-6 text-center">
              <Icon className="h-6 w-6 text-[var(--gold)] mx-auto" />
              <h3 className="serif text-xl mt-3">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>

        {under10k.length > 0 && (
          <>
            <h2 className="serif text-3xl mb-6">Gifts Under PKR 10,000</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {under10k.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-card">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-background/95 text-xs px-2 py-1 uppercase tracking-wider">Under PKR 10k</span>
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
          </>
        )}

        <h2 className="serif text-3xl mb-6">All Gift Ideas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {giftProducts.map((p) => (
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

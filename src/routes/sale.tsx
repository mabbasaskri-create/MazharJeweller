import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Percent, Clock, Tag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, pkr } from "@/lib/products";

export const Route = createFileRoute("/sale")({
  head: () => ({
    meta: [
      { title: "Sale — Sparkle·PK Pakistan" },
      { name: "description", content: "Shop crystal jewelry, watches and décor at discounted prices in Pakistan. Limited-time offers across all categories." },
    ],
  }),
  component: SalePage,
});

function SalePage() {
  const saleProducts = products.filter((p) => p.oldPrice);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-destructive/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <Percent className="h-8 w-8 mx-auto text-destructive" />
          <h1 className="serif text-5xl md:text-6xl mt-4">Sale</h1>
          <p className="mt-3 text-muted-foreground">Limited-time offers on our most-loved pieces</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Percent, t: "Up to 20% Off", d: "On selected collections" },
            { Icon: Clock, t: "Limited Time", d: "While stock lasts" },
            { Icon: Tag, t: "Extra Gifts", d: "Free pouch on sale items" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="border border-border p-6 text-center">
              <Icon className="h-6 w-6 text-destructive mx-auto" />
              <h3 className="serif text-xl mt-3">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>

        {saleProducts.length === 0 ? (
          <div className="text-center py-20 border border-border">
            <h2 className="serif text-3xl mb-4">No Sales Right Now</h2>
            <p className="text-muted-foreground">Sign up for our newsletter to be first to know about upcoming sales and Eid promotions.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {saleProducts.map((p) => {
              const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
              return (
                <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-card">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs px-2 py-1 uppercase tracking-wider">-{discount}%</span>
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
              );
            })}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

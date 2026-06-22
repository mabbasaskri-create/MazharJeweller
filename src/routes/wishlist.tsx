import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, pkr } from "@/lib/products";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "My Wishlist — Sparkle·PK" },
      { name: "description", content: "View your saved crystal jewellery pieces in Pakistan." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const wishlistItems = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="serif text-4xl md:text-5xl flex items-center gap-3">
          <Heart className="h-8 w-8" /> My Wishlist
        </h1>
        <p className="text-muted-foreground mt-2">{wishlistItems.length} items saved</p>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h2 className="serif text-3xl mt-6">Your wishlist is empty</h2>
            <p className="text-muted-foreground mt-2">Save your favourite pieces here.</p>
            <Link to="/" className="mt-6 inline-block bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider">Explore Products</Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
            {wishlistItems.map((p) => (
              <div key={p.slug} className="group bg-card border border-border">
                <Link to={`/products/${p.slug}`}>
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {p.tag && <span className="absolute top-3 left-3 bg-background/95 text-xs px-2 py-1 uppercase tracking-wider">{p.tag}</span>}
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/products/${p.slug}`}>
                    <h3 className="text-sm font-medium">{p.name}</h3>
                  </Link>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm">{pkr(p.price)}</span>
                    {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{pkr(p.oldPrice)}</span>}
                  </div>
                  <button className="mt-3 w-full border border-border px-3 py-2 text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-secondary">
                    <ShoppingBag className="h-3 w-3" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { categories, products, pkr } from "@/lib/products";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params: { slug } }) => {
    const cat = categories.find((c) => c.slug === slug);
    if (!cat) throw notFound();
    const catProducts = products.filter((p) => p.category === slug);
    return { category: cat, products: catProducts };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.category.title} — Sparkle·PK` },
      { name: "description", content: `Shop our collection of ${loaderData.category.title.toLowerCase()} in Pakistan. Premium crystal jewelry with nationwide delivery.` },
    ],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl">404</h1>
        <p className="mt-4 text-muted-foreground">Category not found</p>
        <Link to="/" className="mt-6 inline-block underline">Back to Home</Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { category, products: catProducts } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="serif text-5xl md:text-6xl">{category.title}</h1>
          <p className="mt-3 text-muted-foreground">Discover our {category.title.toLowerCase()} collection</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">{category.title}</span>
        </div>

        {catProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="serif text-3xl mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">New {category.title.toLowerCase()} are being crafted. Stay tuned.</p>
            <Link to="/" className="mt-6 inline-block bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider">Back to Home</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {catProducts.map((p) => (
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

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, ShoppingBag, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProductBySlug, pkr } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params: { slug } }) => {
    const product = getProductBySlug(slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.name} — Sparkle·PK` },
      { name: "description", content: loaderData.description },
    ],
  }),
  component: ProductDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl">404</h1>
        <p className="mt-4 text-muted-foreground">Product not found</p>
        <Link to="/" className="mt-6 inline-block underline">Back to Home</Link>
      </div>
    </div>
  ),
});

function ProductDetailPage() {
  const product = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${product.category}`} className="hover:text-foreground capitalize">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 grid md:grid-cols-2 gap-12">
        <div className="aspect-square overflow-hidden bg-[var(--blush)]">
          <img src={product.img} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          {product.tag && (
            <span className="text-xs uppercase tracking-wider text-[var(--gold)] mb-2">{product.tag}</span>
          )}
          <h1 className="serif text-4xl md:text-5xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl">{pkr(product.price)}</span>
            {product.oldPrice && (
              <span className="text-lg text-muted-foreground line-through">{pkr(product.oldPrice)}</span>
            )}
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          <hr className="my-6 border-border" />

          <h3 className="font-medium uppercase text-xs tracking-wider mb-3">Details</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[var(--gold)] mt-0.5">✦</span>
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <button className="flex-1 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
            <button aria-label="Wishlist" className="border border-border px-4 py-3">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs">
            <div>
              <Truck className="h-5 w-5 mx-auto text-[var(--gold)]" />
              <p className="mt-2">Free shipping on orders over PKR 5,000</p>
            </div>
            <div>
              <ShieldCheck className="h-5 w-5 mx-auto text-[var(--gold)]" />
              <p className="mt-2">100% authentic crystal</p>
            </div>
            <div>
              <RotateCcw className="h-5 w-5 mx-auto text-[var(--gold)]" />
              <p className="mt-2">14-day returns</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

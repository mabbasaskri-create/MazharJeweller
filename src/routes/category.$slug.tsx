import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { categoryMeta, getProductsByCategory, products } from "@/lib/products";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params: { slug } }) => {
    const meta = categoryMeta[slug];
    if (!meta) throw notFound();
    const catProducts = getProductsByCategory(slug);
    return { meta, products: catProducts, slug };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.meta.title} — Mazhar Jeweller` },
      { name: "description", content: loaderData.meta.desc },
    ],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-serif">404</h1>
        <p className="mt-4 text-[#6b6b6b]">Category not found</p>
        <Link to="/" className="mt-6 inline-block underline">Back to Home</Link>
      </div>
    </div>
  ),
});

const badgeColors: Record<string, string> = {
  bestseller: "#1a1a2e",
  new: "#2e7d32",
  couture: "#b8962e",
  bridal: "#8e24aa",
  "editors-pick": "#c62828",
};

function CategoryPage() {
  const { meta, products: catProducts, slug } = Route.useLoaderData();
  const ctaProduct = meta.ctaProduct ? products.find((p) => p.id === meta.ctaProduct) : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="absolute inset-0 z-0" style={{ background: meta.heroGradient }} />
        <div className="relative z-[2] max-w-7xl mx-auto px-6 text-white py-20">
          <p className="font-sans text-xs tracking-[3px] uppercase text-[#f0d68a] mb-5">{meta.subtitle}</p>
          <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-bold leading-[1.1] mb-6">
            {meta.title.includes("em") ? <span dangerouslySetInnerHTML={{ __html: meta.title }} /> : meta.title}
          </h1>
          <p className="text-base leading-relaxed opacity-90 mb-10 max-w-[540px]">{meta.desc}</p>
          <div className="flex gap-4 flex-wrap">
            {ctaProduct && (
              <Link to={`/products/${ctaProduct.slug}`} className="inline-block px-8 py-[14px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline cursor-pointer transition-all bg-[#d4af37] text-white hover:bg-[#b8962e]">
                Shop Bestsellers
              </Link>
            )}
            <a href="#products" className="inline-block px-8 py-[14px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline cursor-pointer transition-all bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1a1a2e]">
              View All
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20" style={{ paddingTop: "40px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-0">
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-[#1a1a2e]">
              All {slug === "gold-sets" ? "Gold Sets" : slug === "rings" ? "Rings" : slug === "necklaces" ? "Necklaces" : "Earrings"}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {catProducts.map((p) => (
              <div key={p.slug} className="relative transition-transform hover:-translate-y-0.5">
                <Link to={`/products/${p.slug}`} className="block no-underline text-inherit">
                  <div className="h-80 rounded-sm mb-4" style={{ background: p.gradient }} />
                  {p.badge && (
                    <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[1px] px-3 py-1.5 rounded-sm text-white" style={{ background: badgeColors[p.badgeClass!] || "#1a1a2e" }}>
                      {p.badge}
                    </span>
                  )}
                  <span className="text-[11px] font-medium uppercase tracking-[1px] text-[#6b6b6b]">{p.category}</span>
                  <h3 className="font-serif text-xl font-semibold mt-1 mb-2 text-[#1a1a2e]">{p.name}</h3>
                  <p className="text-base font-semibold text-[#2c2c2c] mb-3">{p.price}</p>
                </Link>
                <button className="w-full py-3 bg-[#1a1a2e] text-white border-none text-xs font-semibold uppercase tracking-[1px] cursor-pointer transition-all rounded-sm hover:bg-[#d4af37]">
                  Add to bag
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

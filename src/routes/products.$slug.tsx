import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProductBySlug, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params: { slug } }) => {
    const product = getProductBySlug(slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.name} — Mazhar Jeweller` },
      { name: "description", content: loaderData.desc },
    ],
  }),
  component: ProductDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-serif">404</h1>
        <p className="mt-4 text-[#6b6b6b]">Product not found</p>
        <Link to="/" className="mt-6 inline-block underline">Back to Home</Link>
      </div>
    </div>
  ),
});

const palettes = [
  ["#e8e0d0", "#d4c9b5"],
  ["#d4af37", "#c5a028"],
  ["#c9b99a", "#b8a88a"],
  ["#a0845c", "#8d714a"],
  ["#b8b8c8", "#9a9aaa"],
  ["#2d2d44", "#1a1a2e"],
];

function generateGalleryGradients(product: { name: string; gradient: string }): string[] {
  const seed = product.name.length % palettes.length;
  const grads: string[] = [];
  for (let i = 0; i < 4; i++) {
    const p = palettes[(seed + i) % palettes.length];
    grads.push(`linear-gradient(135deg, ${p[0]}, ${p[1]})`);
  }
  grads[0] = product.gradient;
  return grads;
}

const badgeColors: Record<string, string> = {
  bestseller: "#1a1a2e",
  new: "#2e7d32",
  couture: "#b8962e",
  bridal: "#8e24aa",
  "editors-pick": "#c62828",
};

const categoryLinkLabels: Record<string, string> = {
  rings: "All Rings",
  necklaces: "All Necklaces",
  "gold-sets": "All Gold Sets",
  earrings: "All Earrings",
};

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState("Gold");
  const [quantity, setQuantity] = useState(1);

  const gradients = generateGalleryGradients(product);

  const colorMap = [
    { name: "Gold", value: "#d4af37" },
    { name: "Rose Gold", value: "#e8a898" },
    { name: "White Gold", value: "#c0c0c0" },
    { name: "Platinum", value: "#8a8a8a" },
  ];

  const related = products
    .filter((p) => p.link === product.link && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-[60px] pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="md:sticky md:top-[100px]">
            <div
              className="w-full h-[500px] rounded-sm mb-4 transition-[background_0.4s_ease]"
              style={{ background: gradients[galleryIndex] }}
            />
            <div className="flex gap-3">
              {gradients.map((g, i) => (
                <div
                  key={i}
                  className={`w-[84px] h-[84px] rounded-sm cursor-pointer transition-[opacity_0.3s,border-color_0.3s] border-2 ${i === galleryIndex ? "border-[#d4af37] opacity-100" : "border-transparent opacity-50 hover:opacity-80"}`}
                  style={{ background: g }}
                  onClick={() => setGalleryIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pt-0">
            <Link to={`/category/${product.link}`} className="inline-block text-[13px] font-medium text-[#6b6b6b] no-underline mb-6 hover:text-[#d4af37] transition">
              &larr; Back to {categoryLinkLabels[product.link] || "Collection"}
            </Link>

            {product.badge && (
              <div
                className="inline-block text-[10px] font-semibold uppercase tracking-[1px] px-3 py-1.5 rounded-sm text-white mb-3"
                style={{ background: badgeColors[product.badgeClass!] || "#1a1a2e" }}
              >
                {product.badge}
            </div>
            )}

            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-[#6b6b6b] mb-2">{product.category}</p>
            <h1 className="font-serif text-[clamp(28px,3.5vw,40px)] font-semibold text-[#1a1a2e] mb-3 leading-[1.2]">{product.name}</h1>
            <p className="text-2xl font-semibold text-[#b8962e] mb-5">{product.price}</p>
            <p className="text-[15px] leading-relaxed text-[#6b6b6b] mb-8 pb-8 border-b border-[#e8e0d0]">{product.desc}</p>

            {/* Size */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-[1px] text-[#2c2c2c] mb-2.5">
                Size <span className="font-normal normal-case tracking-normal text-[#6b6b6b] ml-2">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[48px] px-[18px] py-2.5 border font-sans text-[13px] text-[#2c2c2c] cursor-pointer rounded-sm transition-all ${
                      selectedSize === s
                        ? "border-[#1a1a2e] bg-[#1a1a2e] text-white"
                        : "border-[#e8e0d0] bg-white hover:border-[#d4af37] hover:text-[#d4af37]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-[1px] text-[#2c2c2c] mb-2.5">Colour</label>
              <div className="flex flex-wrap gap-2">
                {colorMap.map((c) => (
                  <button
                    key={c.name}
                    title={c.name}
                    aria-label={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-9 h-9 rounded-full border-2 cursor-pointer transition-all outline-none ${
                      selectedColor === c.name
                        ? "border-[#1a1a2e] shadow-[0_0_0_2px_white,0_0_0_4px_#1a1a2e]"
                        : "border-transparent hover:scale-110"
                    }`}
                    style={{ background: c.value }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-[1px] text-[#2c2c2c] mb-2.5">Quantity</label>
              <div className="inline-flex items-center border border-[#e8e0d0] rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 border-none bg-transparent text-lg cursor-pointer text-[#2c2c2c] font-sans hover:bg-[#faf6f0] transition"
                >
                  &minus;
                </button>
                <span className="w-12 text-center text-base font-medium border-x border-[#e8e0d0] leading-[44px]">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-11 h-11 border-none bg-transparent text-lg cursor-pointer text-[#2c2c2c] font-sans hover:bg-[#faf6f0] transition"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full py-4 px-8 text-sm font-semibold tracking-[1.5px] uppercase cursor-pointer transition-all bg-[#d4af37] text-white border-none hover:bg-[#b8962e] mt-4">
              Add to Bag
            </button>
            <p className="text-xs text-[#6b6b6b] text-center mt-3">Complimentary nationwide shipping on orders above PKR 150,000</p>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#faf6f0]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-center pt-20 mb-0 text-[#1a1a2e]">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-20">
              {related.map((p) => (
                <div key={p.slug} className="bg-white p-4 rounded-sm relative transition-transform hover:-translate-y-0.5">
                  <Link to={`/products/${p.slug}`} className="block no-underline text-inherit">
                    <div className="h-[260px] rounded-sm mb-4" style={{ background: p.gradient }} />
                    {p.badge && (
                      <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[1px] px-3 py-1.5 rounded-sm text-white" style={{ background: badgeColors[p.badgeClass!] || "#1a1a2e" }}>
                        {p.badge}
                      </span>
                    )}
                    <span className="text-[11px] font-medium uppercase tracking-[1px] text-[#6b6b6b]">{p.category}</span>
                    <h3 className="font-serif text-xl font-semibold mt-1 mb-2 text-[#1a1a2e]">{p.name}</h3>
                    <p className="text-base font-semibold text-[#2c2c2c] mb-3">{p.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

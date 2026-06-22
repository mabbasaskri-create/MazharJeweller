import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { featured, categories, products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mazhar Jeweller — Heirlooms forged in gold & light" },
      { name: "description", content: "Three generations of master craftsmanship. Discover diamond and gold jewellery handcrafted in Hyderabad." },
    ],
  }),
  component: Index,
});

const badgeColors: Record<string, string> = {
  bestseller: "#1a1a2e",
  new: "#2e7d32",
  couture: "#b8962e",
  bridal: "#8e24aa",
  "editors-pick": "#c62828",
};

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#2c2c2c]">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }} />
        <div className="relative z-[2] max-w-7xl mx-auto px-6 text-white py-20">
          <p className="font-sans text-xs tracking-[3px] uppercase text-[#f0d68a] mb-5">Maison Mazhar · Est. 1962</p>
          <h1 className="font-serif text-[clamp(48px,7vw,80px)] font-bold leading-[1.1] mb-6">
            Heirlooms <em className="italic text-[#d4af37] not-italic">forged</em> in gold & light.
          </h1>
          <p className="text-base leading-relaxed opacity-90 mb-10 max-w-[540px]">
            Sixty years of master craftsmanship, married to a contemporary eye. Discover pieces designed to be worn, loved and inherited.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/category/gold-sets" className="inline-block px-8 py-[14px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline cursor-pointer transition-all bg-[#d4af37] text-white hover:bg-[#b8962e]">
              Shop Bridal
            </Link>
            <Link to="/category/rings" className="inline-block px-8 py-[14px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline cursor-pointer transition-all bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1a1a2e]">
              Diamond Rings
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-[#e8e0d0]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#e8e0d0]">
          {["Lifetime Authenticity", "Complimentary Shipping", "Hallmarked 22k Gold", "GIA Certified Diamonds"].map((t) => (
            <div key={t} className="bg-white py-5 px-6 text-center text-[13px] font-medium text-[#2c2c2c] tracking-[0.5px]">
              <span className="text-[#d4af37] mr-2 text-sm">&#10003;</span>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-center mb-12 text-[#1a1a2e]">
            Curated for the connoisseur
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "The Bridal Atelier", desc: "Couture sets crafted for the most luminous day.", link: "/category/gold-sets", gradient: "linear-gradient(135deg, #d4af37, #b8962e)" },
              { num: "02", title: "Diamond Sanctum", desc: "Solitaires, halos and pavé brilliance.", link: "/category/rings", gradient: "linear-gradient(135deg, #2d2d44, #1a1a2e)" },
              { num: "03", title: "Heritage Gold", desc: "Polki, bridal sets and heritage gold ensembles.", link: "/category/gold-sets", gradient: "linear-gradient(135deg, #b8860b, #8b6914)" },
            ].map((c) => (
              <Link key={c.num} to={c.link} className="bg-white overflow-hidden transition-transform hover:-translate-y-1 no-underline text-inherit">
                <div className="h-[300px] flex items-start justify-start p-6" style={{ background: c.gradient }}>
                  <span className="font-serif text-[48px] font-bold text-white/30">{c.num}</span>
                </div>
                <h3 className="font-serif text-[22px] font-semibold px-6 pt-5 pb-2 text-[#1a1a2e]">{c.title}</h3>
                <p className="text-sm text-[#6b6b6b] px-6 pb-4 leading-relaxed">{c.desc}</p>
                <span className="inline-block px-6 pb-6 text-xs font-semibold uppercase tracking-[1.5px] text-[#d4af37] no-underline transition-all hover:pl-7">Discover</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-0">
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-center text-[#1a1a2e]">The Atelier's Favourites</h2>
            <Link to="/category/gold-sets" className="text-[13px] font-medium uppercase tracking-[1px] text-[#2c2c2c] no-underline border-b border-[#2c2c2c] pb-0.5 hover:text-[#d4af37] hover:border-[#d4af37] transition">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {featured.map((p) => (
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

      {/* Story */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] rounded-sm" style={{ background: "linear-gradient(135deg, #d4af37, #1a1a2e)" }} />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#d4af37] mb-4">Three Generations</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-semibold leading-[1.2] mb-5 text-[#1a1a2e]">
              A maison built on patience, precision and poetry.
            </h2>
            <p className="text-[15px] leading-relaxed text-[#6b6b6b] mb-8">
              From a single workshop in Hyderabad to ateliers serving connoisseurs across the world, Mazhar has spent six decades perfecting an art that refuses shortcuts. Every setting is hand-engraved. Every stone is read for fire before it is placed.
            </p>
            <div className="flex gap-12 mb-8">
              {[{ num: "62", label: "Years of craft" }, { num: "47k+", label: "Heirlooms placed" }, { num: "12", label: "Master karigars" }].map((s) => (
                <div key={s.label}>
                  <span className="font-serif text-[36px] font-bold text-[#d4af37]">{s.num}</span>
                  <span className="block text-[13px] text-[#6b6b6b] mt-1">{s.label}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block px-8 py-[14px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline cursor-pointer transition-all bg-[#d4af37] text-white hover:bg-[#b8962e]">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-center mb-12 text-[#1a1a2e]">Worn with love. Treasured forever.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "My bridal set was beyond perfection. Mazhar turned a dream into an heirloom my daughters will wear.", author: "Anaya R.", role: "Bride · Mumbai" },
              { quote: "The craftsmanship rivals any maison in Paris. The diamonds sing in the light.", author: "Imran S.", role: "Collector · Dubai" },
              { quote: "Every piece arrives like a love letter — the box, the velvet, the brilliance. Unforgettable.", author: "Priya M.", role: "Patron · London" },
            ].map((t) => (
              <div key={t.author} className="bg-[#faf6f0] p-10 rounded-sm text-center">
                <div className="text-[#d4af37] text-lg mb-4">★★★★★</div>
                <blockquote className="font-serif text-lg italic leading-relaxed text-[#2c2c2c] mb-5">"{t.quote}"</blockquote>
                <p className="font-semibold text-[15px] text-[#1a1a2e]">{t.author}</p>
                <p className="text-xs text-[#6b6b6b] mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 bg-[#faf6f0] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[13px] font-medium text-[#d4af37] tracking-[1px] mb-2">@mazharjeweller</p>
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-center mb-12 text-[#1a1a2e]">Follow the Maison</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-[800px] mx-auto">
            {["#d4af37", "#c9a96e", "#2d2d44", "#b8860b", "#e8e0d0", "#a0845c"].map((c, i) => (
              <div key={i} className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition" style={{ background: `linear-gradient(135deg, ${c}, ${["#b8962e", "#a0845c", "#1a1a2e", "#8b6914", "#d4c9b5", "#8d714a"][i]})` }} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#1a1a2e] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold mb-3">Private invitations & new arrivals</h2>
          <p className="text-[15px] text-white/70 mb-8">Be the first to discover seasonal collections, bespoke commissions and atelier events.</p>
          <form className="flex max-w-[480px] mx-auto gap-0" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Enter your email" className="flex-1 px-5 py-[14px] border-none text-sm font-sans outline-none" />
            <button type="submit" className="px-7 py-[14px] text-[13px] font-semibold tracking-[1.5px] uppercase cursor-pointer transition-all bg-[#d4af37] text-white hover:bg-[#b8962e] border-none">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

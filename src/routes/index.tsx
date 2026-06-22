import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Truck, ShieldCheck, Phone, Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { featured, categories, pkr } from "@/lib/products";
import hero from "@/assets/hero.jpg";
import ring from "@/assets/ring.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparkle Pakistan — Crystal Jewelry, Watches & Gifts in PKR" },
      { name: "description", content: "Shop premium crystal jewelry, watches and home décor in Pakistan. Cash on delivery, EasyPaisa & JazzCash accepted." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative">
        <img src={hero} alt="Crystal jewelry collection Pakistan" width={1600} height={1024} className="w-full h-[60vh] sm:h-[70vh] md:h-[85vh] object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-6 w-full pb-6 md:pb-0">
            <div className="md:max-w-xl bg-background/90 backdrop-blur-sm p-6 md:p-12">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-muted-foreground">Eid & Shaadi Collection 2026</p>
              <h1 className="serif text-4xl md:text-6xl mt-3 md:mt-4 leading-[1.1]">A Story Cut in Crystal</h1>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">Handcrafted brilliance from Lahore to Karachi — now in PKR with nationwide delivery.</p>
              <div className="mt-5 md:mt-6 flex gap-2 md:gap-3">
                <Link to="/jewelry" className="bg-primary text-primary-foreground px-5 md:px-7 py-3 text-xs md:text-sm uppercase tracking-wider whitespace-nowrap">Shop Now</Link>
                <Link to="/decor" className="border border-primary px-5 md:px-7 py-3 text-xs md:text-sm uppercase tracking-wider whitespace-nowrap">Discover</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { Icon: Truck, t: "Free Shipping", s: "Orders above PKR 5,000" },
            { Icon: ShieldCheck, t: "100% Authentic", s: "Crystal guarantee" },
            { Icon: ShoppingBag, t: "COD Available", s: "Pay on delivery" },
            { Icon: Phone, t: "Help Centre", s: "+92 21 111 SPARK" },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <Icon className="h-6 w-6 text-[var(--gold)]" />
              <p className="text-sm font-medium">{t}</p>
              <p className="text-xs text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="jewelry" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Explore</p>
          <h2 className="serif text-4xl md:text-5xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <Link key={c.title} to={`/category/${c.slug}`} className="group">
              <div className="aspect-square overflow-hidden bg-[var(--blush)]">
                <img src={c.img} alt={c.title} loading="lazy" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="mt-3 text-center text-sm uppercase tracking-wider">{c.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="bg-[var(--blush)]/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Bestsellers</p>
              <h2 className="serif text-4xl md:text-5xl mt-2">Loved Across Pakistan</h2>
            </div>
            <Link to="/jewelry" className="hidden md:block text-sm uppercase tracking-wider underline underline-offset-4">View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <Link key={p.name} to={`/products/${p.slug}`} className="group bg-card">
                <article>
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {p.tag && (
                      <span className="absolute top-3 left-3 bg-background/95 text-xs px-2 py-1 uppercase tracking-wider">{p.tag}</span>
                    )}
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
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial / Story */}
      <section id="story" className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] overflow-hidden bg-[var(--blush)]">
          <img src={ring} alt="Bridal collection" loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Bridal Edit</p>
          <h2 className="serif text-4xl md:text-5xl mt-3">For the Mehndi, Baraat & Walima</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">From the first dholki to the final rukhsati — every shaadi moment deserves heirloom brilliance. Our bridal sets are designed in Pakistan, paired with timeless craftsmanship and shipped to your doorstep across all 4 provinces.</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>• Complimentary gift wrapping</li>
            <li>• 14-day exchange across Pakistan</li>
            <li>• Personal styling on WhatsApp</li>
          </ul>
          <Link to="/jewelry" className="mt-8 inline-block bg-primary text-primary-foreground px-7 py-3 text-sm uppercase tracking-wider">Explore Bridal</Link>
        </div>
      </section>

      {/* Stores */}
      <section id="stores" className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] opacity-70">Visit Us</p>
          <h2 className="serif text-4xl md:text-5xl mt-2">Our Boutiques in Pakistan</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { city: "Karachi", addr: "Dolmen Mall Clifton, Block 4", phone: "+92 21 3456 7890" },
              { city: "Lahore", addr: "Emporium Mall, Johar Town", phone: "+92 42 3578 9012" },
              { city: "Islamabad", addr: "Centaurus Mall, F-8", phone: "+92 51 2345 6789" },
            ].map((s) => (
              <div key={s.city} className="border border-primary-foreground/20 p-8">
                <h3 className="serif text-2xl">{s.city}</h3>
                <p className="mt-3 text-sm opacity-80">{s.addr}</p>
                <p className="mt-1 text-sm opacity-80">{s.phone}</p>
                <p className="mt-4 text-xs uppercase tracking-wider opacity-60">Mon–Sun · 11am – 10pm</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="serif text-4xl">Join the Sparkle List</h2>
        <p className="mt-3 text-muted-foreground">Be first to know about new collections, Eid drops and exclusive previews.</p>
        <form className="mt-6 flex gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" required placeholder="your@email.com" className="flex-1 border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          <button className="bg-primary text-primary-foreground px-6 text-sm uppercase tracking-wider">Subscribe</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/stores")({
  head: () => ({
    meta: [
      { title: "Store Locations — Sparkle·PK" },
      { name: "description", content: "Visit our boutiques in Karachi, Lahore and Islamabad. Premium crystal jewelry and décor." },
    ],
  }),
  component: StoresPage,
});

const stores = [
  { city: "Karachi", addr: "Dolmen Mall Clifton, Block 4", phone: "+92 21 3456 7890", hours: "Mon–Sun · 11am – 10pm" },
  { city: "Lahore", addr: "Emporium Mall, Johar Town", phone: "+92 42 3578 9012", hours: "Mon–Sun · 11am – 10pm" },
  { city: "Islamabad", addr: "Centaurus Mall, F-8", phone: "+92 51 2345 6789", hours: "Mon–Sun · 11am – 10pm" },
];

function StoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <MapPin className="h-8 w-8 mx-auto text-[var(--gold)]" />
          <h1 className="serif text-5xl md:text-6xl mt-4">Our Boutiques</h1>
          <p className="mt-3 text-muted-foreground">Visit us in person across Pakistan</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stores.map((s) => (
            <div key={s.city} className="border border-border p-8 text-center">
              <MapPin className="h-8 w-8 mx-auto text-[var(--gold)]" />
              <h2 className="serif text-3xl mt-4">{s.city}</h2>
              <p className="mt-3 text-muted-foreground text-sm">{s.addr}</p>
              <p className="mt-1 text-sm flex items-center justify-center gap-2"><Phone className="h-3 w-3" /> {s.phone}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-2"><Clock className="h-3 w-3" /> {s.hours}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary p-8 text-center">
          <h2 className="serif text-3xl">Need Help Finding Us?</h2>
          <p className="text-muted-foreground mt-3">Call or WhatsApp our store team for directions.</p>
          <a href="https://wa.me/923001234567" className="mt-6 inline-block bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider">WhatsApp Us</a>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-muted-foreground underline">← Back to Home</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

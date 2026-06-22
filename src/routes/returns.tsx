import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotateCcw, CheckCircle2, XCircle, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Returns & Exchange Policy — Sparkle·PK" },
      { name: "description", content: "14-day easy returns and exchanges across Pakistan. Free reverse pickup in major cities." },
    ],
  }),
  component: ReturnsPage,
});

function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <header className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <Link to="/" className="serif text-2xl tracking-[0.25em]">SPARKLE·PK</Link>
          <h1 className="serif text-5xl md:text-6xl mt-6">Returns & Exchange</h1>
          <p className="mt-3 text-muted-foreground">14-day peace of mind, nationwide</p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: RotateCcw, t: "14-Day Window", d: "From the date of delivery" },
            { Icon: CheckCircle2, t: "Free Reverse Pickup", d: "In Karachi, Lahore & Islamabad" },
            { Icon: MessageCircle, t: "WhatsApp Support", d: "+92 300 1234567 · 11 AM – 9 PM" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="border border-border p-6 text-center">
              <Icon className="h-6 w-6 text-[var(--gold)] mx-auto" />
              <h3 className="serif text-xl mt-3">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="serif text-3xl mb-4">How It Works</h2>
        <ol className="space-y-4 mb-16">
          {[
            "WhatsApp us at +92 300 1234567 or email care@sparkle.pk within 14 days of delivery with your order number.",
            "Our team will arrange a free reverse pickup in Karachi, Lahore, Islamabad and Rawalpindi. Other cities: drop at your nearest TCS / Leopards office (we reimburse up to PKR 350).",
            "Pack the item in its original box with tags, invoice and authenticity card intact.",
            "Once received and inspected at our Karachi warehouse (2–3 working days), we issue your exchange or refund.",
            "Refunds: EasyPaisa / JazzCash within 3 working days · Bank transfer within 5–7 working days · COD orders refunded via bank transfer.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4 border-b border-border pb-4">
              <span className="serif text-3xl text-[var(--gold)] w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-muted-foreground pt-1">{step}</p>
            </li>
          ))}
        </ol>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <h3 className="serif text-2xl">Eligible for Return</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Unworn items with original packaging & tags</li>
              <li>• Authenticity card and invoice included</li>
              <li>• Reported within 14 days of delivery</li>
              <li>• Damaged / wrong item received (report within 48 hours)</li>
            </ul>
          </div>
          <div className="border border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-destructive" />
              <h3 className="serif text-2xl">Not Eligible</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pierced earrings (hygiene reasons)</li>
              <li>• Engraved or customised bridal pieces</li>
              <li>• Items marked "Final Sale" or Eid clearance</li>
              <li>• Gift cards and promotional items</li>
            </ul>
          </div>
        </div>

        <h2 className="serif text-3xl mb-4">Exchanges</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Want a different size, design or colour? Exchanges are free across Pakistan for the first request. We'll cover both pickup and re-delivery if processed within 14 days. Price differences (if any) can be paid via EasyPaisa, JazzCash, bank transfer or card.
        </p>

        <h2 className="serif text-3xl mb-4 mt-12">Damaged or Wrong Item</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Please unbox on camera if possible and report any damage or wrong item within <strong>48 hours</strong> of delivery on WhatsApp +92 300 1234567. We'll arrange immediate replacement at no cost — this is our Sparkle Promise.
        </p>

        <div className="mt-16 bg-[var(--blush)]/40 p-8 text-center">
          <h3 className="serif text-2xl">Need help with a return?</h3>
          <p className="text-muted-foreground mt-2">Our team in Karachi is here Mon–Sat, 11 AM – 9 PM (PKT).</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/923001234567" className="bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider">WhatsApp Us</a>
            <a href="mailto:care@sparkle.pk" className="border border-primary px-6 py-3 text-sm uppercase tracking-wider">care@sparkle.pk</a>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex items-center justify-between text-sm">
          <Link to="/shipping" className="underline">← Shipping & Delivery</Link>
          <Link to="/" className="underline">Back to home →</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

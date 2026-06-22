import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, HelpCircle, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Centre — Sparkle·PK" },
      { name: "description", content: "Get help with your Sparkle Pakistan order. Shipping, returns, payment and FAQs." },
    ],
  }),
  component: HelpPage,
});

const faqs = [
  { q: "How long does delivery take?", a: "Standard delivery takes 1–7 working days nationwide. Same-day delivery is available in Karachi, Lahore and Islamabad if you order before 1 PM." },
  { q: "What payment methods do you accept?", a: "We accept Cash on Delivery, EasyPaisa, JazzCash, bank transfer and debit/credit cards." },
  { q: "Can I return or exchange an item?", a: "Yes, we offer a 14-day return and exchange policy. Items must be unworn with original packaging." },
  { q: "Do you offer free shipping?", a: "Free shipping is available on all prepaid orders above PKR 5,000 across Pakistan." },
  { q: "How do I track my order?", a: "A tracking number is shared via SMS and email once your order is dispatched." },
];

function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <HelpCircle className="h-8 w-8 mx-auto text-[var(--gold)]" />
          <h1 className="serif text-5xl md:text-6xl mt-4">Help Centre</h1>
          <p className="mt-3 text-muted-foreground">We're here to help — 7 days a week</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: MessageCircle, t: "WhatsApp", d: "+92 300 1234567", a: "https://wa.me/923001234567" },
            { Icon: Mail, t: "Email", d: "care@sparkle.pk", a: "mailto:care@sparkle.pk" },
            { Icon: Phone, t: "Phone", d: "+92 21 111 SPARK", a: "tel:+922111177275" },
          ].map(({ Icon, t, d, a }) => (
            <a key={t} href={a} className="border border-border p-6 text-center hover:bg-secondary transition">
              <Icon className="h-6 w-6 text-[var(--gold)] mx-auto" />
              <h3 className="serif text-xl mt-3">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Truck, t: "Shipping Info", d: "Nationwide delivery details", to: "/shipping" },
            { Icon: RotateCcw, t: "Returns & Exchange", d: "14-day return policy", to: "/returns" },
            { Icon: ShieldCheck, t: "Payment", d: "COD, EasyPaisa & more", to: "/cart" },
          ].map(({ Icon, t, d, to }) => (
            <Link key={t} to={to} className="border border-border p-6 text-center hover:bg-secondary transition">
              <Icon className="h-6 w-6 text-[var(--gold)] mx-auto" />
              <h3 className="serif text-xl mt-3">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </Link>
          ))}
        </div>

        <h2 className="serif text-3xl mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-border group">
              <summary className="p-4 cursor-pointer text-sm font-medium flex items-center justify-between">
                {faq.q}
              </summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground">{faq.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-muted-foreground underline">← Back to Home</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

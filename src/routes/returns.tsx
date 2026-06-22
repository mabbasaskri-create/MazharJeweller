import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotateCcw, CheckCircle2, XCircle, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Returns & Exchange Policy — Mazhar Jeweller" },
      { name: "description", content: "14-day easy returns and exchanges. Our commitment to your satisfaction." },
    ],
  }),
  component: ReturnsPage,
});

function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white text-[#2c2c2c]">
      <Header />
      <section className="bg-[#faf6f0] border-b border-[#e8e0d0]">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a2e]">Returns & Exchange</h1>
          <p className="mt-3 text-[#6b6b6b]">14-day peace of mind, nationwide</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: RotateCcw, t: "14-Day Window", d: "From the date of delivery" },
            { Icon: CheckCircle2, t: "Free Reverse Pickup", d: "In all serviceable cities" },
            { Icon: MessageCircle, t: "WhatsApp Support", d: "+91 98 4500 1962" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="border border-[#e8e0d0] p-6 text-center">
              <Icon className="h-6 w-6 text-[#d4af37] mx-auto" />
              <h3 className="font-serif text-xl mt-3 text-[#1a1a2e]">{t}</h3>
              <p className="text-sm text-[#6b6b6b] mt-1">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-3xl mb-4 text-[#1a1a2e]">How It Works</h2>
        <ol className="space-y-4 mb-16">
          {[
            "Contact us at atelier@mazhar.com or WhatsApp +91 98 4500 1962 within 14 days of delivery with your order number.",
            "Our team will arrange a free reverse pickup. Pack the item in its original box with tags and certificate of authenticity.",
            "Once received and inspected at our Hyderabad atelier (2–3 working days), we issue your exchange or refund.",
            "Refunds processed within 5–7 working days via bank transfer.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4 border-b border-[#e8e0d0] pb-4">
              <span className="font-serif text-3xl text-[#d4af37] w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-[#6b6b6b] pt-1">{step}</p>
            </li>
          ))}
        </ol>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-[#e8e0d0] p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <h3 className="font-serif text-2xl text-[#1a1a2e]">Eligible for Return</h3>
            </div>
            <ul className="space-y-2 text-sm text-[#6b6b6b]">
              <li>• Unworn items with original packaging & tags</li>
              <li>• Certificate of authenticity and invoice included</li>
              <li>• Reported within 14 days of delivery</li>
              <li>• Damaged / wrong item received (report within 48 hours)</li>
            </ul>
          </div>
          <div className="border border-[#e8e0d0] p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-red-500" />
              <h3 className="font-serif text-2xl text-[#1a1a2e]">Not Eligible</h3>
            </div>
            <ul className="space-y-2 text-sm text-[#6b6b6b]">
              <li>• Pierced earrings (hygiene reasons)</li>
              <li>• Engraved or customised bridal pieces</li>
              <li>• Items marked "Final Sale"</li>
              <li>• Gift cards and promotional items</li>
            </ul>
          </div>
        </div>

        <h2 className="font-serif text-3xl mb-4 text-[#1a1a2e]">Exchanges</h2>
        <p className="text-[#6b6b6b] mb-4 leading-relaxed">
          Want a different size, design or colour? Exchanges are free for the first request. We cover both pickup and re-delivery if processed within 14 days. Price differences can be paid via bank transfer.
        </p>

        <h2 className="font-serif text-3xl mb-4 mt-12 text-[#1a1a2e]">Damaged or Wrong Item</h2>
        <p className="text-[#6b6b6b] mb-4 leading-relaxed">
          Please report any damage or wrong item within <strong>48 hours</strong> of delivery on WhatsApp +91 98 4500 1962. We will arrange immediate replacement at no cost.
        </p>

        <div className="mt-16 bg-[#faf6f0] p-8 text-center">
          <h3 className="font-serif text-2xl text-[#1a1a2e]">Need help with a return?</h3>
          <p className="text-[#6b6b6b] mt-2">Our team in Hyderabad is here Mon–Sat, 10 AM – 7 PM.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="mailto:atelier@mazhar.com" className="inline-block px-6 py-3 text-sm uppercase tracking-wider bg-[#d4af37] text-white hover:bg-[#b8962e]">Email Us</a>
            <Link to="/" className="border border-[#1a1a2e] px-6 py-3 text-sm uppercase tracking-wider text-[#1a1a2e] no-underline hover:bg-[#1a1a2e] hover:text-white transition">Back to Home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

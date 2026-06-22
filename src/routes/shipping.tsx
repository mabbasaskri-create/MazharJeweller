import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, Clock, MapPin, Package } from "lucide-react";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery — Mazhar Jeweller" },
      { name: "description", content: "Nationwide delivery across India. Free shipping on orders above PKR 150,000." },
    ],
  }),
  component: ShippingPage,
});

const options = [
  { Icon: Clock, title: "Same-Day Delivery", desc: "Order before 1 PM in Hyderabad & Mumbai." },
  { Icon: Truck, title: "Standard Shipping", desc: "1–7 working days nationwide via trusted couriers." },
  { Icon: Package, title: "Cash on Delivery", desc: "Pay when you receive. Available on orders up to PKR 100,000." },
  { Icon: MapPin, title: "Free Shipping", desc: "Complimentary on orders above PKR 150,000." },
];

function ShippingPage() {
  return (
    <div className="min-h-screen bg-white text-[#2c2c2c]">
      <Header />
      <section className="bg-[#faf6f0] border-b border-[#e8e0d0]">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a2e]">Shipping & Delivery</h1>
          <p className="mt-3 text-[#6b6b6b]">Bringing Mazhar to every corner of the country</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {options.map(({ Icon, title, desc }) => (
            <div key={title} className="border border-[#e8e0d0] p-6">
              <Icon className="h-6 w-6 text-[#d4af37]" />
              <h3 className="font-serif text-2xl mt-3 text-[#1a1a2e]">{title}</h3>
              <p className="text-sm text-[#6b6b6b] mt-2">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <Block title="Order Processing">
            Orders placed before 1:00 PM on working days are dispatched the same day. Orders after 1 PM, on Sundays or public holidays ship the next working day.
          </Block>
          <Block title="Courier Partners">
            We ship via trusted courier partners based on your location. A tracking number is shared after dispatch.
          </Block>
          <Block title="Cash on Delivery">
            COD is available on orders up to PKR 100,000. For higher-value or bridal orders, we recommend prepayment via bank transfer.
          </Block>
          <Block title="International Shipping">
            We currently ship within India only. For international (UAE, UK) enquiries, please email atelier@mazhar.com.
          </Block>
        </div>

        <div className="mt-16 border-t border-[#e8e0d0] pt-8 flex items-center justify-between text-sm">
          <Link to="/" className="underline text-[#1a1a2e]">← Back to home</Link>
          <Link to="/returns" className="underline text-[#1a1a2e]">Returns & Exchange →</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-serif text-2xl mb-2 text-[#1a1a2e]">{title}</h3>
      <p className="text-[#6b6b6b] leading-relaxed">{children}</p>
    </div>
  );
}

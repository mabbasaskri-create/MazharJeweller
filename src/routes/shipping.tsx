import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, Clock, MapPin, Package } from "lucide-react";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery in Pakistan — Sparkle·PK" },
      { name: "description", content: "Nationwide delivery across Pakistan. Free shipping over PKR 5,000. Same-day in Karachi, Lahore, Islamabad." },
    ],
  }),
  component: ShippingPage,
});

const zones = [
  { zone: "Metro Cities", cities: "Karachi, Lahore, Islamabad, Rawalpindi", time: "1–2 working days", fee: "PKR 250" },
  { zone: "Tier 2 Cities", cities: "Faisalabad, Multan, Peshawar, Hyderabad, Sialkot, Gujranwala", time: "2–4 working days", fee: "PKR 350" },
  { zone: "Other Cities & Towns", cities: "All other serviceable areas across Punjab, Sindh, KP & Balochistan", time: "4–7 working days", fee: "PKR 450" },
  { zone: "Remote / AJK / GB", cities: "Azad Kashmir, Gilgit-Baltistan, remote districts", time: "5–10 working days", fee: "PKR 600" },
];

const options = [
  { Icon: Clock, title: "Same-Day Delivery", desc: "Order before 1 PM in Karachi, Lahore & Islamabad. PKR 600 flat." },
  { Icon: Truck, title: "Standard Shipping", desc: "1–7 working days nationwide via TCS, Leopards & M&P couriers." },
  { Icon: Package, title: "Cash on Delivery", desc: "Pay when you receive. Available on orders up to PKR 100,000." },
  { Icon: MapPin, title: "Free Shipping", desc: "Complimentary on all prepaid orders above PKR 5,000." },
];

function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-[var(--blush)]/40 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <Link to="/" className="serif text-2xl tracking-[0.25em]">SPARKLE·PK</Link>
          <h1 className="serif text-5xl md:text-6xl mt-6">Shipping & Delivery</h1>
          <p className="mt-3 text-muted-foreground">Bringing sparkle to every corner of Pakistan</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {options.map(({ Icon, title, desc }) => (
            <div key={title} className="border border-border p-6">
              <Icon className="h-6 w-6 text-[var(--gold)]" />
              <h3 className="serif text-2xl mt-3">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="serif text-3xl mb-6">Delivery Zones & Estimates</h2>
        <div className="overflow-x-auto border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-left">
              <tr>
                <th className="p-4 font-medium">Zone</th>
                <th className="p-4 font-medium">Cities</th>
                <th className="p-4 font-medium">Estimate</th>
                <th className="p-4 font-medium">Fee</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((z) => (
                <tr key={z.zone} className="border-t border-border">
                  <td className="p-4 font-medium">{z.zone}</td>
                  <td className="p-4 text-muted-foreground">{z.cities}</td>
                  <td className="p-4">{z.time}</td>
                  <td className="p-4">{z.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 space-y-8">
          <Block title="Order Processing">
            Orders placed before 1:00 PM (PKT) on working days are dispatched the same day. Orders after 1 PM, on Sundays or public holidays (e.g. Eid-ul-Fitr, Eid-ul-Azha, 14 August, 23 March) ship the next working day.
          </Block>
          <Block title="Courier Partners">
            We ship via TCS, Leopards Courier, M&P and Daewoo FastEx based on your city for the fastest service. A tracking number is shared on your registered mobile number and email after dispatch.
          </Block>
          <Block title="Cash on Delivery">
            COD is available nationwide on orders up to PKR 100,000. A small PKR 100 handling fee applies. For higher-value or bridal orders, we recommend prepayment via EasyPaisa, JazzCash, bank transfer or card.
          </Block>
          <Block title="International Shipping">
            We currently ship within Pakistan only. For international (UAE, KSA, UK) enquiries, please WhatsApp +92 300 1234567.
          </Block>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex items-center justify-between text-sm">
          <Link to="/" className="underline">← Back to home</Link>
          <Link to="/returns" className="underline">Returns & Exchange →</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="serif text-2xl mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mazhar Jeweller" },
      { name: "description", content: "Visit our boutique or send us a message. We would love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-white text-[#2c2c2c]">
      <Header />

      <section className="min-h-[40vh] flex items-center text-center text-white py-[60px]" style={{ background: "linear-gradient(135deg, #0f3460, #1a1a2e)" }}>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <p className="font-sans text-xs tracking-[3px] uppercase text-[#f0d68a] mb-5">Mazhar · Atelier</p>
          <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-bold leading-[1.1]">Get in Touch</h1>
          <p className="text-base leading-relaxed opacity-90 mt-4 max-w-[500px] mx-auto">Visit our boutique or send us a message. We would love to hear from you.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 py-20">
        <div>
          <h2 className="font-serif text-[32px] mb-6 text-[#1a1a2e]">Visit Our Atelier</h2>
          <p className="text-[15px] leading-relaxed text-[#6b6b6b] mb-8">Step into our world of timeless elegance. Our atelier is open for private appointments, bespoke consultations, and collection viewings.</p>
          {[
            { label: "Address", lines: ["24 Heritage Avenue", "Hyderabad 500001, India"] },
            { label: "Phone", lines: ["+91 98 4500 1962"] },
            { label: "Email", lines: ["atelier@mazhar.com"] },
            { label: "Hours", lines: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By appointment only"] },
          ].map((d) => (
            <div key={d.label} className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-[1.5px] text-[#d4af37] mb-2">{d.label}</h4>
              {d.lines.map((l) => (
                <p key={l} className="text-[15px] text-[#2c2c2c] mb-1">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-[#faf6f0] p-10 rounded-sm">
          <h3 className="font-serif text-2xl mb-6 text-[#1a1a2e]">Send a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            {[
              { label: "Name", id: "name", type: "text" },
              { label: "Email", id: "email", type: "email" },
              { label: "Phone", id: "phone", type: "tel" },
            ].map((f) => (
              <div key={f.id} className="mb-5">
                <label htmlFor={f.id} className="block text-xs font-semibold uppercase tracking-[1px] text-[#2c2c2c] mb-1.5">{f.label}</label>
                <input type={f.type} id={f.id} required={f.id !== "phone"} className="w-full px-4 py-3 border border-[#e8e0d0] font-sans text-sm outline-none transition focus:border-[#d4af37] bg-white" />
              </div>
            ))}
            <div className="mb-5">
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[1px] text-[#2c2c2c] mb-1.5">Message</label>
              <textarea id="message" required className="w-full px-4 py-3 border border-[#e8e0d0] font-sans text-sm outline-none transition focus:border-[#d4af37] bg-white resize-y min-h-[120px]" />
            </div>
            <button type="submit" className="w-full px-8 py-[14px] text-[13px] font-semibold tracking-[1.5px] uppercase cursor-pointer transition-all bg-[#d4af37] text-white border-none hover:bg-[#b8962e]">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-center mb-12 text-[#1a1a2e]">Our Boutiques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Hyderabad", addr: "24 Heritage Avenue", phone: "+91 98 4500 1962", hours: "Mon-Sat 10AM-7PM" },
              { city: "Mumbai", addr: "45 Jewel House, Colaba", phone: "+91 22 4500 1962", hours: "Mon-Sat 10AM-7PM" },
              { city: "Dubai", addr: "Gold Souk, Deira", phone: "+971 4 450 1962", hours: "Sat-Thu 10AM-8PM" },
            ].map((b) => (
              <div key={b.city} className="bg-[#faf6f0] p-8 rounded-sm text-center">
                <h4 className="font-serif text-xl text-[#1a1a2e] mb-2">{b.city}</h4>
                <p className="text-sm text-[#6b6b6b] mb-1">{b.addr}</p>
                <p className="text-sm text-[#6b6b6b] mb-1">{b.phone}</p>
                <p className="text-sm text-[#6b6b6b]">{b.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

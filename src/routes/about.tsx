import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mazhar Jeweller" },
      { name: "description", content: "Three generations of master craftsmanship. From a single workshop in Hyderabad to ateliers serving connoisseurs across the world." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-white text-[#2c2c2c]">
      <Header />

      <section className="min-h-[50vh] flex items-center justify-center text-center text-white" style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[3px] uppercase text-[#f0d68a] mb-5">Maison Mazhar · Est. 1962</p>
          <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-bold leading-[1.1]">
            Three Generations of <em className="text-[#d4af37] not-italic">Mastery</em>
          </h1>
          <p className="text-base leading-relaxed opacity-90 mt-6 max-w-[600px] mx-auto">
            From a single workshop in Hyderabad to ateliers serving connoisseurs across the world.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[32px] mb-6 text-[#1a1a2e]">Our Heritage</h2>
          <p className="text-base leading-relaxed text-[#6b6b6b] mb-5 max-w-[800px]">
            Mazhar Jeweller was founded in 1962 by Muhammad Mazhar in the heart of Hyderabad. What began as a modest atelier with a single workbench and an unwavering commitment to quality has blossomed into one of the most respected jewellery houses in the world.
          </p>
          <p className="text-base leading-relaxed text-[#6b6b6b] mb-5 max-w-[800px]">
            For over six decades, the name Mazhar has been synonymous with exceptional craftsmanship, ethical sourcing, and timeless design. Each piece that leaves our atelier carries with it the legacy of three generations of master artisans who have dedicated their lives to the pursuit of perfection.
          </p>
          <p className="text-base leading-relaxed text-[#6b6b6b] mb-5 max-w-[800px]">
            Our philosophy is simple: create heirlooms, not just ornaments. Every gemstone is hand-selected for its fire and clarity. Every setting is meticulously hand-engraved. Every piece is designed to be worn, loved, and passed down through generations.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-[60px] items-center">
            <div className="h-[400px] rounded-sm" style={{ background: "linear-gradient(135deg, #d4af37, #1a1a2e)" }} />
            <div>
              <h2 className="font-serif text-[32px] mb-6 text-[#1a1a2e]">Craftsmanship</h2>
              <p className="text-base leading-relaxed text-[#6b6b6b] mb-5">
                Our atelier is home to 12 master karigars, each with decades of experience in their specialised craft. From diamond setting to hand engraving, from gold casting to polki work — every step of the creation process is performed with meticulous attention to detail.
              </p>
              <p className="text-base leading-relaxed text-[#6b6b6b] mb-5">
                We source our diamonds exclusively from GIA-certified suppliers, ensuring complete transparency and ethical practices. Our gold is hallmarked 22k, meeting the highest standards of purity.
              </p>
              <p className="text-base leading-relaxed text-[#6b6b6b] mb-5">
                Each piece undergoes rigorous quality inspection before it reaches our clients. This uncompromising commitment to quality is why Mazhar pieces are treasured across generations.
              </p>
            </div>
          </div>

          <div className="flex gap-12 justify-center mt-[60px]">
            {[
              { num: "62", label: "Years of craft" },
              { num: "47k+", label: "Heirlooms placed" },
              { num: "12", label: "Master karigars" },
              { num: "5", label: "Global boutiques" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-serif text-[36px] font-bold text-[#d4af37]">{s.num}</span>
                <span className="block text-[13px] text-[#6b6b6b] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[#111] text-white/80 pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.5fr_2fr] gap-16 pb-12">
        <div className="footer-brand">
          <h3 className="font-serif text-[28px] font-bold text-[#d4af37] mb-2">Mazhar.</h3>
          <p className="text-[13px] leading-relaxed text-white/60 mb-1">Jeweller · Est. 1962</p>
          <p className="text-[13px] leading-relaxed text-white/60">Three generations of master craftsmanship. Heirloom jewellery, ethically sourced and timelessly designed.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[1.5px] text-white mb-5">Maison</h4>
            <Link to="/about" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Our Heritage</Link>
            <Link to="/about" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Craftsmanship</Link>
            <Link to="/contact" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Boutiques</Link>
            <Link to="/contact" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Press</Link>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[1.5px] text-white mb-5">Collections</h4>
            <Link to="/category/rings" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Diamond Rings</Link>
            <Link to="/category/rings" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Gold Rings</Link>
            <Link to="/category/necklaces" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Necklaces</Link>
            <Link to="/category/gold-sets" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Gold Sets</Link>
            <Link to="/category/earrings" className="block text-[13px] text-white/60 no-underline mb-2.5 hover:text-[#d4af37] transition">Earrings</Link>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[1.5px] text-white mb-5">Atelier</h4>
            <p className="block text-[13px] text-white/60 mb-2.5">24 Heritage Avenue, Hyderabad 500001</p>
            <p className="block text-[13px] text-white/60 mb-2.5">+91 98 4500 1962</p>
            <p className="block text-[13px] text-white/60 mb-2.5">atelier@mazhar.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-white/50">
          <p>&copy; 2026 Mazhar Jeweller &mdash; All Rights Reserved</p>
          <div className="flex gap-5">
            <a href="#" className="text-white/50 no-underline hover:text-[#d4af37] transition">Privacy</a>
            <a href="#" className="text-white/50 no-underline hover:text-[#d4af37] transition">Terms</a>
            <a href="#" className="text-white/50 no-underline hover:text-[#d4af37] transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

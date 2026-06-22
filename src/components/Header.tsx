import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Rings", href: "/category/rings" },
    { label: "Necklaces", href: "/category/necklaces" },
    { label: "Gold Sets", href: "/category/gold-sets" },
    { label: "Earrings", href: "/category/earrings" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="bg-[#1a1a2e] text-[#f0d68a] text-center text-xs py-2 px-4 tracking-[0.5px] font-sans">
        Complimentary nationwide shipping on orders above PKR 150,000
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-[#e8e0d0]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-[5px] bg-none border-none cursor-pointer p-1"
          >
            <span className="block w-6 h-[2px] bg-[#1a1a2e] transition-[0.3s]" />
            <span className="block w-6 h-[2px] bg-[#1a1a2e] transition-[0.3s]" />
            <span className="block w-6 h-[2px] bg-[#1a1a2e] transition-[0.3s]" />
          </button>

          <Link to="/" className="font-serif text-[28px] font-bold text-[#1a1a2e] no-underline tracking-[1px]">
            Mazhar.
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                className="text-[13px] font-medium tracking-[0.8px] uppercase text-[#2c2c2c] no-underline hover:text-[#d4af37] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] after:transition-[width_0.3s] hover:after:w-full"
                activeProps={{ className: "text-[#d4af37] after:w-full" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-5 text-lg cursor-pointer">
            <span className="icon-search">&#128269;</span>
            <span className="icon-cart relative">
              &#128722;
              <span className="cart-badge absolute -top-2 -right-[10px] min-w-[18px] h-[18px] bg-[#d4af37] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-[4px] leading-none">
                3
              </span>
            </span>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 md:hidden transition ${menuOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <aside className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between p-4 border-b border-[#e8e0d0]">
            <Link to="/" className="font-serif text-xl font-bold text-[#1a1a2e]">Mazhar.</Link>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="p-2 -mr-2 text-2xl">&times;</button>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {navItems.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 border-b border-[#e8e0d0] text-sm uppercase tracking-wider text-[#2c2c2c] no-underline"
              >
                {n.label}
                <span className="opacity-50">&#8250;</span>
              </Link>
            ))}
          </nav>
          <div className="border-t border-[#e8e0d0] p-5 text-xs text-[#6b6b6b]">
            <p>24 Heritage Avenue, Hyderabad</p>
            <p className="mt-1">+91 98 4500 1962</p>
          </div>
        </aside>
      </div>
    </>
  );
}

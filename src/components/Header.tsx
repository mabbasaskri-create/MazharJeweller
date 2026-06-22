import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, User, MapPin, Truck, ShieldCheck, Phone, Menu, X, ChevronRight } from "lucide-react";

interface HeaderProps {
  hideAnnouncement?: boolean;
  hideTopBar?: boolean;
}

export function Header({ hideAnnouncement, hideTopBar }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { label: "Jewelry", href: "/jewelry" },
    { label: "Watches", href: "/watches" },
    { label: "Décor", href: "/decor" },
    { label: "Gifts", href: "/gifts" },
    { label: "Sale", href: "/sale", sale: true },
  ];

  return (
    <>
      {!hideAnnouncement && (
        <div className="bg-primary text-primary-foreground text-[11px] md:text-xs">
          <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-6 flex-wrap text-center">
            <span>✨ Free delivery on orders over PKR 5,000 — across Pakistan</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Cash on Delivery • EasyPaisa • JazzCash</span>
          </div>
        </div>
      )}

      {!hideTopBar && (
        <div className="hidden md:block border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Karachi · Lahore · Islamabad</span>
            <div className="flex items-center gap-4">
              <Link to="/stores">Store Finder</Link>
              <Link to="/help">Help</Link>
              <span>PK | English</span>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 md:py-4 grid grid-cols-3 md:flex items-center md:justify-between">
          <div className="flex items-center md:hidden">
            <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className="-ml-2 p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden md:flex gap-7 text-sm uppercase tracking-wider">
            {navItems.map((n) => (
              <Link key={n.label} to={n.href} className={n.sale ? "text-destructive" : "hover:opacity-70"}>{n.label}</Link>
            ))}
          </nav>

          <Link to="/" className="serif text-xl sm:text-2xl md:text-4xl tracking-[0.2em] md:tracking-[0.25em] text-center md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap">
            SPARKLE<span className="text-[var(--gold)]">·</span>PK
          </Link>

          <div className="flex items-center justify-end gap-3 md:gap-4">
            <Search className="h-5 w-5 cursor-pointer" />
            <Link to="/signin"><User className="h-5 w-5 cursor-pointer hidden sm:block" /></Link>
            <Link to="/wishlist"><Heart className="h-5 w-5 cursor-pointer hidden sm:block" /></Link>
            <Link to="/cart" className="relative cursor-pointer">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-[var(--gold)] text-primary text-[10px] rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </Link>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 md:hidden transition ${menuOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <aside className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-xl flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link to="/" className="serif text-xl tracking-[0.2em]">SPARKLE<span className="text-[var(--gold)]">·</span>PK</Link>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="p-2 -mr-2"><X className="h-6 w-6" /></button>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {navItems.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-5 py-4 border-b border-border text-sm uppercase tracking-wider ${n.sale ? "text-destructive" : ""}`}
              >
                {n.label}
                <ChevronRight className="h-4 w-4 opacity-50" />
              </Link>
            ))}
            <div className="mt-4 px-5 space-y-4 text-sm">
              <Link to="/signin" className="flex items-center gap-3 py-2" onClick={() => setMenuOpen(false)}><User className="h-4 w-4" /> Sign in / Register</Link>
              <Link to="/wishlist" className="flex items-center gap-3 py-2" onClick={() => setMenuOpen(false)}><Heart className="h-4 w-4" /> Wishlist</Link>
              <Link to="/stores" className="flex items-center gap-3 py-2" onClick={() => setMenuOpen(false)}><MapPin className="h-4 w-4" /> Store Finder</Link>
              <Link to="/shipping" className="flex items-center gap-3 py-2" onClick={() => setMenuOpen(false)}><Truck className="h-4 w-4" /> Shipping in Pakistan</Link>
              <Link to="/returns" className="flex items-center gap-3 py-2" onClick={() => setMenuOpen(false)}><ShieldCheck className="h-4 w-4" /> Returns & Exchange</Link>
            </div>
          </nav>
          <div className="border-t border-border p-5 text-xs text-muted-foreground space-y-1">
            <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +92 300 1234567</p>
            <p>PK | English · Prices in PKR</p>
          </div>
        </aside>
      </div>
    </>
  );
}

import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer id="help" className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <Link to="/" className="serif text-2xl tracking-[0.2em]">SPARKLE·PK</Link>
          <p className="mt-4 text-muted-foreground text-xs leading-relaxed">Pakistan's destination for premium crystal jewelry, watches and home décor. Crafted to celebrate every moment.</p>
        </div>
        <div>
          <p className="font-medium mb-3 uppercase text-xs tracking-wider">Shop</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/category/necklaces">Necklaces</Link></li>
            <li><Link to="/category/earrings">Earrings</Link></li>
            <li><Link to="/jewelry">Bridal Sets</Link></li>
            <li><Link to="/gifts">Gifts under PKR 10,000</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3 uppercase text-xs tracking-wider">Support</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-foreground">Shipping in Pakistan</Link></li>
            <li><Link to="/returns" className="hover:text-foreground">Returns & Exchange</Link></li>
            <li><Link to="/cart">Order Tracking</Link></li>
            <li>WhatsApp: +92 300 1234567</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3 uppercase text-xs tracking-wider">Payment</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>Cash on Delivery</li>
            <li>EasyPaisa</li>
            <li>JazzCash</li>
            <li>Bank Transfer · Debit/Credit Card</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 Sparkle Pakistan (Pvt) Ltd. All rights reserved.</p>
          <p>NTN: 1234567-8 · Karachi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

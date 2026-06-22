import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Trash2, Minus, Plus, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pkr } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart — Sparkle·PK" },
      { name: "description", content: "View your shopping bag. Crystal jewelry, watches and décor in PKR." },
    ],
  }),
  component: CartPage,
});

const cartItems = [
  { name: "Lumière Pendant Necklace", price: 34900, qty: 1, img: "@/assets/necklace.jpg" },
  { name: "Solitaire Crystal Studs", price: 18500, qty: 1, img: "@/assets/earrings.jpg" },
];

function CartPage() {
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal >= 5000 ? 0 : 450;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="serif text-4xl md:text-5xl flex items-center gap-3">
          <ShoppingBag className="h-8 w-8" /> Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h2 className="serif text-3xl mt-6">Your cart is empty</h2>
            <p className="text-muted-foreground mt-2">Add some sparkle to your life!</p>
            <Link to="/" className="mt-6 inline-block bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider">Continue Shopping</Link>
          </div>
        ) : (
          <div className="mt-10 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, i) => (
                <div key={i} className="flex gap-4 border border-border p-4">
                  <div className="w-24 h-24 bg-[var(--blush)] shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{pkr(item.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-border">
                        <button className="p-1.5 hover:bg-secondary"><Minus className="h-3 w-3" /></button>
                        <span className="px-3 text-sm">{item.qty}</span>
                        <button className="p-1.5 hover:bg-secondary"><Plus className="h-3 w-3" /></button>
                      </div>
                      <button className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{pkr(item.price * item.qty)}</p>
                </div>
              ))}
            </div>

            <div className="border border-border p-6 h-fit">
              <h3 className="font-medium uppercase text-xs tracking-wider mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{pkr(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "FREE" : pkr(shipping)}</span>
                </div>
                <hr className="border-border my-3" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{pkr(subtotal + shipping)}</span>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider mt-6">Checkout</button>
              <Link to="/" className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-4 hover:text-foreground">
                <ArrowLeft className="h-3 w-3" /> Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

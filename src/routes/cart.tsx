import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Mazhar Jeweller" }] }),
  component: () => (
    <div className="min-h-screen bg-white text-[#2c2c2c]">
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <ShoppingBag className="h-12 w-12 mx-auto text-[#6b6b6b]/50" />
        <h1 className="font-serif text-4xl mt-4 text-[#1a1a2e]">Your bag is empty</h1>
        <p className="text-[#6b6b6b] mt-2">Discover our collection of heirloom jewellery.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-sm uppercase tracking-wider bg-[#d4af37] text-white no-underline hover:bg-[#b8962e]">Continue Shopping</Link>
      </section>
      <Footer />
    </div>
  ),
});

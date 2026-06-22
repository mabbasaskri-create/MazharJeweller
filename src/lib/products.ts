import necklace from "@/assets/necklace.jpg";
import earrings from "@/assets/earrings.jpg";
import bracelet from "@/assets/bracelet.jpg";
import ring from "@/assets/ring.jpg";
import watch from "@/assets/watch.jpg";
import decor from "@/assets/decor.jpg";

export interface Product {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  img: string;
  tag?: string;
  category: string;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    slug: "lumiere-pendant-necklace",
    name: "Lumière Pendant Necklace",
    price: 34900,
    oldPrice: 42000,
    img: necklace,
    tag: "Bestseller",
    category: "necklaces",
    description: "A radiant pendant that catches every light. Hand-set with precision-cut crystals, this necklace drapes elegantly on the collarbone — perfect for both formal events and everyday luxury.",
    details: [
      "Premium crystal pendant with chain",
      "16-18 inch adjustable chain",
      "Lobster clasp closure",
      "Anti-tarnish rhodium plating",
      "Gift box included",
    ],
  },
  {
    slug: "solitaire-crystal-studs",
    name: "Solitaire Crystal Studs",
    price: 18500,
    img: earrings,
    tag: "New",
    category: "earrings",
    description: "Timeless solitaire studs that whisper elegance. Each crystal is carefully selected for maximum brilliance and set in a classic four-prong mounting.",
    details: [
      "Round-cut crystal studs",
      "4-prong setting",
      "Push-back closure",
      "Nickel-free hypoallergenic posts",
      "Authenticity card included",
    ],
  },
  {
    slug: "aurora-tennis-bracelet",
    name: "Aurora Tennis Bracelet",
    price: 56000,
    oldPrice: 65000,
    img: bracelet,
    tag: "-14%",
    category: "bracelets",
    description: "A dazzling line of crystals set in flawless symmetry. The Aurora Tennis Bracelet wraps your wrist in light — a signature piece for the woman who loves to shine.",
    details: [
      "Princess-cut crystal tennis bracelet",
      "7.5 inch length",
      "Safety clasp with extender",
      "Rhodium-finished sterling silver base",
      "Includes polishing cloth",
    ],
  },
  {
    slug: "royal-cushion-cocktail-ring",
    name: "Royal Cushion Cocktail Ring",
    price: 47900,
    img: ring,
    tag: "New",
    category: "rings",
    description: "A statement piece that commands attention. The Royal Cushion features a large crystal in a halo setting, surrounded by pave crystals on a sculpted band.",
    details: [
      "Cushion-cut centre crystal",
      "Halo setting with pave crystals",
      "Adjustable band (US 6-8)",
      "High-polish silver finish",
      "Presented in a velvet ring box",
    ],
  },
  {
    slug: "etoile-crystal-watch",
    name: "Étoile Crystal Watch",
    price: 89500,
    img: watch,
    category: "watches",
    description: "Where Swiss-inspired precision meets crystal artistry. The Étoile watch features a mother-of-pearl dial framed with crystals on a genuine leather strap.",
    details: [
      "Quartz movement",
      "Mother-of-pearl dial",
      "Crystal-set bezel",
      "Italian leather strap",
      "Water resistant (3 ATM)",
      "2-year warranty",
    ],
  },
  {
    slug: "signature-crystal-swan",
    name: "Signature Crystal Swan",
    price: 23900,
    img: decor,
    tag: "Iconic",
    category: "decor",
    description: "A sculptural masterpiece in full-lead crystal. Hand-carved and polished, our Signature Swan brings timeless beauty to your mantel, console or bookshelf.",
    details: [
      "Full-lead crystal",
      "Hand-carved and polished",
      "Dimensions: 15cm x 10cm x 8cm",
      "Felt base to protect surfaces",
      "Signature Sparkle·PK gift box",
    ],
  },
];

export const featured = products;

export const categories = [
  { title: "Necklaces", img: necklace, slug: "necklaces" },
  { title: "Earrings", img: earrings, slug: "earrings" },
  { title: "Bracelets", img: bracelet, slug: "bracelets" },
  { title: "Rings", img: ring, slug: "rings" },
  { title: "Watches", img: watch, slug: "watches" },
  { title: "Home Décor", img: decor, slug: "decor" },
];

export const pkr = (n: number) => "PKR " + n.toLocaleString("en-PK");

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (cat: string) => products.filter((p) => p.category === cat);

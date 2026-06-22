export interface Product {
  id: string;
  slug: string;
  name: string;
  price: string;
  category: string;
  badge: string | null;
  badgeClass: string | null;
  link: string;
  type: string;
  sizes: string[];
  desc: string;
  gradient: string;
}

const gradients: Record<string, string> = {
  'solitaire-halo-ring': 'linear-gradient(135deg, #e8e0d0, #d4c9b5)',
  'eclat-brilliant-ring': 'linear-gradient(135deg, #c9b99a, #b8a88a)',
  'royal-polki-necklace': 'linear-gradient(135deg, #d4af37, #c5a028)',
  'bandhan-bridal-set': 'linear-gradient(135deg, #a0845c, #8d714a)',
  'chandelier-drop-earrings': 'linear-gradient(135deg, #c9a96e, #b8962e)',
  'pave-diamond-halo': 'linear-gradient(135deg, #b8b8c8, #9a9aaa)',
  'signet-gold-ring': 'linear-gradient(135deg, #d4af37, #c5a028)',
  'pave-band-ring': 'linear-gradient(135deg, #2d2d44, #1a1a2e)',
  'classic-gold-band': 'linear-gradient(135deg, #b8860b, #8b6914)',
  'three-stone-diamond-ring': 'linear-gradient(135deg, #c9a96e, #a0845c)',
  'tennis-diamond-necklace': 'linear-gradient(135deg, #e8e0d0, #d4c9b5)',
  'heritage-gold-necklace': 'linear-gradient(135deg, #b8860b, #8b6914)',
  'temple-gold-choker': 'linear-gradient(135deg, #c9a96e, #a0845c)',
  'diamond-rani-haar': 'linear-gradient(135deg, #2d2d44, #1a1a2e)',
  'gold-jhumka-earrings': 'linear-gradient(135deg, #d4af37, #c5a028)',
  'diamond-stud-earrings': 'linear-gradient(135deg, #e8e0d0, #d4c9b5)',
  'polki-chandbali': 'linear-gradient(135deg, #a0845c, #8d714a)',
  'diamond-hoop-earrings': 'linear-gradient(135deg, #2d2d44, #1a1a2e)',
};

const defaultGradient = 'linear-gradient(135deg, #1a1a2e, #16213e)';

export const products: Product[] = [
  { id: 'solitaire-halo-ring', slug: 'solitaire-halo-ring', name: 'Solitaire Halo Ring', category: 'Diamond', price: 'Rs 965,000', badge: 'Bestseller', badgeClass: 'bestseller', link: 'rings', type: 'ring', sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], desc: 'A timeless solitaire diamond set in a delicate halo of pavé brilliance. Crafted in hallmarked 22k gold with a GIA-certified centre stone.', gradient: gradients['solitaire-halo-ring'] || defaultGradient },
  { id: 'eclat-brilliant-ring', slug: 'eclat-brilliant-ring', name: 'Eclat Brilliant Ring', category: 'Diamond', price: 'Rs 1,370,000', badge: 'New', badgeClass: 'new', link: 'rings', type: 'ring', sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], desc: 'An brilliant-cut diamond ring with a sculptural silhouette. The open band design allows light to flow through the stone from every angle.', gradient: gradients['eclat-brilliant-ring'] || defaultGradient },
  { id: 'royal-polki-necklace', slug: 'royal-polki-necklace', name: 'Royal Polki Necklace', category: 'Gold Set', price: 'Rs 2,490,000', badge: 'Couture', badgeClass: 'couture', link: 'gold-sets', type: 'necklace', sizes: ['16"', '18"', '20"', '22"'], desc: 'An opulent polki diamond necklace set in uncut diamond and 22k gold. Each stone is hand-selected and set by master karigars.', gradient: gradients['royal-polki-necklace'] || defaultGradient },
  { id: 'bandhan-bridal-set', slug: 'bandhan-bridal-set', name: 'Bandhan Bridal Set', category: 'Gold Set', price: 'Rs 3,470,000', badge: 'Bridal', badgeClass: 'bridal', link: 'gold-sets', type: 'necklace', sizes: ['16"', '18"', '20"', '22"'], desc: 'A complete bridal ensemble featuring a layered necklace, maang tikka, and earrings. Intricately crafted in 22k gold with ruby and emerald accents.', gradient: gradients['bandhan-bridal-set'] || defaultGradient },
  { id: 'chandelier-drop-earrings', slug: 'chandelier-drop-earrings', name: 'Chandelier Drop Earrings', category: 'Gold', price: 'Rs 588,000', badge: "Editor's Pick", badgeClass: 'editors-pick', link: 'earrings', type: 'earring', sizes: ['Standard', 'Oversized'], desc: 'Exquisitely detailed chandelier earrings featuring cascading gold work. Light catches every curve and contour.', gradient: gradients['chandelier-drop-earrings'] || defaultGradient },
  { id: 'pave-diamond-halo', slug: 'pave-diamond-halo', name: 'Pavé Diamond Halo', category: 'Diamond', price: 'Rs 1,148,000', badge: 'New', badgeClass: 'new', link: 'earrings', type: 'earring', sizes: ['Standard', 'Oversized'], desc: 'Diamond earrings with an intricate pavé halo setting. The diamonds continue around the hoop for seamless brilliance.', gradient: gradients['pave-diamond-halo'] || defaultGradient },
  { id: 'signet-gold-ring', slug: 'signet-gold-ring', name: 'Signet Gold Ring', category: 'Gold', price: 'Rs 425,000', badge: 'Couture', badgeClass: 'couture', link: 'rings', type: 'ring', sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], desc: 'A classic signet ring reimagined with a contemporary edge. Hand-engraved in 22k gold with a polished finish.', gradient: gradients['signet-gold-ring'] || defaultGradient },
  { id: 'pave-band-ring', slug: 'pave-band-ring', name: 'Pavé Band Ring', category: 'Diamond', price: 'Rs 785,000', badge: 'New', badgeClass: 'new', link: 'rings', type: 'ring', sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], desc: 'A continuous band of pavé-set diamonds. Perfect as an engagement ring or a statement stacker.', gradient: gradients['pave-band-ring'] || defaultGradient },
  { id: 'classic-gold-band', slug: 'classic-gold-band', name: 'Classic Gold Band', category: 'Gold', price: 'Rs 320,000', badge: null, badgeClass: null, link: 'rings', type: 'ring', sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], desc: 'A simple, elegant gold band in 22k hallmarked gold. A forever piece that only gets better with wear.', gradient: gradients['classic-gold-band'] || defaultGradient },
  { id: 'three-stone-diamond-ring', slug: 'three-stone-diamond-ring', name: 'Three-Stone Diamond Ring', category: 'Diamond', price: 'Rs 1,890,000', badge: "Editor's Pick", badgeClass: 'editors-pick', link: 'rings', type: 'ring', sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'], desc: 'Three brilliant-cut diamonds set in a platinum basket. Symbolising past, present and future.', gradient: gradients['three-stone-diamond-ring'] || defaultGradient },
  { id: 'tennis-diamond-necklace', slug: 'tennis-diamond-necklace', name: 'Tennis Diamond Necklace', category: 'Diamond', price: 'Rs 1,850,000', badge: 'Bestseller', badgeClass: 'bestseller', link: 'necklaces', type: 'necklace', sizes: ['16"', '18"', '20"', '22"'], desc: 'A classic tennis necklace with seamlessly set round brilliant diamonds. Effortless elegance for any occasion.', gradient: gradients['tennis-diamond-necklace'] || defaultGradient },
  { id: 'heritage-gold-necklace', slug: 'heritage-gold-necklace', name: 'Heritage Gold Necklace', category: 'Gold', price: 'Rs 1,120,000', badge: null, badgeClass: null, link: 'necklaces', type: 'necklace', sizes: ['16"', '18"', '20"', '22"'], desc: 'A traditional gold necklace handcrafted with intricate temple jewellery motifs. A true heirloom piece.', gradient: gradients['heritage-gold-necklace'] || defaultGradient },
  { id: 'temple-gold-choker', slug: 'temple-gold-choker', name: 'Temple Gold Choker', category: 'Gold Set', price: 'Rs 2,150,000', badge: 'New', badgeClass: 'new', link: 'gold-sets', type: 'necklace', sizes: ['14"', '16"', '18"'], desc: 'A resplendent temple-style choker adorned with deity motifs and floral patterns. Crafted in heavy 22k gold.', gradient: gradients['temple-gold-choker'] || defaultGradient },
  { id: 'diamond-rani-haar', slug: 'diamond-rani-haar', name: 'Diamond Rani Haar', category: 'Diamond', price: 'Rs 4,200,000', badge: "Editor's Pick", badgeClass: 'editors-pick', link: 'necklaces', type: 'necklace', sizes: ['16"', '18"', '20"', '22"'], desc: 'A regal diamond necklace fit for royalty. Multiple layers of diamonds and gold create a majestic silhouette.', gradient: gradients['diamond-rani-haar'] || defaultGradient },
  { id: 'gold-jhumka-earrings', slug: 'gold-jhumka-earrings', name: 'Gold Jhumka Earrings', category: 'Gold', price: 'Rs 345,000', badge: 'Bestseller', badgeClass: 'bestseller', link: 'earrings', type: 'earring', sizes: ['Standard', 'Oversized'], desc: 'Traditional gold jhumkas with intricate filigree work. Lightweight yet impactful.', gradient: gradients['gold-jhumka-earrings'] || defaultGradient },
  { id: 'diamond-stud-earrings', slug: 'diamond-stud-earrings', name: 'Diamond Stud Earrings', category: 'Diamond', price: 'Rs 675,000', badge: null, badgeClass: null, link: 'earrings', type: 'earring', sizes: ['0.5 ct', '1 ct', '1.5 ct', '2 ct'], desc: 'Classic diamond studs set in four-prong baskets. Brilliant-cut stones with GIA certification.', gradient: gradients['diamond-stud-earrings'] || defaultGradient },
  { id: 'polki-chandbali', slug: 'polki-chandbali', name: 'Polki Chandbali', category: 'Gold', price: 'Rs 890,000', badge: 'Couture', badgeClass: 'couture', link: 'earrings', type: 'earring', sizes: ['Standard', 'Oversized'], desc: 'Moon-shaped chandbali earrings adorned with uncut polki diamonds and gold enamel work.', gradient: gradients['polki-chandbali'] || defaultGradient },
  { id: 'diamond-hoop-earrings', slug: 'diamond-hoop-earrings', name: 'Diamond Hoop Earrings', category: 'Diamond', price: 'Rs 920,000', badge: 'New', badgeClass: 'new', link: 'earrings', type: 'earring', sizes: ['Small', 'Medium', 'Large'], desc: 'Sleek diamond hoops with channel-set diamonds along the entire curve. Modern and timeless.', gradient: gradients['diamond-hoop-earrings'] || defaultGradient },
];

export const featured = products.slice(0, 6);

export const categories = [
  { title: "Rings", slug: "rings", gradient: "linear-gradient(135deg, #d4af37, #b8962e)" },
  { title: "Necklaces", slug: "necklaces", gradient: "linear-gradient(135deg, #2d2d44, #1a1a2e)" },
  { title: "Gold Sets", slug: "gold-sets", gradient: "linear-gradient(135deg, #b8860b, #8b6914)" },
  { title: "Earrings", slug: "earrings", gradient: "linear-gradient(135deg, #c9a96e, #b8962e)" },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (cat: string) => products.filter((p) => p.link === cat);

export const categoryMeta: Record<string, { title: string; subtitle: string; desc: string; heroGradient: string; ctaProduct?: string }> = {
  rings: {
    title: "Diamond & Gold Rings",
    subtitle: "Mazhar · Collection",
    desc: "Solitaires, halos, pavé brilliance — each ring a testament to light and craft. Discover our curated edit of diamond and gold rings.",
    heroGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    ctaProduct: "solitaire-halo-ring",
  },
  necklaces: {
    title: "Timeless Necklaces",
    subtitle: "Mazhar · Collection",
    desc: "From classic tennis necklaces to heritage gold pieces — each strand designed to illuminate.",
    heroGradient: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)",
    ctaProduct: "tennis-diamond-necklace",
  },
  "gold-sets": {
    title: "Opulent Gold Sets",
    subtitle: "Mazhar · Collection",
    desc: "Couture bridal sets, polki necklaces, and opulent gold ensembles for the most luminous occasions.",
    heroGradient: "linear-gradient(135deg, #8b6914 0%, #d4af37 50%, #b8962e 100%)",
    ctaProduct: "bandhan-bridal-set",
  },
  earrings: {
    title: "Exquisite Earrings",
    subtitle: "Mazhar · Collection",
    desc: "Chandeliers, studs, hoops and drops — each pair framed to catch the light and elevate every occasion.",
    heroGradient: "linear-gradient(135deg, #16213e 0%, #1a1a2e 50%, #0f3460 100%)",
    ctaProduct: "chandelier-drop-earrings",
  },
};

import { imageUrl } from "@/data/site";

export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  description: string;
  image: string;
  alt: string;
  occasion: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "the-sunday-slowdown",
    name: "The Sunday Slowdown",
    category: "Gift boxes",
    categorySlug: "gift-boxes",
    price: 68,
    description: "A quieter kind of afternoon: small-batch tea, a hand-poured candle and something lovely to read.",
    image: imageUrl("photo-1603006905003-be475563bc59"),
    alt: "A candle and thoughtful keepsakes arranged in a calm gift box",
    occasion: "Birthday",
    rating: 4.9,
    reviewCount: 28,
    featured: true,
  },
  {
    slug: "little-joys-box",
    name: "The Little Joys Box",
    category: "Gift boxes",
    categorySlug: "gift-boxes",
    price: 54,
    description: "A thoughtful collection of sweet, useful things for a day that deserves a little more.",
    image: imageUrl("photo-1549465220-1a8b9238cd48"),
    alt: "A carefully wrapped gift with a handwritten-style finishing touch",
    occasion: "Birthday",
    rating: 5,
    reviewCount: 19,
    featured: true,
  },
  {
    slug: "wildflower-keepsake",
    name: "Wildflower Keepsake",
    category: "Personalised",
    categorySlug: "personalised-gifts",
    price: 42,
    description: "A keepsake made personal, finished with a name and a small bunch of seasonal stems.",
    image: imageUrl("photo-1490750967868-88aa4486c946"),
    alt: "Soft seasonal flowers gathered into a small bouquet",
    occasion: "Anniversary",
    rating: 4.8,
    reviewCount: 15,
    featured: true,
  },
  {
    slug: "gather-round-hamper",
    name: "The Gather Round Hamper",
    category: "Festive",
    categorySlug: "festive-hampers",
    price: 96,
    description: "A generous hamper for passing around the table: pantry favourites and a little sparkle.",
    image: imageUrl("photo-1513201099705-a9746e1e201f"),
    alt: "A generous gift hamper wrapped for a celebration",
    occasion: "Festive",
    rating: 4.9,
    reviewCount: 32,
    featured: true,
  },
  {
    slug: "daylight-desk-set",
    name: "The Daylight Desk Set",
    category: "Corporate",
    categorySlug: "corporate-gifts",
    price: 58,
    description: "A considered thank-you for desks, new beginnings and good work done together.",
    image: imageUrl("photo-1499750310107-5fef28a66643"),
    alt: "A beautifully composed desk with a notebook and natural details",
    occasion: "Thank you",
    rating: 4.7,
    reviewCount: 12,
    featured: true,
  },
  {
    slug: "the-newlywed-notes",
    name: "Newlywed Notes",
    category: "Wedding",
    categorySlug: "wedding-favours",
    price: 36,
    description: "A keepsake for the first pages of a shared story, wrapped and ready to give.",
    image: imageUrl("photo-1519741497674-611481863552"),
    alt: "A romantic wedding table set with delicate flowers",
    occasion: "Wedding",
    rating: 4.9,
    reviewCount: 21,
    featured: true,
  },
  {
    slug: "rose-and-ribbon",
    name: "Rose & Ribbon Favour",
    category: "Wedding",
    categorySlug: "wedding-favours",
    price: 9,
    description: "A petite, petal-soft favour for a table full of people you love.",
    image: imageUrl("photo-1523438885200-e635ba2c371e"),
    alt: "A delicate wedding favour with romantic floral details",
    occasion: "Wedding",
    rating: 4.8,
    reviewCount: 16,
  },
  {
    slug: "morning-market-basket",
    name: "Morning Market Basket",
    category: "Gift boxes",
    categorySlug: "gift-boxes",
    price: 74,
    description: "A little taste of a slow morning, with the best finds from our favourite makers.",
    image: imageUrl("photo-1546549032-9571cd6b27df"),
    alt: "A tabletop of artisan treats and fresh market produce",
    occasion: "Housewarming",
    rating: 4.9,
    reviewCount: 11,
  },
  {
    slug: "for-the-host",
    name: "For the Host",
    category: "Gift boxes",
    categorySlug: "gift-boxes",
    price: 62,
    description: "A small thank-you for a full table, a warm welcome and one more cup of tea.",
    image: imageUrl("photo-1511988617509-a57c8a288659"),
    alt: "Friends sharing a meal around a warmly set dinner table",
    occasion: "Thank you",
    rating: 4.8,
    reviewCount: 9,
  },
  {
    slug: "golden-hour-hamper",
    name: "Golden Hour Hamper",
    category: "Festive",
    categorySlug: "festive-hampers",
    price: 112,
    description: "A sun-warmed mix of maker-made treats for long evenings and generous hosts.",
    image: imageUrl("photo-1470337458703-46ad1756a187"),
    alt: "A celebratory spread of drinks and seasonal treats",
    occasion: "Festive",
    rating: 5,
    reviewCount: 17,
  },
  {
    slug: "the-good-company-set",
    name: "The Good Company Set",
    category: "Corporate",
    categorySlug: "corporate-gifts",
    price: 84,
    description: "A warm welcome for new teammates and a thoughtful note for old friends.",
    image: imageUrl("photo-1497366754035-f200968a6e72"),
    alt: "A light-filled workspace prepared for a thoughtful welcome gift",
    occasion: "Corporate",
    rating: 4.9,
    reviewCount: 14,
  },
  {
    slug: "pressed-flower-letter",
    name: "Pressed Flower Letter",
    category: "Personalised",
    categorySlug: "personalised-gifts",
    price: 29,
    description: "A little note to keep, pressed with flowers chosen to feel like them.",
    image: imageUrl("photo-1455390582262-044cdead277a"),
    alt: "A handwritten note on textured paper with a quiet, personal feel",
    occasion: "Just because",
    rating: 4.8,
    reviewCount: 8,
  },
];

export const categories = [
  { slug: "gift-boxes", name: "Gift boxes", description: "Thoughtful little worlds, gathered into one lovely box.", image: imageUrl("photo-1549465220-1a8b9238cd48") },
  { slug: "personalised-gifts", name: "Personalised gifts", description: "Keepsakes made theirs, down to the last detail.", image: imageUrl("photo-1490750967868-88aa4486c946") },
  { slug: "wedding-favours", name: "Wedding favours", description: "Small tokens for the people who make the day.", image: imageUrl("photo-1519741497674-611481863552") },
  { slug: "corporate-gifts", name: "Corporate gifting", description: "A more human way to say thank you, welcome or well done.", image: imageUrl("photo-1497366754035-f200968a6e72") },
  { slug: "festive-hampers", name: "Festive hampers", description: "For full tables, slow afternoons and the joy of sharing.", image: imageUrl("photo-1513201099705-a9746e1e201f") },
];

export const occasions = [
  { slug: "birthday-gifts", title: "Birthday gifts", intro: "For the people who make every year feel a little brighter.", category: "gift-boxes" },
  { slug: "wedding-gifts", title: "Wedding gifts & favours", intro: "Little keepsakes for the start of something lovely.", category: "wedding-favours" },
  { slug: "thank-you-gifts", title: "Thank-you gifts", intro: "A thoughtful way to say, “I noticed. I’m grateful.”", category: "corporate-gifts" },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);

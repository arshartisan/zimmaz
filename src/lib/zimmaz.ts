export type Variation = { name: string; price: number };
export type CrochetProduct = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  colors: string[];
  variations: Variation[];
  image: string;
  tile: number;
  available: boolean;
  featured: boolean;
};
export type Order = {
  id: string;
  customer: string;
  phone: string;
  product: string;
  color: string;
  variation: string;
  quantity: number;
  total: number;
  notes: string;
  status:
    "New" | "Confirmed" | "In progress" | "Ready" | "Completed" | "Cancelled";
  created: string;
};
export type SiteContent = {
  announcement: string;
  heroTitle: string;
  heroText: string;
  storyTitle: string;
  storyText: string;
  whatsapp: string;
  leadTime: string;
};
export const initialContent: SiteContent = {
  announcement: "Handmade with care. Made just for you.",
  heroTitle: "Little things,\nmade with love.",
  heroText:
    "Thoughtfully crocheted pieces that bring a little warmth to your everyday. Pick your favorite, choose your colors, and let us make it yours.",
  storyTitle: "A little yarn. A lot of heart.",
  storyText:
    "Welcome to Zimmaz, a small crochet studio with a love for the little details. From the first loop to the finishing stitch, each piece is made by hand, with patience and care. We make things to be loved, gifted, and carried through everyday life.",
  whatsapp: "94774338424",
  leadTime: "Made to order · timing confirmed on WhatsApp",
};
const photo = "/images/crochet-collection.png";
export const initialProducts: CrochetProduct[] = [
  {
    id: "daisy-tote",
    slug: "daisy-tote",
    name: "The Daisy Tote",
    category: "Bags",
    description:
      "A little sunshine to take with you. A soft granny-square tote with cheerful daisy details and comfortable handles. Choose your favorite colors for a bag that feels like you.",
    colors: ["Sage", "Cream", "Rose"],
    variations: [
      { name: "Everyday", price: 3500 },
      { name: "Large", price: 4500 },
    ],
    image: photo,
    tile: 0,
    available: true,
    featured: true,
  },
  {
    id: "bunny",
    slug: "little-bunny",
    name: "Little Bunny",
    category: "Soft toys",
    description:
      "A gentle little companion with floppy ears and a whole lot of charm. A thoughtful keepsake for someone special. Decorative handmade item; suitability for young children should be discussed before ordering.",
    colors: ["Cream", "Sage", "Rose"],
    variations: [
      { name: "Small", price: 2200 },
      { name: "Large", price: 3200 },
    ],
    image: photo,
    tile: 1,
    available: true,
    featured: true,
  },
  {
    id: "bouquet",
    slug: "forever-blooms",
    name: "Forever Blooms",
    category: "Flowers",
    description:
      "Flowers that keep their lovely little bloom. Hand-crocheted daisies, wrapped and ready to gift. Tell us your preferred palette and we will help you put together a bouquet.",
    colors: ["Cream", "Butter", "Rose"],
    variations: [
      { name: "3 stems", price: 1800 },
      { name: "5 stems", price: 2800 },
      { name: "7 stems", price: 3800 },
    ],
    image: photo,
    tile: 2,
    available: true,
    featured: true,
  },
  {
    id: "hat",
    slug: "weekend-bucket-hat",
    name: "Weekend Bucket Hat",
    category: "Accessories",
    description:
      "Easy days, soft stitches. A lightweight crochet bucket hat with a gentle scalloped edge. Share your head measurement in the customization notes for a comfortable fit.",
    colors: ["Sage", "Cream", "Teal"],
    variations: [
      { name: "Adult", price: 2500 },
      { name: "Child", price: 1900 },
    ],
    image: photo,
    tile: 3,
    available: true,
    featured: false,
  },
  {
    id: "heart",
    slug: "pocket-heart",
    name: "Pocket Heart",
    category: "Accessories",
    description:
      "A tiny reminder of someone you love. This soft crochet heart clips onto your keys or your favorite bag. A sweet little gift, or a treat just for you.",
    colors: ["Rose", "Sage", "Cream"],
    variations: [
      { name: "Single", price: 650 },
      { name: "Pair", price: 1200 },
    ],
    image: photo,
    tile: 4,
    available: true,
    featured: false,
  },
  {
    id: "coasters",
    slug: "slow-morning-coasters",
    name: "Slow Morning Coasters",
    category: "Home & living",
    description:
      "Make a little space for slow mornings. A set of textured crochet coasters with a contrasting border, made to bring warmth to your table.",
    colors: ["Cream", "Sage", "Teal"],
    variations: [
      { name: "Set of 2", price: 900 },
      { name: "Set of 4", price: 1600 },
    ],
    image: photo,
    tile: 5,
    available: true,
    featured: false,
  },
];
export const collections = [
  "All pieces",
  "Bags",
  "Soft toys",
  "Flowers",
  "Accessories",
  "Home & living",
];
export const colorHex: Record<string, string> = {
  Sage: "#B6D298",
  Cream: "#DCE2C8",
  Rose: "#d9aaa8",
  Teal: "#0F3F3F",
  Butter: "#e9d597",
};
export const money = (value: number) => `LKR ${value.toLocaleString("en-LK")}`;
export const orderStatuses: Order["status"][] = [
  "New",
  "Confirmed",
  "In progress",
  "Ready",
  "Completed",
  "Cancelled",
];
export function whatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

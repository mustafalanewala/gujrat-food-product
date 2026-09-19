/**
 * Single source of truth for contact details, the product range and imagery.
 * Keep this to details the company already published - don't add licence,
 * registration or figures read off packaging.
 */

export const site = {
  name: "Gujarat Food Products",
  tagline: "Makai poha, milled in Dahod",
  phone: "+91 9909708678",
  phoneHref: "tel:+919909708678",
  whatsapp: "919909708678",
  email: "gujaratfoodproducts81@gmail.com",
  address: {
    line1: "Plot No. 358, 359 MEGA GIDC",
    line2: "Kharedi, Dahod, Gujarat",
    mapUrl: "https://www.google.com/maps?q=22°52'48.9%22N+74°17'40.3%22E",
  },
} as const;

/** Opens WhatsApp with the message pre-filled. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Product = {
  brand: string;
  line: string;
  gu: string;
  image: string;
  note: string;
  kind: "poha" | "feed";
};

export const products: Product[] = [
  {
    brand: "Yellow Diamond",
    line: "Makai Poha",
    gu: "મકાઈ પૌંઆ",
    image: "/products/yellow-diamond.png",
    note: "Premium quality yellow corn flakes, in the red and green label sack.",
    kind: "poha",
  },
  {
    brand: "Twenty 20",
    line: "Makai Poha",
    gu: "મકાઈ પૌંઆ",
    image: "/products/twenty-20.png",
    note: "A perfect balance of taste and nutrition.",
    kind: "poha",
  },
  {
    brand: "Rajdeep",
    line: "Makai Poha",
    gu: "મકાઈ પૌંઆ",
    image: "/products/raj-deep.png",
    note: "Traditional flavour in every bite.",
    kind: "poha",
  },
  {
    brand: "Indian Gold",
    line: "Makai Poha",
    gu: "મકાઈ પૌંઆ",
    image: "/products/india-gold.png",
    note: "Delicious and healthy corn flakes.",
    kind: "poha",
  },
  {
    brand: "Gujarat King",
    line: "Makai Bhardo",
    gu: "મકાઈ ભરડો",
    image: "/products/gujarat-king-yellow.png",
    note: "Nutritious and wholesome feed for cows, in the yellow fabric bag.",
    kind: "feed",
  },
  {
    brand: "Gujarat King",
    line: "Makai Bhardo",
    gu: "મકાઈ ભરડો",
    image: "/products/gujarat-king-green.png",
    note: "The same feed in the green-print bag.",
    kind: "feed",
  },
];

/** The mill run, in order - this genuinely is a sequence. */
export const process = [
  { title: "Grown", detail: "Maize is sourced from growers around Dahod and graded on arrival." },
  { title: "Boiled", detail: "Held at a controlled temperature so the grain softens without losing its body." },
  { title: "Flattened", detail: "Rolled to an even flake thickness, the step that makes poha poha." },
  { title: "Dried", detail: "Air-dried rather than force-dried, which is what keeps the flake's flavour." },
  { title: "Inspected", detail: "Each batch is checked for colour, moisture and foreign matter before it moves." },
  { title: "Packed", detail: "Filled and stitched into printed woven sacks, ready to ship." },
];

/** Carried over from the original site copy. */
export const quality = [
  "Sourced from the finest corn",
  "Processed using state-of-the-art technology",
  "Packed in hygienic conditions",
  "Regular quality checks at every stage",
];

/**
 * Photography is served from public/photos - nothing is hotlinked, so the site
 * has no third-party image dependency. Sources were picked on Pexels (free to
 * use, no attribution required) and re-encoded to WebP q82.
 * Originals: hero 10112725, harvest 12921034, graded 6660899,
 * drying 34623762, kernels 10111854.
 */
export const photos = {
  hero: {
    src: "/photos/hero.webp",
    alt: "Close-up of a maize cob, kernels lit gold against a dark ground",
    width: 2000,
    height: 1334,
  },
  harvest: {
    src: "/photos/harvest.webp",
    alt: "Looking down into an open woven sack filled with maize cobs",
    width: 1000,
    height: 1250,
  },
  graded: {
    src: "/photos/graded.webp",
    alt: "Harvested maize cobs spread across the ground, seen from above",
    width: 1200,
    height: 900,
  },
  drying: {
    src: "/photos/drying.webp",
    alt: "Harvested maize cobs spread out to dry in the sun",
    width: 1400,
    height: 1050,
  },
  kernels: {
    src: "/photos/kernels.webp",
    alt: "Loose dried maize kernels filling the frame",
    width: 1200,
    height: 900,
  },
} as const;

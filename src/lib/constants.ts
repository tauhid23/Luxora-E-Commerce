// ─── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/products?category=new-arrivals", label: "New Arrivals" },
  { href: "/products?category=best-sellers", label: "Best Sellers" },
  { href: "/products?category=sale", label: "Sale" },
];

// ─── Categories ────────────────────────────────────────────────────────────────
export const CATEGORIES = [
  {
    id: "1",
    name: "Men's Fashion",
    slug: "mens-fashion",
    image: "/images/categories/mens.jpg",
    productCount: 0,
  },
  {
    id: "2",
    name: "Women's Fashion",
    slug: "womens-fashion",
    image: "/images/categories/womens.jpg",
    productCount: 0,
  },
  {
    id: "3",
    name: "Electronics",
    slug: "electronics",
    image: "/images/categories/electronics.jpg",
    productCount: 0,
  },
  {
    id: "4",
    name: "Home & Living",
    slug: "home-living",
    image: "/images/categories/home.jpg",
    productCount: 0,
  },
  {
    id: "5",
    name: "Accessories",
    slug: "accessories",
    image: "/images/categories/accessories.jpg",
    productCount: 0,
  },
  {
    id: "6",
    name: "Beauty",
    slug: "beauty",
    image: "/images/categories/beauty.jpg",
    productCount: 0,
  },
];

// ─── Sort Options ──────────────────────────────────────────────────────────────
export const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "best_seller", label: "Best Sellers" },
  { value: "name_asc", label: "Name: A–Z" },
];

// ─── Social Links ──────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
  { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
  { href: "https://twitter.com", label: "Twitter/X", icon: "twitter" },
  { href: "https://pinterest.com", label: "Pinterest", icon: "pinterest" },
];

// ─── Footer Links ──────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  shop: [
    { href: "/products?category=new-arrivals", label: "New Arrivals" },
    { href: "/products?category=best-sellers", label: "Best Sellers" },
    { href: "/products?category=sale", label: "Sale" },
    { href: "/products", label: "All Products" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
  ],
  help: [
    { href: "/faq", label: "FAQ" },
    { href: "/shipping", label: "Shipping & Returns" },
    { href: "/size-guide", label: "Size Guide" },
    { href: "/track-order", label: "Track Your Order" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

// ─── Cart ──────────────────────────────────────────────────────────────────────
export const TAX_RATE = 0.1; // 10%
export const FREE_SHIPPING_THRESHOLD = 100;
export const SHIPPING_COST = 9.99;

// ─── Pagination ────────────────────────────────────────────────────────────────
export const DEFAULT_PAGE_SIZE = 12;
export const PAGE_SIZE_OPTIONS = [12, 24, 48];

// ─── Price Range ──────────────────────────────────────────────────────────────
export const PRICE_RANGE = { min: 0, max: 5000 };

// ─── Site Info ─────────────────────────────────────────────────────────────────
export const SITE_NAME = "Luxora";
export const SITE_DESCRIPTION =
  "Discover premium fashion, electronics, and lifestyle products curated for the discerning shopper.";
export const CURRENCY = "USD";
export const CURRENCY_SYMBOL = "$";

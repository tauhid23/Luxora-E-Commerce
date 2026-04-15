// ─── Product ───────────────────────────────────────────────────────────────────
export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  currency: string;
  category: string;
  subcategory?: string;
  brand?: string;
  tags: string[];
  images: ProductImage[];
  thumbnail: string;
  stock: number;
  sku: string;
  rating: number;
  reviewCount: number;
  reviews?: ProductReview[];
  isFeatured: boolean;
  isNew: boolean;
  isBestSeller: boolean;
  createdAt: string;
  updatedAt: string;
}


// -------------------- Product Details -------------------




// ─── Cart ──────────────────────────────────────────────────────────────────────
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
  size?: string;
  color?: string;
  maxStock: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  couponCode?: string;
}

// ─── Wishlist ──────────────────────────────────────────────────────────────────
export interface WishlistItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  thumbnail: string;
  addedAt: string;
}

// ─── User / Auth ───────────────────────────────────────────────────────────────
export interface Address {
  id: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  addresses: Address[];
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// ─── Order ─────────────────────────────────────────────────────────────────────
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── API ───────────────────────────────────────────────────────────────────────
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

// ─── UI ─────────────────────────────────────────────────────────────────────────
export interface Toast {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
}

export interface UIState {
  isSidebarOpen: boolean;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  activeModal: string | null;
  toasts: Toast[];
  isPageLoading: boolean;
}

// ─── Filter / Sort ─────────────────────────────────────────────────────────────
export interface ProductFilters {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  brand?: string[];
  tags?: string[];
  inStock?: boolean;
  isNew?: boolean;
}

export type SortOption =
  | "newest"
  | "price_asc"
  | "price_desc"
  | "rating"
  | "best_seller"
  | "name_asc";

export interface ProductQueryParams extends ProductFilters {
  page?: number;
  limit?: number;
  sort?: SortOption;
  search?: string;
}

// ─── Category ─────────────────────────────────────────────────────────────────
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  productCount: number;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  parentId: string;
}

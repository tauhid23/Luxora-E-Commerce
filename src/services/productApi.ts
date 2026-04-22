import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Product,
  Category,
  PaginatedResponse,
  ProductQueryParams,
} from "@/types";
import type { RootState } from "@/store";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "https://api.example.com/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Product", "Products", "Category"],
  endpoints: (builder) => ({
    // ── Get all products (with filters/pagination) ──────────────────────────
    getProducts: builder.query<
      PaginatedResponse<Product>,
      ProductQueryParams | void
    >({
      query: (params) => {
        const searchParams = new URLSearchParams();
        if (params) {
          Object.entries(params).forEach(([k, v]) => {
            if (v !== undefined && v !== null && v !== "")
              searchParams.set(k, String(v));
          });
        }
        return `/products?${searchParams.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Product" as const,
                id,
              })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),

    // ── Get single product ──────────────────────────────────────────────────
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Product", id }],
    }),

    // ── Get product by slug ─────────────────────────────────────────────────
    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/products/slug/${slug}`,
      providesTags: (result) =>
        result ? [{ type: "Product", id: result.id }] : [],
    }),

    // ── Get featured products ───────────────────────────────────────────────
    getFeaturedProducts: builder.query<Product[], void>({
      query: () => "/products/featured",
      providesTags: [{ type: "Products", id: "FEATURED" }],
    }),

    // ── Get new arrivals ────────────────────────────────────────────────────
    getNewArrivals: builder.query<Product[], number | void>({
      query: (limit = 8) => `/products/new-arrivals?limit=${limit}`,
      providesTags: [{ type: "Products", id: "NEW_ARRIVALS" }],
    }),

    // ── Get best sellers ────────────────────────────────────────────────────
    getBestSellers: builder.query<Product[], number | void>({
      query: (limit = 8) => `/products/best-sellers?limit=${limit}`,
      providesTags: [{ type: "Products", id: "BEST_SELLERS" }],
    }),

    // ── Get categories ──────────────────────────────────────────────────────
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),

    // ── Get category by slug ────────────────────────────────────────────────
    getCategoryBySlug: builder.query<Category, string>({
      query: (slug) => `/categories/${slug}`,
      providesTags: (_result, _err, slug) => [{ type: "Category", id: slug }],
    }),

    // ── Search products ─────────────────────────────────────────────────────
    searchProducts: builder.query<Product[], string>({
      query: (q) => `/products/search?q=${encodeURIComponent(q)}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductBySlugQuery,
  useGetFeaturedProductsQuery,
  useGetNewArrivalsQuery,
  useGetBestSellersQuery,
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery,
  useSearchProductsQuery,
} = productApi;

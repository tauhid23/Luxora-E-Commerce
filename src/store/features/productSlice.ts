import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductFilters, SortOption } from "@/types";

interface ProductState {
  items: Product[];
  featuredItems: Product[];
  selectedProduct: Product | null;
  filters: ProductFilters;
  sort: SortOption;
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ProductState = {
  items: [],
  featuredItems: [],
  selectedProduct: null,
  filters: {},
  sort: "newest",
  page: 1,
  limit: 12,
  totalItems: 0,
  totalPages: 0,
  isLoading: false,
  error: null,
  searchQuery: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(
      state,
      action: PayloadAction<{
        items: Product[];
        total: number;
        totalPages: number;
      }>
    ) {
      state.items = action.payload.items;
      state.totalItems = action.payload.total;
      state.totalPages = action.payload.totalPages;
    },

    setFeaturedProducts(state, action: PayloadAction<Product[]>) {
      state.featuredItems = action.payload;
    },

    setSelectedProduct(state, action: PayloadAction<Product | null>) {
      state.selectedProduct = action.payload;
    },

    setFilters(state, action: PayloadAction<Partial<ProductFilters>>) {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1; // reset page on filter change
    },

    clearFilters(state) {
      state.filters = {};
      state.page = 1;
    },

    setSort(state, action: PayloadAction<SortOption>) {
      state.sort = action.payload;
      state.page = 1;
    },

    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },

    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.page = 1;
    },

    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.page = 1;
    },

    setProductsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    setProductsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setFeaturedProducts,
  setSelectedProduct,
  setFilters,
  clearFilters,
  setSort,
  setPage,
  setLimit,
  setSearchQuery,
  setProductsLoading,
  setProductsError,
} = productSlice.actions;

export default productSlice.reducer;

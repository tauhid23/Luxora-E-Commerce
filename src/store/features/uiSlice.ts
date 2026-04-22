import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UIState, Toast } from "@/types";
import { generateId } from "@/lib/utils";

const initialState: UIState = {
  isSidebarOpen: false,
  isCartOpen: false,
  isSearchOpen: false,
  activeModal: null,
  toasts: [],
  isPageLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    openCart(state) {
      state.isCartOpen = true;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    openSearch(state) {
      state.isSearchOpen = true;
    },
    closeSearch(state) {
      state.isSearchOpen = false;
    },
    toggleSearch(state) {
      state.isSearchOpen = !state.isSearchOpen;
    },

    openModal(state, action: PayloadAction<string>) {
      state.activeModal = action.payload;
    },
    closeModal(state) {
      state.activeModal = null;
    },

    addToast(
      state,
      action: PayloadAction<Omit<Toast, "id">>
    ) {
      state.toasts.push({
        ...action.payload,
        id: generateId(),
        duration: action.payload.duration ?? 3000,
      });
    },
    removeToast(state, action: PayloadAction<string>) {
      state.toasts = state.toasts.filter((t) => t.id !== action.payload);
    },
    clearToasts(state) {
      state.toasts = [];
    },

    setPageLoading(state, action: PayloadAction<boolean>) {
      state.isPageLoading = action.payload;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  toggleSidebar,
  openCart,
  closeCart,
  toggleCart,
  openSearch,
  closeSearch,
  toggleSearch,
  openModal,
  closeModal,
  addToast,
  removeToast,
  clearToasts,
  setPageLoading,
} = uiSlice.actions;

export default uiSlice.reducer;

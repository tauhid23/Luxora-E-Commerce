import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { WishlistItem } from "@/types";
import { generateId } from "@/lib/utils";

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(
      state,
      action: PayloadAction<Omit<WishlistItem, "id" | "addedAt">>
    ) {
      const exists = state.items.some(
        (i) => i.productId === action.payload.productId
      );
      if (!exists) {
        state.items.push({
          ...action.payload,
          id: generateId(),
          addedAt: new Date().toISOString(),
        });
      }
    },

    removeFromWishlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.productId !== action.payload);
    },

    toggleWishlist(
      state,
      action: PayloadAction<Omit<WishlistItem, "id" | "addedAt">>
    ) {
      const index = state.items.findIndex(
        (i) => i.productId === action.payload.productId
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push({
          ...action.payload,
          id: generateId(),
          addedAt: new Date().toISOString(),
        });
      }
    },

    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

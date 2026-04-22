import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Cart } from "@/types";
import { TAX_RATE, SHIPPING_COST, FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { generateId } from "@/lib/utils";

function recalculate(items: CartItem[]): Omit<Cart, "items" | "couponCode" | "discount"> {
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = parseFloat(
    items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)
  );
  const tax = parseFloat((subtotal * TAX_RATE).toFixed(2));
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : subtotal > 0 ? SHIPPING_COST : 0;
  const total = parseFloat((subtotal + tax + shipping).toFixed(2));
  return { totalItems, subtotal, tax, total };
}

interface CartState extends Cart {
  shipping: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  discount: 0,
  tax: 0,
  shipping: 0,
  total: 0,
  couponCode: undefined,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<Omit<CartItem, "id"> & { id?: string }>
    ) {
      const { productId, size, color } = action.payload;
      const existing = state.items.find(
        (i) => i.productId === productId && i.size === size && i.color === color
      );
      if (existing) {
        existing.quantity = Math.min(
          existing.quantity + (action.payload.quantity ?? 1),
          existing.maxStock
        );
      } else {
        state.items.push({
          ...action.payload,
          id: action.payload.id ?? generateId(),
          quantity: action.payload.quantity ?? 1,
        });
      }
      const calc = recalculate(state.items);
      Object.assign(state, calc);
      state.shipping =
        calc.subtotal >= FREE_SHIPPING_THRESHOLD
          ? 0
          : calc.subtotal > 0
            ? SHIPPING_COST
            : 0;
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      const calc = recalculate(state.items);
      Object.assign(state, calc);
      state.shipping =
        calc.subtotal >= FREE_SHIPPING_THRESHOLD
          ? 0
          : calc.subtotal > 0
            ? SHIPPING_COST
            : 0;
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(
          1,
          Math.min(action.payload.quantity, item.maxStock)
        );
      }
      const calc = recalculate(state.items);
      Object.assign(state, calc);
      state.shipping =
        calc.subtotal >= FREE_SHIPPING_THRESHOLD
          ? 0
          : calc.subtotal > 0
            ? SHIPPING_COST
            : 0;
    },

    applyCoupon(state, action: PayloadAction<{ code: string; discount: number }>) {
      state.couponCode = action.payload.code;
      state.discount = action.payload.discount;
      state.total = parseFloat(
        (state.subtotal + state.tax + state.shipping - action.payload.discount).toFixed(2)
      );
    },

    removeCoupon(state) {
      state.couponCode = undefined;
      state.discount = 0;
      state.total = parseFloat(
        (state.subtotal + state.tax + state.shipping).toFixed(2)
      );
    },

    clearCart(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyCoupon,
  removeCoupon,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

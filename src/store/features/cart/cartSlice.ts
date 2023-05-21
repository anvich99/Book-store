import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "types";

interface CartState {
  cartItems: Book[];
  totalCost: number;
  amount: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  totalCost: 0,
  amount: 4,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<{ id: number; name: string }>) => {},
    clearCart: (state) => {},
  },
});

export default cartSlice.reducer;
export const { addToCart, clearCart } = cartSlice.actions;

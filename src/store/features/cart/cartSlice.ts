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
  amount: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Book>) => {
      state.cartItems.push(payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const bookIsbn = action.payload;
    },
  },
  extraReducers(builder) {},
});

export default cartSlice.reducer;
export const { addToCart, clearCart, removeItem } = cartSlice.actions;

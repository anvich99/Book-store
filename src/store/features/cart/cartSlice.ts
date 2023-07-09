import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "types";
import { BookCart } from "types/types";

interface CartState {
  cartItems: Book[];
  total: number;
  amount: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  total: 0,
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
    removeItem: (state, { payload }) => {
      const bookIsbn = payload;
      const delBook = state.cartItems.findIndex((item) => item.isbn13 !== bookIsbn);
      state.cartItems.splice(delBook, 1);
    },
    increase: (state, { payload }) => {
      state.cartItems.find((book) => book.isbn13 === payload);
    },
    decrease: (state, { payload }) => {
      state.cartItems.find((book) => book.isbn13 === payload);
    },
    calculateTotals: (state) => {
      let total = 0;
      state.cartItems.forEach((book) => {
        total += +book.price.substring(1);
      });
      state.total = total;
    },
  },
  extraReducers(builder) {},
});

export default cartSlice.reducer;
export const { addToCart, clearCart, removeItem, calculateTotals, increase, decrease } =
  cartSlice.actions;

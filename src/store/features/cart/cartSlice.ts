import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "types";

interface CartState {
  cartItems: Book[];
  totalCost: number;
  amount: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [
    {
      error: "404",
      title: "morozko",
      subtitle: "3 kozla",
      authors: "kto-to",
      publisher: "esta",
      isbn10: "123",
      isbn13: "34332",
      pages: "134",
      year: "2022",
      rating: "5",
      language: "eng",
      desc: "fgfg",
      price: "30$",
      image: "https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg",
      url: "https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg",
    },
  ],
  totalCost: 0,
  amount: 3,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(payload);
      state.cartItems.push({
        error: "404",
        title: "morozko",
        subtitle: "3 kozla",
        authors: "kto-to",
        publisher: "esta",
        isbn10: "123",
        isbn13: "34332",
        pages: "134",
        year: "2022",
        rating: "5",
        language: "eng",
        desc: "fgfg",
        price: "30$",
        image: "https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg",
        url: "https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg",
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const bookIsbn = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, clearCart, removeItem } = cartSlice.actions;

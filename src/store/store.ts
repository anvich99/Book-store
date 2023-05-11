import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/favorites/favoritesSlice";
import cartReducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,
  },
});

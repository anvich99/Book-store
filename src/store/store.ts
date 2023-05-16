import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./features/new/newBooksSlice";
import searchBooksReducer from "./features/search/searchBooks";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    newBooks: newBooksReducer,
    searchBooks: searchBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

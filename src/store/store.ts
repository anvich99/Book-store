import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./features/new/newBooksSlice";
import searchBooksReducer from "./features/search/searchBooks";
import cartReducer from "./features/cart/cartSlice";
import detailsReducer from "./features/bookDetails/bookDetails";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    newBooks: newBooksReducer,
    searchBooks: searchBooksReducer,
    bookDetails: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

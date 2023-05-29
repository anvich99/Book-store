import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./features/new/newBooksSlice";
import searchBooksReducer from "./features/search/searchBooks";
import cartReducer from "./features/cart/cartSlice";
import detailsReducer from "./features/bookDetails/bookDetails";
import favoriteReducer from "./features/favorites/favoritesSlice";
import userReducer from "./features/userInfo/userInfoSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    newBooks: newBooksReducer,
    searchBooks: searchBooksReducer,
    bookDetails: detailsReducer,
    favoriteBooks: favoriteReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

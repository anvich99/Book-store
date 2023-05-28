import { store } from "./store";
import cartReducer from "./features/cart/cartSlice";
import booksReducer from "./features/favorites/favoritesSlice";
import newBooksReducer from "./features/new/newBooksSlice";
import searchBooksReducer from "./features/search/searchBooks";
import { fetchNewBooks } from "./features/new/newBooksSlice";
import { selectCart } from "./selectors/cartSelectors";
import { selectNewBooks } from "./selectors/newBooks";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { addToCart, clearCart, removeItem, calculateTotals } from "./features/cart/cartSlice";
import { fetchBooksBySearch } from "./features/search/searchBooks";
import { RootState } from "./store";
import { selectFavoriteBooks } from "./selectors/favoritesSelectors";
import { addToFavorite } from "./features/favorites/favoritesSlice";
import { selectSearchBooks } from "./selectors/searchBooksSelect";
export {
  store,
  cartReducer,
  booksReducer,
  fetchNewBooks,
  selectCart,
  selectNewBooks,
  useAppDispatch,
  useAppSelector,
  addToCart,
  clearCart,
  removeItem,
  newBooksReducer,
  fetchBooksBySearch,
  searchBooksReducer,
  calculateTotals,
  selectFavoriteBooks,
  addToFavorite,
  selectSearchBooks,
};

export type { RootState };

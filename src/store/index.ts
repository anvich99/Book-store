import { store } from "./store";
import cartReducer from "./features/cart/cartSlice";
import booksReducer from "./features/favorites/favoritesSlice";
import { fetchBooks } from "./features/new/newBooks";
import { selectCart } from "./selectors/cartSelectors";
import { selectNewBooks } from "./selectors/newBooks";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { addToCart, clearCart } from "./features/cart/cartSlice";

export {
  store,
  cartReducer,
  booksReducer,
  fetchBooks,
  selectCart,
  selectNewBooks,
  useAppDispatch,
  useAppSelector,
  addToCart,
  clearCart,
};

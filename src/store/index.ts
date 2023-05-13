import { store } from "./store";
import cartReducer from "./features/cart/cartSlice";
import booksReducer from "./features/favorites/favoritesSlice";
import { fetchBooks } from "./features/new/newBooks";
export { store, cartReducer, booksReducer, fetchBooks };

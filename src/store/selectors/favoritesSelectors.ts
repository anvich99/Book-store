import { RootState } from "store/store";

export const selectFavoriteBooks = (state: RootState) => state.favoriteBooks;

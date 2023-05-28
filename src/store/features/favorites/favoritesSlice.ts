import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "types";

interface FavoriteState {
  favoriteBooks: Book[];
  isLoading: boolean;
}

const initialState: FavoriteState = {
  favoriteBooks: [],
  isLoading: true,
};

const favoritesSlice = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<Book>) => {
      state.favoriteBooks.push(payload);
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorite } = favoritesSlice.actions;

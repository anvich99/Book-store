import { createSlice } from "@reduxjs/toolkit";

interface BooksState {
  books: any[];
}

const initialState: BooksState = {
  books: [],
};

const favoritesSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default favoritesSlice.reducer;

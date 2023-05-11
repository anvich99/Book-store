import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface BooksState {
  books: any[];
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const newBooks = await axios.get("https://api.itbook.store/1.0/new");
});

const initialState: BooksState = {
  books: [],
};

const favoritesSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default favoritesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "types/types";

interface NewBooksState {
  books: Book[];
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const { data } = await axios.get("https://api.itbook.store/1.0/search/mongodb");
  return data.books;
});

const initialState: NewBooksState = {
  books: [],
};

const newBooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state, { payload }) => {});
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.books.push(...payload);
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {});
  },
});

export default newBooksSlice.reducer;

import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { NewBook, NewBookAPI } from "types";

interface NewBooksState extends NewBookAPI {
  isLoading: boolean;
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const { data } = await axios.get("https://api.itbook.store/1.0/new");
    return data;
  } catch (error) {
    const someErrorMessage = error as AxiosError;
    return isRejectedWithValue(someErrorMessage.message);
  }
});

const initialState: NewBooksState = {
  total: "",
  books: [],
  isLoading: false,
  error: "",
};

const newBooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state, { payload }) => {});
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.books = payload.books;
      state.total = payload.total;
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {});
  },
});

export default newBooksSlice.reducer;

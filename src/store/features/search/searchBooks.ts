import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { SearchBooksAPI } from "types";

interface SearchBooksState extends SearchBooksAPI {
  isLoading: boolean;
}

export const fetchBooksBySearch = createAsyncThunk<SearchBooksAPI, string, { rejectValue: string }>(
  "searchBooks/fetchSearchBooks",
  async (searchBook, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.itbook.store/1.0/search/${searchBook}`);
      return data;
    } catch (error) {
      const someErrorMessage = error as AxiosError;
      return rejectWithValue(someErrorMessage.message);
    }
  },
);

const initialState: SearchBooksState = {
  total: "",
  books: [],
  isLoading: false,
  error: null,
  page: "1.0",
};

const searchBookSlice = createSlice({
  name: "searchBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
      state.total = payload.total;
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchBookSlice.reducer;

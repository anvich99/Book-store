import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { NewBookAPI } from "types";

interface NewBooksState extends NewBookAPI {
  isLoading: boolean;
}

export const fetchNewBooks = createAsyncThunk<NewBookAPI, undefined, { rejectValue: string }>(
  "newBooks/fetchNewBooks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://api.itbook.store/1.0/new");
      return data;
    } catch (error) {
      const someErrorMessage = error as AxiosError;
      return rejectWithValue(someErrorMessage.message);
    }
  },
);

const initialState: NewBooksState = {
  total: "",
  books: [],
  isLoading: false,
  error: null,
};

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
      state.total = payload.total;
    });
    builder.addCase(fetchNewBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newBooksSlice.reducer;

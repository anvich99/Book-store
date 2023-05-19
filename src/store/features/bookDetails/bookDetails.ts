import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Book } from "types";

interface BookDetailsState extends Book {
  isLoading: boolean;
}

export const fetchBookDeatails = createAsyncThunk<Book, string, { rejectValue: string }>(
  "bookDetails/fetchBookDeatails",
  async (inbn13, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.itbook.store/1.0/books/${inbn13}`);
      return data;
    } catch (error) {
      const someErrorMessage = error as AxiosError;
      return rejectWithValue(someErrorMessage.message);
    }
  },
);

const initialState: BookDetailsState = {
  isLoading: false,
  error: null,
  title: "",
  subtitle: "",
  authors: "",
  publisher: "",
  isbn10: "",
  isbn13: "",
  pages: "",
  year: "",
  rating: "",
  desc: "",
  price: "",
  image: "",
  url: "",
  pdf: null,
};
const BookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookDeatails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBookDeatails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.authors = payload.authors;
      state.title = payload.title;
      state.subtitle = payload.subtitle;
      state.publisher = payload.publisher;
      state.isbn10 = payload.isbn10;
      state.isbn13 = payload.isbn13;
      state.pages = payload.pages;
      state.year = payload.year;
      state.rating = payload.rating;
      state.desc = payload.desc;
      state.price = payload.price;
      state.image = payload.image;
      state.url = payload.url;
    });
    builder.addCase(fetchBookDeatails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default BookDetailsSlice.reducer;

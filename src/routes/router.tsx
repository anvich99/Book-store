import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {
  AccountPage,
  BookPage,
  CartPage,
  FavoritesPage,
  MainPage,
  SearchPage,
  SignInPage,
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/search" element={<SearchPage />} />
    </>,
  ),
);

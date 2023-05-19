import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import {
  MainPage,
  AccountPage,
  BookPage,
  CartPage,
  FavoritesPage,
  SearchPage,
  SignInPage,
} from "pages";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.MAIN} element={<MainPage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.BOOK} element={<BookPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.CART} element={<CartPage />} />
      <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
    </>,
  ),
);

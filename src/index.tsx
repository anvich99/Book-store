import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalStyles } from "./ui";
import { Provider } from "react-redux";
import { store } from "./store";
import { Normalize } from "styled-normalize";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    {/* <Normalize /> */}
    <GlobalStyles />
    <RouterProvider router={router} />
  </Provider>,
);

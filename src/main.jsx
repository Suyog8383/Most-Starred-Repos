import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Profile from "./components/ProfileLayout";

import { reduxStore } from "./Store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <Profile />
  </Provider>
);

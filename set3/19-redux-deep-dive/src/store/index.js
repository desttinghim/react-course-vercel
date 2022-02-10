import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui";
import cartReducer from "./cart";
import productReducer from "./product";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;

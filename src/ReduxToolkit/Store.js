import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart.slice";
import productSlice from "./product.slice";
import userSlice from "./user.slice";

export const store = configureStore({
  reducer: {
    cart_slice: CartSlice,
    product: productSlice,
    user: userSlice,
  },
});

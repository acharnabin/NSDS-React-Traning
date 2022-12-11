import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  count: 0,
  cartHash: {},
};

const CartSlice = createSlice({
  //name should be unique
  name: "CartSlice",

  initialState,

  // non network call
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);

      state.cartHash = {
        ...state.cartHash,
        [payload?.id]: true,
      };
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems.splice(payload?.index, 1);
      state.cartHash = {
        ...state.cartHash,
        [payload?.id]: false,
      };
    },
  },
});

//

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;

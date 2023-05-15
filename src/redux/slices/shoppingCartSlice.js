import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState: {
    shoppingCart: [],
  },
  reducers: {
    setShoppingCart(state, action) {
      state.shoppingCart = [];
      state.shoppingCart = action.payload;
    },
    setShoppingCartReset(state) {
      state.shoppingCart = [];
    },
  },
});

export const { setShoppingCart, setShoppingCartReset } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;

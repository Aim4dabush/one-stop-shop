import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    shoppingCart: [],
    wishList: [],
  },
  reducers: {
    setShoppingCart(state, action) {
      state.shoppingCart = [];
      state.shoppingCart = action.payload;
    },
    setShoppingCartReset(state) {
      state.shoppingCart = [];
    },
    setWishList(state, action) {
      state.wishList = [];
      state.wishList = action.payload;
    },
    setWishListReset(state) {
      state.wishList = [];
    },
  },
});

export const {
  setShoppingCart,
  setShoppingCartReset,
  setWishList,
  setWishListReset,
} = cartsSlice.actions;
export default cartsSlice.reducer;

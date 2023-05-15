import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wish-list",
  initialState: {
    wishListCart: [],
  },
  reducers: {
    setWishListCart(state, action) {
      state.wishListCart = [];
      state.wishListCart = action.payload;
    },
    setWishListCartReset(state) {
      state.wishListCart = [];
    },
  },
});

export const { setWishListCart, setWishListCartReset } = wishListSlice.actions;
export default wishListSlice.reducer;

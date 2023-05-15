import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: {},
    products: [],
  },
  reducers: {
    setProduct(state, action) {
      state.product = {};
      state.product = action.payload;
    },
    setProductReset(state) {
      state.product = {};
    },
    setProducts(state, action) {
      state.products = [];
      state.products = action.payload;
    },
    setProductsReset(state) {
      state.products = [];
    },
  },
});

export const { setProduct, setProductReset, setProducts, setProductsReset } =
  productsSlice.actions;
export default productsSlice.reducer;

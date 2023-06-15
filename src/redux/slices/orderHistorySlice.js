import { createSlice } from "@reduxjs/toolkit";

const orderHistorySlice = createSlice({
  name: "order-history",
  initialState: {
    orderHistory: [],
  },
  reducers: {
    setOrderHistory(state, actions) {
      state.orderHistory = [];
      state.history = actions.payload;
    },
    setOrderHistoryReset(state) {
      state.orderHistory = [];
    },
  },
});

export const { setOrderHistory, setOrderHistoryReset } =
  orderHistorySlice.actions;
export default orderHistorySlice.reducer;

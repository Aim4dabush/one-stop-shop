import { combineReducers, configureStore } from "@reduxjs/toolkit";

//slices
import authReducer from "./slices/authSlice";
import cartsReducer from "./slices/cartsSlice";
import orderHistoryReducer from "./slices/orderHistorySlice";
import productsReducer from "./slices/productsSlice";
import profileReducer from "./slices/profileSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  carts: cartsReducer,
  order_history: orderHistoryReducer,
  products: productsReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

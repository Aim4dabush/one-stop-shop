import { combineReducers, configureStore } from "@reduxjs/toolkit";

//slices
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";
import profileReducer from "./slices/profileSlice";
import shopReducer from "./slices/shoppingCartSlice";
import wishReducer from "./slices/wishListSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  profile: profileReducer,
  shop: shopReducer,
  wish: wishReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

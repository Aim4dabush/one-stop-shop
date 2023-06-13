import { combineReducers, configureStore } from "@reduxjs/toolkit";

//slices
import authReducer from "./slices/authSlice";
import cartsReducer from "./slices/cartsSlice";
import productsReducer from "./slices/productsSlice";
import profileReducer from "./slices/profileSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  carts: cartsReducer,
  products: productsReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";

//slices
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";
import profileReducer from "./slices/profileSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

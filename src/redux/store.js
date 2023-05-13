import { combineReducers, configureStore } from "@reduxjs/toolkit";

//slices
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

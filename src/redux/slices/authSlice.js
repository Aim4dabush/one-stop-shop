import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedUser: localData ? localData : {},
    registered: "",
  },
  reducers: {
    setLoggedUser(state, action) {
      state.loggedUser = {};
      state.loggedUser = action.payload;
    },
    setLoggedUserReset(state) {
      state.loggedUser = {};
    },
    setRegistered(state, action) {
      state.registered = "";
      state.registered = action.payload;
    },
    setRegisteredReset(state) {
      state.registered = "";
    },
  },
});

export const {
  setLoggedUser,
  setLoggedUserReset,
  setRegistered,
  setRegisteredReset,
} = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedUser: localData ? localData : {},
  },
  reducers: {
    setLoggedUser(state, action) {
      state.loggedUser = {};
      state.loggedUser = action.payload;
    },
    setLoggedUserReset(state) {
      state.loggedUser = {};
    },
  },
});

export const { setLoggedUser, setLoggedUserReset } = authSlice.actions;

export default authSlice.reducer;

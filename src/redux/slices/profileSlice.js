import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    info: {},
  },
  reducers: {
    setInfo(state, action) {
      state.info = {};
      state.info = action.payload;
    },
    setInfoReset(state) {
      state.info = {};
    },
  },
});

export const { setInfo, setInfoReset } = profileSlice.actions;
export default profileSlice.reducer;

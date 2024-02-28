import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: initialState,
  reducers: {
    addAuth(state, { payload }) {
      state.auth = payload;
    },
  },
});

export const { addAuth } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;

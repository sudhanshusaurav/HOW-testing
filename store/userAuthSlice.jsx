import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialState,
  reducers: {
    addUserAuth(state, { payload }) {
      state.auth = payload;
    },
  },
});

export const { addUserAuth } = userAuthSlice.actions;

export default userAuthSlice.reducer;

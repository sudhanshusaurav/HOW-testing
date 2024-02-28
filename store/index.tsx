import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeConfigSlice from "./themeConfigSlice";
import adminAuthSlice from "./adminAuthSlice";
import userAuthSlice from "./userAuthSlice";
import countrySlice from "./countrySlice";

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  adminAuth: adminAuthSlice,
  userAuth: userAuthSlice,
  countries: countrySlice,
});

export default configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

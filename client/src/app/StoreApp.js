import { configureStore } from "@reduxjs/toolkit";

import dogReducer from "../features/dogSlice.js";

export const store = configureStore({
  reducer: { dog: dogReducer },
});
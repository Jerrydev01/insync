import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todo: counterReducer,
  },
});

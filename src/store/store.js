import { configureStore } from "@reduxjs/toolkit";
import  { counterSlice } from "./slices/counterSlice";
import { baseApi } from "../services/baseApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch);
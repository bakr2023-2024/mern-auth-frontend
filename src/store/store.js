import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";
import { styleReducer } from "../slices/styleSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    style: styleReducer,
  },
  middleware: (func) => func().concat(apiSlice.middleware),
  devTools: true,
});
export { store };

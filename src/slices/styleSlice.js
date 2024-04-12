import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: localStorage.getItem("theme") ?? "light",
};
const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    setStyle: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    removeStyle: (state, action) => {
      localStorage.removeItem("theme");
    },
  },
});
export const styleReducer = styleSlice.reducer;
export const { setStyle, removeStyle } = styleSlice.actions;

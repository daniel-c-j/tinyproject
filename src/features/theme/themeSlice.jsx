import { createSlice } from "@reduxjs/toolkit";
import ThemeStorage from "./data/ThemeStorage";

const initialValue = ThemeStorage.retrieve();

const themeSlice = createSlice({
  name: "theme",
  initialValue,
  reducers: {
    setTheme(state, action) {
      state = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice;

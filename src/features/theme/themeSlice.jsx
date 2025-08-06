import { createSlice } from "@reduxjs/toolkit";

const themeData = { light: "light", dark: "dark" };
export { themeData };

const initialState = { val: themeData.light };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeTo(state, action) {
      state.val = action.payload;
    },
  },
});

export const { setThemeTo } = themeSlice.actions;
export default themeSlice.reducer;

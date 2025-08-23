import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";


export type Theme = "light" | "dark";

// * Can't because of erasableSyntax rule.
// enum Theme {
//   Light,
//   Dark 
// }


const initialState: { val: Theme } = { val: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeTo(state, action: PayloadAction<Theme>) {
      state.val = action.payload;
    },
  },
});

export const { setThemeTo } = themeSlice.actions;
export const currentTheme = (state: RootState) => state.theme.val;

export default themeSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


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
export default themeSlice.reducer;

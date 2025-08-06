import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    projectAdd(state, action) {
      state.items.push(action.payload);
    },
    projectUpdate(state, action) {
      const project = state.items.find((project) => {
        return project.id === action.payload.id;
      });

      if (project) {
        project.title = action.payload.title;
        project.desc = action.payload.desc;
        project.dueDate = action.payload.dueDate;
        project.task = action.payload.task;
      }
    },
    projectDelete(state, action) {
      state.items = state.items.filter(
        (project) => project.id !== action.payload.id
      );
    },
  },
});

export const { projectAdd, projectUpdate, projectDelete } =
  projectSlice.actions;

export default projectSlice.reducer;

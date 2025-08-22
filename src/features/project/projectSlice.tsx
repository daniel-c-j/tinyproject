import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Project } from "./model/project";

const initialState: { items: Project[] } = { items: [] };

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    projectAdd(state, action: PayloadAction<Project>) {
      state.items.push(action.payload);
    },
    projectUpdate(state, action: PayloadAction<Project>) {
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
    projectDelete(state, action: PayloadAction<Project>) {
      state.items = state.items.filter(
        (project) => project.id !== action.payload.id
      );
    },
  },
});

export const { projectAdd, projectUpdate, projectDelete } =
  projectSlice.actions;

export default projectSlice.reducer;

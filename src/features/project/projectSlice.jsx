import { createSlice } from "@reduxjs/toolkit";
import ProjectStorage from "./data/ProjectStorage";

const initialState = ProjectStorage.retrieve();

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    projectAdd(state, action) {
      state.push(action.payload);
    },
    projectUpdate(state, action) {
      const project = state.find((project) => project.id === action.payload.id);
      if (project) {
        project.title = action.payload.title;
        project.desc = action.payload.desc;
        project.dueDate = action.payload.dueData;
      }
    },
    projectDelete(state, action) {
      state = state.items.filter((project) => project.id !== action.payload.id);
    },
  },
});

export const { projectAdd, projectUpdate, projectDelete } =
  projectSlice.actions;

export default projectSlice;

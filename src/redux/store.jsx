import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/project/projectSlice";
import themeSlice from "../features/theme/themeSlice";
import { loggingMiddleware } from "./middlewares";

const store = configureStore({
  reducer: {
    project: projectSlice,
    theme: themeSlice,
  },
  middleware: applyMiddleware(loggingMiddleware),
});

import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/project/projectSlice";
import themeReducer from "../features/theme/themeSlice";
import { loggingMiddleware } from "./middlewares";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    project: projectReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware),
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

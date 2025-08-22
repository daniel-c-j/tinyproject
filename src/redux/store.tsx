import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/project/projectSlice";
import themeReducer from "../features/theme/themeSlice";
import { loggingMiddleware } from "./middlewares";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState")!)
  : {};

const rootReducer = combineReducers({
  project: projectReducer,
  theme: themeReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware),
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

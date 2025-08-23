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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: persistedState,
});


// TODO debouncing
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});


export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store;

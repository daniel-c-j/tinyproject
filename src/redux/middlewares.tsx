import type { Middleware } from "@reduxjs/toolkit";

export const loggingMiddleware: Middleware = () => (next) => (action) => {
  if (import.meta.env.DEV === true) console.log("Dispatching: " + action);
  next(action);
};

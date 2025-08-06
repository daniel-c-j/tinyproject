export const loggingMiddleware = () => (next) => (action) => {
  if (import.meta.env.DEV === true) console.log("Dispatching: " + action);
  next(action);
};

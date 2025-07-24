import { createContext, useState } from "react";
import theme from "./ThemeData";

const defaultTheme = theme.light;

const ThemeContext = createContext({ theme: defaultTheme, setTheme: () => {} });
export { ThemeContext };

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

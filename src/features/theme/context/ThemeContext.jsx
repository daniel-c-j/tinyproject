import { createContext, useState } from "react";
import ThemeStorage from "../data/ThemeStorage";

const initialValue = {
  theme: ThemeStorage.retrieve(),
  setTheme: () => {},
};

const ThemeContext = createContext(initialValue);
export { ThemeContext };

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(initialValue.theme);
  ThemeStorage.store(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

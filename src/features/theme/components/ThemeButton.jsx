import { useContext } from "react";
import dark from "../../../assets/images/dark.png";
import light from "../../../assets/images/light.png";
import { ThemeContext } from "../../../contexts/ThemeContext";
import themeData from "../data/ThemeData";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-1 transition rounded-md hover:bg-green-600/50 active:bg-green-500/50"
      type="button"
      onClick={() =>
        setTheme(theme === themeData.light ? themeData.dark : themeData.light)
      }
    >
      <img
        src={theme === themeData.light ? light : dark}
        alt="Theme icon"
        width="25"
        height="25"
      />
    </button>
  );
}

import dark from "../../../assets/images/dark.png";
import light from "../../../assets/images/light.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { currentTheme, setThemeTo } from "../themeSlice";

export default function ThemeButton() {
  const theme = useAppSelector(currentTheme);
  const dispatch = useAppDispatch();

  function onClick() {
    const themeToggleVal = theme === "light" ? "dark" : "light";
    dispatch(setThemeTo(themeToggleVal));
  }

  return (
    <button
      className="p-1 transition rounded-md hover:bg-green-600/50 active:bg-green-500/50"
      type="button"
      data-testid={theme}
      onClick={onClick}
    >
      <img
        src={theme === "light" ? dark : light}
        alt="Theme icon"
        width="25"
        height="25"
      />
    </button>
  );
}

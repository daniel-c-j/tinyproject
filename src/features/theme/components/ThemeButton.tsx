import dark from "../../../assets/images/dark.png";
import light from "../../../assets/images/light.png";
import { useDispatch, useSelector } from "react-redux";
import { setThemeTo, themeData } from "../themeSlice";

export default function ThemeButton() {
  const theme = useSelector((state) => state.theme.val);
  const dispatch = useDispatch();

  function onClick() {
    const themeToggleVal =
      theme == themeData.light ? themeData.dark : themeData.light;
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
        src={theme === themeData.light ? dark : light}
        alt="Theme icon"
        width="25"
        height="25"
      />
    </button>
  );
}

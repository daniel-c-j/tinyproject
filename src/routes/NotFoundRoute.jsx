import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import getRandomKaomoji from "../util/kaomoji";
import { ThemeContext } from "../contexts/ThemeContext";
import themeData from "../features/theme/data/ThemeData";

export default function NotFoundRoute() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className="text-center overflow-clip min-h-screen max-h-screen dark:bg-[rgb(30,30,30)] dark:text-white"
      data-theme={theme === themeData.dark && "dark"}
    >
      <div className="absolute left-[50%] top-[50%] -translate-[50%]">
        <h2 className="text-5xl sm:text-6xl font-medium pb-12">
          {getRandomKaomoji()}
        </h2>
        <h2 className="text-2xl sm:text-3xl font-bold">Not Found!</h2>

        <div className="flex flex-row justify-center items-center mt-1">
          <p className="mx-3">Redirecting to the home page...</p>
          <p className="text-xl animate-spin">🍌</p>
        </div>
      </div>
    </div>
  );
}

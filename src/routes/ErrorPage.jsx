import { useContext, useEffect } from "react";
import { useNavigate, useRouteError } from "react-router";
import getRandomKaomoji from "../util/kaomoji";
import { ThemeContext } from "../contexts/ThemeContext";
import themeData from "../features/theme/data/ThemeData";

function shouldRedirect(error) {
  if (error?.redirect !== undefined) return error?.redirect;
  if (error?.status == 404) return true;
  return false;
}

export default function ErrorPage() {
  const { theme } = useContext(ThemeContext);

  const error = useRouteError();
  const useRedirect = shouldRedirect(error);

  return (
    <div
      className="text-center overflow-clip min-h-screen max-h-screen dark:bg-[rgb(30,30,30)] dark:text-white"
      data-theme={theme === themeData.dark && "dark"}
    >
      <div className="absolute left-[50%] top-[50%] -translate-[50%]">
        <h2 className="text-5xl sm:text-6xl font-medium pb-12">
          {getRandomKaomoji()}
        </h2>

        <h2 className="text-2xl sm:text-3xl font-bold">
          {"Error " + (error?.status || "")}
        </h2>

        {useRedirect ? (
          <RedirectRouteFeedback />
        ) : (
          <p className="m-2">Something went wrong...</p>
        )}
      </div>
    </div>
  );
}

function RedirectRouteFeedback() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-row justify-center items-center m-2">
      <p className="mx-3 italic opacity-80">Redirecting to the home page...</p>
      <p className="text-lg sm:text-xl animate-spin">🍌</p>
    </div>
  );
}

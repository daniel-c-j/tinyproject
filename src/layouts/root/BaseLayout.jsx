import { useContext } from "react";
import ThemeContextProvider, {
  ThemeContext,
} from "../../contexts/ThemeContext";
import themeData from "../../features/theme/data/ThemeData";
import SideBar from "../sidebar/SideBar";
import QuickMenu from "../quickmenu/QuickMenu";
import ThemeButton from "../../features/theme/components/ThemeButton";
import ProjectContextProvider from "../../contexts/ProjectContext";
import { Outlet } from "react-router";

export default function BaseLayoutWrapper() {
  return (
    <ThemeContextProvider>
      <ProjectContextProvider>
        <BaseLayout />
      </ProjectContextProvider>
    </ThemeContextProvider>
  );
}

function BaseLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="base" data-theme={theme === themeData.dark && "dark"}>
      <SideBar className="sidebar in-slide-right-slow" />

      <div className="body in-slide-up">
        <Outlet />
      </div>

      <QuickMenu className="quick-menu in-slide-left-fast">
        <ThemeButton />
      </QuickMenu>
    </div>
  );
}

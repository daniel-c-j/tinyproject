import { useContext } from "react";
import Body from "./features/base/components/Body";
import ProjectContextProvider from "./contexts/ProjectContext";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import themeData from "./features/theme/data/ThemeData";
import QuickMenu from "./features/base/components/QuickMenu";
import ThemeButton from "./features/theme/components/ThemeButton";
import SideBar from "./features/base/components/SideBar";

function App() {
  return (
    // <RouterProvider />

    <ThemeContextProvider>
      <ProjectContextProvider>
        <AppContentWrapper />
      </ProjectContextProvider>
    </ThemeContextProvider>
  );
}

function AppContentWrapper() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="base" data-theme={theme === themeData.dark && "dark"}>
      <SideBar className="sidebar in-slide-right-slow" />
      <Body className="body in-slide-up" />

      <QuickMenu className="quick-menu in-slide-left-fast">
        <ThemeButton />
      </QuickMenu>
    </div>
  );
}

export default App;

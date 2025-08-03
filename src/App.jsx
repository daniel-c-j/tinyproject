import { useContext } from "react";
import Body from "./components/Body";
import ProjectContextProvider from "./features/project/context/ProjectContext";
import ThemeContextProvider, {
  ThemeContext,
} from "./features/theme/context/ThemeContext";
import themeData from "./features/theme/context/ThemeData";
import QuickMenu from "./components/QuickMenu";
import ThemeButton from "./features/theme/presentation/ThemeButton";
import SideBar from "./components/SideBar";

function App() {
  return (
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

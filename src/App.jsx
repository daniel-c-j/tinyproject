import { useContext } from "react";
import Body from "./components/Body";
import SideBar from "./components/Sidebar";
import ProjectContextProvider from "./features/project/context/ProjectContext";
import ThemeContextProvider, {
  ThemeContext,
} from "./features/theme/context/ThemeContext";
import themeData from "./features/theme/context/ThemeData";
import QuickMenu from "./components/QuickMenu";
import ThemeButton from "./features/theme/presentation/ThemeButton";

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
    <div className={`base ${theme === themeData.dark && "dark-mode"}`}>
      <SideBar className="sidebar slide-right-slower" />
      <Body className="body slide-up" />
      <QuickMenu>
        <ThemeButton />
      </QuickMenu>
    </div>
  );
}

export default App;

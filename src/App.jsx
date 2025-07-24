import Body from "./components/Body";
import SideBar from "./components/Sidebar";
import ProjectContextProvider from "./features/project/context/ProjectContext";

function App() {
  return (
    <div className="flex flex-row max-w-screen max-h-screen overflow-y-clip">
      <ProjectContextProvider>
        {/* Side Bar */}
        <SideBar className="sidebar slide-right-slower" />

        {/* Main Body */}
        <Body className="body slide-up" />
      </ProjectContextProvider>
    </div>
  );
}

export default App;

import { useState } from "react";
import Body from "./components/Body";
import SideBar from "./components/Sidebar";
import Project from "./data/project";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function onEdit(project) {
    let newProj = project || new Project({ isEditing: true });

    setProjectList((prevProjects) => [newProj, ...prevProjects]);
    setSelectedProject(newProj);
  }

  function onCancelEdit() {
    setProjectList((projects) =>
      projects.filter((project) => project.isEditing !== true)
    );
    setSelectedProject(null);
  }

  function onSaveEdit() {}

  // console.log(projectList);

  return (
    <div className="flex flex-row max-w-screen">
      {/* Side Bar */}
      <SideBar
        projectList={projectList}
        onCreate={onEdit}
        className="sidebar slide-right-slower"
      />

      {/* Main Body */}
      <Body
        selectedProject={selectedProject}
        onEdit={onEdit}
        onCancelEdit={onCancelEdit}
        className="body slide-up"
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import Body from "./components/Body";
import SideBar from "./components/Sidebar";
import Project from "./data/project";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function onEdit(project = null) {
    let newProj;
    if (project === null) {
      newProj = new Project({
        isEditing: true,
      });
    } else {
      newProj = project;
    }

    const tempList = projectList.map((proj) => proj);
    tempList.push(newProj);
    setProjectList(tempList);
    setSelectedProject(newProj);
  }

  function onCancelEdit() {
    const tempList = projectList.filter((proj) => proj.isEditing !== true);
    setProjectList(tempList);
    setSelectedProject(null);
  }

  function onSaveEdit() {}

  console.log(projectList);

  return (
    <div className="flex flex-row max-w-screen">
      {/* Side Bar */}
      <SideBar
        projectList={projectList}
        onCreate={onEdit}
        className="flex-auto min-h-full mt-12 p-12 rounded-tr-2xl bg-green-950"
      />

      {/* Main Body */}
      <Body
        selectedProject={selectedProject}
        onEdit={onEdit}
        onCancelEdit={onCancelEdit}
        className={`${
          selectedProject === null ? "flex-[75%]" : "flex-[65%]"
        } min-h-screen p-12 pt-24`}
      />

      {/* Add gap when project is selected or when adding a project */}
      {selectedProject !== null && <div className="flex-[10%]"></div>}
    </div>
  );
}

export default App;

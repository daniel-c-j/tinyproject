import { useContext } from "react";
import { ProjectContext } from "../../../../contexts/ProjectContext";
import ProjectDesc from "./ProjectDesc";
import ProjectTask from "./ProjectTask";
import { useRouteLoaderData } from "react-router";
import ProjectHeader from "./ProjectHeader";

export default function ProjectContent() {
  const { items, handleUpdate, handleDelete } = useContext(ProjectContext);

  const projectId = useRouteLoaderData("project-content");
  const projectData = items.find((proj) => proj.id == projectId);

  return (
    <div className="in-slide-down-realfast">
      <ProjectHeader project={projectData} handleDelete={handleDelete} />

      <ProjectDesc project={projectData} />
      <hr className="opacity-20 border-1 my-4 border-green-800 dark:border-green-400" />
      <ProjectTask items={items} project={projectData} update={handleUpdate} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  return params.projectId;
}

import { useContext } from "react";
import { ProjectContext } from "../../../../contexts/ProjectContext";
import ProjectDesc from "./ProjectDesc";
import ProjectTask from "./ProjectTask";
import { useRouteLoaderData } from "react-router";
import ProjectHeader from "./ProjectHeader";

export default function ProjectContent() {
  const { items, handleSaveEdit, handleDelete, handleUpdateOrCreate } =
    useContext(ProjectContext);

  const projectId = useRouteLoaderData("project-content");
  const projectData = items.find((proj) => proj.id == projectId);

  return (
    <div className="in-slide-down-realfast">
      <ProjectHeader
        project={projectData}
        onUpdate={handleUpdateOrCreate}
        onDelete={handleDelete}
      />

      <ProjectDesc project={projectData} />

      <hr className="opacity-20 border-1 my-4 border-green-800" />

      <ProjectTask
        items={items}
        project={projectData}
        updateUI={handleSaveEdit}
      />
    </div>
  );
}

// TODO simulate delay-loading.

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  return params.projectId;
}

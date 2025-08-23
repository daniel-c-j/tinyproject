import ProjectDesc from "./ProjectDesc";
import ProjectTask from "./ProjectTask";
import { useRouteLoaderData, type LoaderFunctionArgs } from "react-router";
import ProjectHeader from "./ProjectHeader";
import { useAppSelector } from "../../../../redux/hook";
import { projectItems } from "../../projectSlice";

export default function ProjectContent() {
  const items = useAppSelector(projectItems);

  const projectId = useRouteLoaderData("project-content");
  const projectData = items.find((proj) => proj.id == projectId);

  if (projectData === undefined) throw { status: 404, redirect: true };

  return (
    <div className="in-slide-down-realfast">
      <ProjectHeader project={projectData} />

      <ProjectDesc project={projectData} />
      <hr className="opacity-20 border-1 my-4 border-green-800 dark:border-green-400" />
      <ProjectTask project={projectData} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
  return params.projectId;
}

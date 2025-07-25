import { useContext } from "react";
import NoSelectedProject from "../features/project/presentation/NoSelectedProject";
import ProjectContent from "../features/project/presentation/ProjectContent";
import { ProjectContext } from "../features/project/context/ProjectContext";

export default function Body({ className }) {
  const { selected, handleUpdateOrCreate } = useContext(ProjectContext);

  let content = <NoSelectedProject onCreateProject={handleUpdateOrCreate} />;
  if (selected.item) content = <ProjectContent />;

  return (
    <div className={className}>
      <div className={selected.item && "inner-body"}>{content}</div>
    </div>
  );
}

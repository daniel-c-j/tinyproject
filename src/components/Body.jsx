import { useContext } from "react";
import NoSelectedProject from "../features/project/presentation/NoSelectedProject";
import ProjectContent from "../features/project/presentation/ProjectContent";
import { ProjectContext } from "../features/project/context/ProjectContext";

export default function Body({ className }) {
  const { selected, handleUpdateOrCreate } = useContext(ProjectContext);

  const innerConstraint = selected.item ? "w-[85%]" : "";
  const body = selected.item ? (
    <ProjectContent />
  ) : (
    <NoSelectedProject onCreateProject={handleUpdateOrCreate} />
  );

  return (
    <div className={className}>
      <div className={innerConstraint}>{body}</div>
    </div>
  );
}

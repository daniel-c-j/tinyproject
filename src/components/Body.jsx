import { useContext } from "react";
import NoSelectedProject from "../features/project/presentation/NoSelectedProject";
import ProjectContent from "../features/project/presentation/ProjectContent";
import { ProjectContext } from "../context/ProjectContext";

// TODO modal

export default function Body({ className }) {
  const { selected } = useContext(ProjectContext);

  const innerConstraint = selected.item ? "w-[85%]" : "";
  const body = selected.item ? <ProjectContent /> : <NoSelectedProject />;

  return (
    <div className={className}>
      <div className={innerConstraint}>{body}</div>
    </div>
  );
}

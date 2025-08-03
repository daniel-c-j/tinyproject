import { useContext } from "react";
import ProjectUnselected from "../../project/components/ProjectUnselected";
import ProjectContent from "../../project/components/content/ProjectContent";
import { ProjectContext } from "../../../contexts/ProjectContext";

export default function Body({ className }) {
  const { selected, handleUpdateOrCreate } = useContext(ProjectContext);

  let content = <ProjectUnselected onCreateProject={handleUpdateOrCreate} />;
  if (selected.item) content = <ProjectContent />;

  return (
    <div className={className}>
      <div className={selected.item && "inner-body"}>{content}</div>
    </div>
  );
}

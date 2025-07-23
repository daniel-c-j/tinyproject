import AddOrEditProject from "./AddProject";
import Start from "./Start";
import ProjectContent from "./Project";

// TODO useContext here and reducer
export default function Body({
  selectedProject,
  onEdit,
  onCancelEdit,
  className,
}) {
  let innerStyle = "w-[85%] h-full";
  let body = <Start handleCreate={onEdit} />;

  if (selectedProject === null) {
    innerStyle = "";
  } else if (selectedProject.isEditing) {
    body = <AddOrEditProject onCancelEdit={onCancelEdit} />;
  } else {
    body = <ProjectContent selectedProject={selectedProject} />;
  }

  return (
    <div className={className}>
      <div className={innerStyle}>{body}</div>
    </div>
  );
}

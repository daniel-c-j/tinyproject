import AddOrEditProject from "./AddProject";
import Start from "./Start";
import Project from "./Project";
import ProjectBody from "./Project";

export default function Body({
  selectedProject,
  onEdit,
  onCancelEdit,
  className,
}) {
  let body;
  if (selectedProject === null) {
    body = <Start handleCreate={onEdit} />;
  } else if (selectedProject.isEditing) {
    body = <AddOrEditProject onCancelEdit={onCancelEdit} />;
  } else {
    <ProjectBody selectedProject={selectedProject} />;
  }

  return (
    <div className={className}>
      <div className="size-full">{body}</div>
    </div>
  );
}

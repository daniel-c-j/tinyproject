export default function ProjectDesc({ project }) {
  return (
    <div className="overflow-x-auto custom-scrollbar">
      <h1 className="project-title">{project.item.title}</h1>
      <p className="text-gray-500">{project.item.dueDate}</p>
      <p className={`py-4 ${project.item.desc || "text-gray-500"}`}>
        {project.item.desc || "No description"}
      </p>
    </div>
  );
}

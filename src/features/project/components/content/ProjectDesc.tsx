export default function ProjectDesc({ project }) {
  return (
    <div className="overflow-x-auto custom-scrollbar">
      <h1 className="project-title">{project.title}</h1>
      <p className="text-gray-500">{project.dueDate}</p>
      <p className={`py-4 ${project.desc || "text-gray-500"}`}>
        {project.desc || "No description"}
      </p>
    </div>
  );
}

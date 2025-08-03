import { Project } from "../model/Project";
import logo from "../../../assets/images/no-projects.png";

export default function ProjectUnselected({ onCreateProject }) {
  return (
    <div className="flex flex-col h-[75vh] items-center justify-center in-slide-down-realfast">
      <img
        src={logo}
        alt="No project logo"
        className="opacity-75"
        width="100"
        height="100"
        draggable="false"
      />

      <h2 className="text-2xl p-2 font-bold">No Project Selected</h2>
      <p className="text-gray-500">
        Select a project or get started with a new one
      </p>
      <button
        type="button"
        onClick={() => onCreateProject(new Project())}
        className="btn-primary my-8"
      >
        Create new project
      </button>
    </div>
  );
}

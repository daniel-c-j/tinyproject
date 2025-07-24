import { Project } from "../model/Project";
import logo from "../../../assets/images/no-projects.png";

export default function NoSelectedProject({ onCreateProject }) {
  return (
    <div
      align="center"
      className="flex flex-col h-[75vh] items-center justify-center"
    >
      <img src={logo} alt="No project logo" width="120" height="120" />

      <h2 className="font-[nunito-sans] text-2xl p-2 font-bold">
        No Project Selected
      </h2>
      <p className="font-[nunito-sans] text-gray-500">
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

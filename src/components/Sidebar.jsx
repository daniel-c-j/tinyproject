import { useContext } from "react";
import { ProjectContext } from "../features/project/context/ProjectContext";
import { Project } from "../features/project/model/Project";

export default function SideBar({ className }) {
  const { items, selected, handleUpdateOrCreate, handleSelect } =
    useContext(ProjectContext);

  const idleBar =
    "w-full py-1 px-2 mt-1 rounded-md font-[nunito-sans] text-left text-white transition hover:bg-green-600 active:bg-green-500";
  const activeBar = `${idleBar} bg-green-800`;
  const shadowIndicator = "w-[18vw] h-4 bg-green-900/80 absolute";

  return (
    <div className={className}>
      <div className="pt-10 pb-4">
        <h1 className="font-[nunito-sans] uppercase text-gray-100 text-xl font-bold">
          Your projects
        </h1>
        <button
          type="button"
          className="btn-primary mt-6"
          onClick={() => handleUpdateOrCreate(new Project())}
        >
          + Add Project
        </button>
      </div>

      <div className="max-h-[67.5vh] pr-2 pb-8 overflow-y-auto no-scrollbar">
        {/* This is a shadow and gap */}
        <div className={`${shadowIndicator} shadow-bottom`}></div>
        <div className="my-5"></div>

        {items.length > 0 &&
          items.map((project, index) => (
            <button
              key={index}
              type="button"
              className={selected.item === project ? activeBar : idleBar}
              onClick={() => handleSelect(project)}
            >
              {project.title}
            </button>
          ))}

        <div className={`${shadowIndicator} shadow-top bottom-0`}></div>
      </div>
    </div>
  );
}

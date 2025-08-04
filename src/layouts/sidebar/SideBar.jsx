import { useContext } from "react";
import logo from "/images/logo.png";
import SideBarItem from "./SideBarItem";
import { ProjectContext } from "../../contexts/ProjectContext";
import { useNavigate } from "react-router";

export default function SideBar({ className }) {
  const { items, selected, handleSelect } = useContext(ProjectContext);
  const navigate = useNavigate();

  return (
    <div className={className}>
      <div className="sm:pt-6 md:pt-8 lg:pt-10 pb-4 sm:pb-4.5 md:pb-5">
        <h1 className="hidden sm:inline uppercase text-gray-100 text-xl font-bold">
          Your projects
        </h1>

        <img
          src={logo}
          alt="TinyProject logo"
          width="35"
          height="35"
          draggable="false"
          className="block w-full py-3 sm:hidden "
        />

        <button
          type="button"
          className="btn-primary w-full sm:w-auto py-1 md:py-2 sm:mt-4 md:mt-5 lg:mt-6"
          onClick={() => navigate("/project/new")}
        >
          <span className="inline sm:hidden">+</span>
          <span className="hidden sm:inline md:hidden">+ Add</span>
          <span className="hidden md:inline">+ Add Project</span>
        </button>
      </div>

      <div className="max-h-[77.5vh] sm:max-h-[75vh] md:max-h-[70vh] lg:max-h-[67.5vh] pb-8 overflow-y-auto no-scrollbar">
        {/* This is a shadow and gap */}
        <div className="scroll-shadow shadow-bottom"></div>
        <div className="my-[17.5pt] sm:my-6"></div>

        {items.length > 0 &&
          items.map((project, index) => (
            <SideBarItem
              key={index}
              item={selected.item}
              project={project}
              onSelect={handleSelect}
            />
          ))}

        {/* This is a shadow */}
        <div className="scroll-shadow shadow-top bottom-0"></div>
      </div>
    </div>
  );
}

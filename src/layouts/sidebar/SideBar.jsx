import logo from "/images/logo.png";
import SideBarItem from "./SideBarItem";
import { useLocation, useNavigate, useNavigation } from "react-router";
import { useSelector } from "react-redux";

export default function SideBar({ className }) {
  return (
    <div className={className}>
      <div className="sm:pt-6 md:pt-8 lg:pt-10 pb-4 sm:pb-4.5 md:pb-5">
        <h1 className="hidden sm:block uppercase text-gray-100 text-xl font-bold">
          Your projects
        </h1>

        <img
          src={logo}
          alt="TinyProject logo"
          draggable="false"
          className="block w-full py-3 sm:hidden"
        />

        <SideBarAddButton />
      </div>

      <SideBarItemsWrapper />
    </div>
  );
}

function SideBarAddButton() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn-primary w-full !px-3 sm:w-auto py-1 md:py-2 sm:mt-4 md:mt-5 lg:mt-6"
      onClick={() =>
        location.pathname !== "/project/new" && navigate("/project/new")
      }
      disabled={isLoading}
    >
      <span className="inline sm:hidden">+</span>
      <span className="hidden sm:inline md:hidden">+ Add</span>
      <span className="hidden md:inline">+ Add Project</span>
    </button>
  );
}

function SideBarItemsWrapper() {
  const items = useSelector((state) => state.project.items);

  return (
    <div className="max-h-[77.5vh] sm:max-h-[75vh] md:max-h-[70vh] lg:max-h-[67.5vh] pb-8 overflow-y-auto no-scrollbar">
      {/* This is a shadow and gap */}
      <div className="scroll-shadow shadow-bottom"></div>
      <div className="my-[17.5pt] sm:my-6"></div>

      {items.length > 0 &&
        items.map((project) => (
          <SideBarItem key={project.id} project={project} />
        ))}

      {/* This is a shadow */}
      <div className="scroll-shadow shadow-top bottom-0"></div>
    </div>
  );
}

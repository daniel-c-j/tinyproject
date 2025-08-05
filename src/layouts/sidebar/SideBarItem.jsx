import { NavLink } from "react-router";

function optimizeTitle(title, length) {
  const words = title.split(" ");
  let tempTitle = "";
  for (const word of words) {
    if (word.length > length) {
      tempTitle += " " + word.slice(0, length) + "...";
      break;
    }
    tempTitle += " " + word;
  }
  return tempTitle;
}

export default function SideBarItem({ project }) {
  const destination = `/project/${project.id}`;

  // * Uncomment this to prevent going to the same page.
  // const currentLoc = useLocation();
  // const handleClick = (e) => {
  //   if (currentLoc.pathname === destination) {
  //     e.preventDefault(); // Prevent navigation if already on the same page
  //   }
  // };

  return (
    <NavLink
      to={destination}
      // * Uncomment this to prevent going to the same page.
      // onClick={handleClick}
      className={({ isActive }) =>
        isActive ? "bar-item-active" : "bar-item-idle"
      }
    >
      <span className="sm:hidden inline font-bold">
        {project.title.slice(0, 2)}
      </span>

      <span className="hidden sm:inline md:hidden">
        {optimizeTitle(project.title, 12)}
      </span>

      <span className="hidden md:inline lg:hidden">
        {optimizeTitle(project.title, 16)}
      </span>

      <span className="hidden lg:inline xl:hidden">
        {optimizeTitle(project.title, 22)}
      </span>

      <span className="hidden xl:inline">
        {optimizeTitle(project.title, 26)}
      </span>
    </NavLink>
  );
}

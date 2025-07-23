export default function SideBar({ projectList, onCreate, className }) {
  const idleBar =
    "w-full py-1 px-2 my-1 rounded-md font-[nunito-sans] text-left text-white transition hover:bg-green-600 active:bg-green-500";
  const activeBar = `${idleBar} bg-green-800`;
  const shadowStyle =
    "absolute w-[80%] h-5 bg-green-500 shadow-md shadow-green-950";

  return (
    <div className={className}>
      <div className="pt-10">
        <h1 className="font-[nunito-sans] uppercase text-gray-100 text-xl font-bold">
          Your projects
        </h1>
        <button
          type="button"
          onClick={() => onCreate()}
          className="btn-primary mt-6"
        >
          + Add Project
        </button>
      </div>

      <br />
      <br />

      {/* <div className={shadowStyle}></div> */}

      <div className="flex flex-col max-h-[60vh] overflow-y-scroll no-scrollbar">
        {projectList.length > 0 &&
          projectList.map((project, index) => (
            <div>
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={idleBar}>
                {project.title}Hello
              </button>
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>{" "}
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>
              <button key={index} type="button" className={activeBar}>
                {project.title}Hello
              </button>
            </div>
          ))}
      </div>

      {/* <div className={shadowStyle}></div> */}
      {/* <br /> */}
    </div>
  );
}

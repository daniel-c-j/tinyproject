export default function SideBar({ projectList, onCreate, className }) {
  return (
    <div className={className}>
      <h1 className="font-[nunito-sans] uppercase text-gray-100 text-xl font-bold">
        Your projects
      </h1>
      <button
        type="button"
        onClick={() => onCreate()}
        className="font-[nunito-sans] my-6 px-4 py-2 rounded-md transition text-gray-300 hover:text-gray-100 bg-green-800 hover:bg-green-600"
      >
        + Add Project
      </button>
      <br />
      <br />
      {projectList.length > 0 &&
        projectList.map((project, index) => (
          <button key={index} type="button">
            {project.title}Hello
          </button>
        ))}
      {/* TODO project list */}
    </div>
  );
}

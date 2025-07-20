import AddProject from "./AddProject";

export default function ProjectBody({ selectedProject }) {
  const buttonBaseStyle =
    "font-[nunito-sans] rounded-md m-1 mx-2 px-4 py-2 transition ";
  const inputStyle =
    "font-[nunito-sans] p-2 my-1 rounded-md bg-gray-300 border-b-1 border-green-500 focus:border-2 focus:outline-none";
  const titleStyle = "font-[nunito-sans] text-3xl pt-4 font-bold";

  if (selectedProject.isEditing) {
    return <AddProject />;
  }

  return (
    <>
      <button
        type="button"
        className={`${buttonBaseStyle} float-right text-red-600 hover:text-white hover:bg-red-500`}
      >
        Delete
      </button>

      <h1 className={titleStyle}>Title goes here</h1>
      <p className="font-[nunito-sans] py-1 text-gray-400">
        Date created goes here
      </p>
      <p className="font-[nunito-sans] py-4">Description goes here</p>

      <hr className="opacity-20 border-1 my-4 border-green-800" />

      <h1 className={titleStyle}>Tasks</h1>
      <div className="flex flex-row py-4">
        <input
          type="text"
          name="task"
          className={`${inputStyle} w-md flex-initial`}
        />
        <button
          type="button"
          className={`${buttonBaseStyle} flex-none text-green-600 hover:text-white hover:bg-green-600 `}
        >
          + Add Task
        </button>
      </div>
      {/* TODO Task list */}
      <p className="font-[nunito-sans] ">
        This projet does not have any tasks yet.
      </p>
    </>
  );
}

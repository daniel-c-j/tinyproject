import AddProject from "./AddProject";

export default function ProjectContent({ selectedProject }) {
  const titleStyle = "font-[nunito-sans] text-3xl font-bold py-2";

  if (selectedProject.isEditing) {
    return <AddProject />;
  }

  return (
    <>
      <div align="right">
        <button type="button" className="btn-secondary-alert">
          Delete
        </button>
      </div>

      <h1 className={titleStyle}>Title goes here</h1>
      <p className="font-[nunito-sans] text-gray-500">Date created goes here</p>
      <p className="font-[nunito-sans] py-4">Description goes here</p>

      <hr className="opacity-20 border-1 my-4 border-green-800" />

      <h1 className={titleStyle}>Tasks</h1>
      <div className="my-2">
        <input type="text" name="task" className="input-field w-[35vw]" />
        <button type="button" className="btn-secondary mx-2">
          + Add Task
        </button>
      </div>

      {/* TODO Task list */}

      <p className="font-[nunito-sans]">
        This project does not have any tasks yet.
      </p>
    </>
  );
}

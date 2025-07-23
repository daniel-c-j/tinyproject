import { useContext } from "react";
import AddOrEditProject from "./AddOrEditProject";
import { ProjectContext } from "../../../context/ProjectContext";

export default function ProjectContent() {
  const { selected, handleDelete } = useContext(ProjectContext);
  const titleStyle = "font-[nunito-sans] text-3xl font-bold py-2";

  if (selected.isEditing) return <AddOrEditProject />;
  return (
    <>
      <div align="right">
        <button
          type="button"
          className="btn-secondary-alert"
          onClick={() => handleDelete(selected.item)}
        >
          Delete
        </button>
      </div>

      <h1 className={titleStyle}>{selected.item.title}</h1>
      <p className="font-[nunito-sans] text-gray-500">
        {selected.item.dueDate}
      </p>
      <p className="font-[nunito-sans] py-4">{selected.item.desc}</p>

      <hr className="opacity-20 border-1 my-4 border-green-800" />

      <h1 className={titleStyle}>Tasks</h1>
      <div className="my-2">
        <input type="text" name="task" className="input-field w-[35vw]" />
        <button
          type="button"
          className="btn-secondary mx-2"
          // TODO
        >
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

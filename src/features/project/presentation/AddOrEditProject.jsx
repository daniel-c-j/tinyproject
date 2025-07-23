import { useContext, useRef } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import { Project } from "../model/Project";

export default function AddOrEditProject() {
  const labelStyle = "font-[nunito-sans] block uppercase font-semibold mt-4";
  const { selected, handleSaveEdit, handleCancelEdit } =
    useContext(ProjectContext);
  const formRef = useRef(new Project());

  const handleTitleChange = (e) => {
    formRef.current.title = e.target.value;
  };

  const handleDescChange = (e) => {
    formRef.current.desc = e.target.value;
  };

  const handleDueDateChange = (e) => {
    formRef.current.dueDate = e.target.value;
  };

  return (
    <form>
      <div align="right">
        <button
          type="button"
          onClick={() => handleCancelEdit()}
          className="btn-secondary mx-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={() =>
            formRef.current.title !== "" && handleSaveEdit(formRef.current)
          }
          className="btn-primary mx-1"
        >
          Save
        </button>
      </div>

      <label className={labelStyle}>title</label>
      <input
        type="text"
        name="title"
        className="input-field w-full"
        onChange={handleTitleChange}
        defaultValue={selected?.title || ""}
        required
      />

      <label className={labelStyle}>Description</label>
      <textarea
        name="desc"
        className="input-field w-full resize-y"
        rows="3"
        onChange={handleDescChange}
        defaultValue={selected?.desc || ""}
      />

      <label className={labelStyle}>Due Date</label>
      <input
        type="date"
        name="date"
        className="input-field w-full"
        onChange={handleDueDateChange}
        defaultValue={selected?.dueDate || ""}
      />
    </form>
  );
}

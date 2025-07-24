import { useContext, useEffect, useRef } from "react";
import { ProjectContext } from "../context/ProjectContext";

export default function AddOrEditProject() {
  const labelStyle = "font-[nunito-sans] block uppercase font-semibold mt-4";
  const { selected, handleSaveEdit, handleCancelEdit } =
    useContext(ProjectContext);
  const form = useRef(selected.item);
  const title = useRef();

  useEffect(() => {
    title.current.focus();
  });

  const handleTitleChange = (e) => {
    form.current.title = e.target.value;
  };

  const handleDescChange = (e) => {
    form.current.desc = e.target.value;
  };

  const handleDueDateChange = (e) => {
    form.current.dueDate = e.target.value;
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
            form.current.title !== "" && handleSaveEdit(form.current)
          }
          className="btn-primary mx-1"
        >
          Save
        </button>
      </div>

      <label className={labelStyle}>title</label>
      <input
        ref={title}
        type="text"
        name="title"
        className="input-field w-full"
        onChange={handleTitleChange}
        defaultValue={selected?.item.title}
        required
      />

      <label className={labelStyle}>Description</label>
      <textarea
        name="desc"
        className="input-field w-full resize-y"
        rows="3"
        onChange={handleDescChange}
        defaultValue={selected?.item.desc}
      />

      <label className={labelStyle}>Due Date</label>
      <input
        type="date"
        name="date"
        className="input-field w-full"
        onChange={handleDueDateChange}
        defaultValue={selected?.item.dueDate}
      />
    </form>
  );
}

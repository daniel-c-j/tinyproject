import { useContext, useEffect, useRef } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { ThemeContext } from "../../theme/context/ThemeContext";
import themeData from "../../theme/context/ThemeData";

export default function AddOrEditProject() {
  const { theme } = useContext(ThemeContext);
  const { selected, handleSaveEdit, handleCancelEdit } =
    useContext(ProjectContext);

  const labelStyle = "font-[nunito-sans] block uppercase font-semibold mt-4";
  let inputStyle = "input-field w-full";
  if (theme === themeData.dark) inputStyle += " !bg-gray-600";

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
          className={`btn-secondary mx-1 ${
            theme === themeData.dark && "hover:!bg-white/10"
          }`}
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
        className={inputStyle}
        onChange={handleTitleChange}
        defaultValue={selected?.item.title}
        required
      />

      <label className={labelStyle}>Description</label>
      <textarea
        name="desc"
        className={inputStyle + " resize-y"}
        rows="3"
        onChange={handleDescChange}
        defaultValue={selected?.item.desc}
      />

      <label className={labelStyle}>Due Date</label>
      <input
        type="date"
        name="date"
        className={inputStyle}
        onChange={handleDueDateChange}
        defaultValue={selected?.item.dueDate}
      />
    </form>
  );
}

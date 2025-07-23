export default function AddOrEditProject({ onCancelEdit, project = null }) {
  const labelStyle = "font-[nunito-sans] block uppercase font-semibold mt-4";

  return (
    <>
      <div align="right">
        <button
          type="button"
          onClick={() => onCancelEdit()}
          className="btn-secondary mx-1"
        >
          Cancel
        </button>
        <button type="button" className="btn-primary mx-1">
          Save
        </button>
      </div>

      <label className={labelStyle}>title</label>
      <input
        type="text"
        name="title"
        className="input-field w-full"
        value={project?.title ?? ""}
      />

      <label className={labelStyle}>Description</label>
      <textarea
        name="desc"
        className="input-field w-full resize-y"
        rows="3"
        value={project?.desc ?? ""}
      />

      <label className={labelStyle}>Due Date</label>
      <input
        type="date"
        name="date"
        className="input-field w-full"
        value={project?.dueDate ?? ""}
      />
    </>
  );
}

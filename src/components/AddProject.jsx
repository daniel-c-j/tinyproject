export default function AddOrEditProject({ onCancelEdit, project = null }) {
  const buttonBaseStyle =
    "font-[nunito-sans] rounded-md m-1 px-4 py-2 transition";
  const labelStyle = "font-[nunito-sans] block uppercase font-semibold mt-4";
  const inputStyle =
    "font-[nunito-sans] w-full p-2 my-1 rounded-md bg-gray-300 border-b-1 border-green-500 focus:border-2 focus:outline-none";

  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onCancelEdit()}
          className={`${buttonBaseStyle} text-green-600 hover:bg-green-950/30`}
        >
          Cancel
        </button>
        <button
          type="button"
          className={`${buttonBaseStyle} text-white bg-green-600 hover:bg-green-800`}
        >
          Save
        </button>
      </div>

      <label className={labelStyle}>title</label>
      <input
        type="text"
        name="title"
        className={inputStyle}
        value={project?.title ?? ""}
      />

      <label className={labelStyle}>Description</label>
      <textarea
        name="desc"
        className={`${inputStyle} resize-y`}
        value={project?.desc ?? ""}
      />

      <label className={labelStyle}>Due Date</label>
      <input
        type="date"
        name="date"
        className={inputStyle}
        value={project?.dueDate ?? ""}
      />
    </>
  );
}

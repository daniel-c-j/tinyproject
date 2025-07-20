export default function Start({ handleCreate }) {
  const titleStyle = "font-[nunito-sans] text-2xl p-2 font-bold";

  return (
    <div align="center" className="p-12">
      <img src="" alt="" />
      <h2 className={titleStyle}>No Project Selected</h2>
      <p className="font-[nunito-sans] text-gray-500">
        Select a project or get started with a new one
      </p>
      <button
        type="button"
        onClick={() => handleCreate()}
        className="font-[nunito-sans] my-8 px-4 py-2 rounded-md transition text-white bg-green-800 hover:bg-green-600"
      >
        Create new project
      </button>
    </div>
  );
}

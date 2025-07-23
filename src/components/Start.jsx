export default function Start({ handleCreate }) {
  return (
    <div
      align="center"
      className="flex flex-col h-[75vh] items-center justify-center"
    >
      {/* TODO <img src="" alt="" />  */}

      <h2 className="font-[nunito-sans] text-2xl p-2 font-bold">
        No Project Selected
      </h2>
      <p className="font-[nunito-sans] text-gray-500">
        Select a project or get started with a new one
      </p>
      <button
        type="button"
        onClick={() => handleCreate()}
        className="btn-primary my-8"
      >
        Create new project
      </button>
    </div>
  );
}

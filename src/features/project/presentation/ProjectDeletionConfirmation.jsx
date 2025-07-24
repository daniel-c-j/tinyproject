export default function ProjectDeletionConfirmation({ showModal, onDelete }) {
  return (
    <div className="p-4">
      <h2 className="font-[nunito-sans] text-2xl font-bold">
        Delete this project?
      </h2>
      <br />
      <div align="right">
        <button
          type="button"
          className="btn-secondary-alert mx-1"
          onClick={() => {
            onDelete();
            showModal(false);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn-primary mx-1"
          onClick={() => showModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

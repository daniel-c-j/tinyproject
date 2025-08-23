import type React from "react";


export default function ProjectDeletionConfirmation({ showModal, onDelete }: { showModal: React.Dispatch<React.SetStateAction<boolean>>, onDelete: () => void }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold m-1">Delete this project?</h2>
      <div className="my-8"></div>
      <div className="text-right">
        <button
          type="button"
          className="btn-primary-alert ml-2"
          onClick={() => {
            showModal(false);
            onDelete();
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn-secondary ml-2"
          onClick={() => showModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import Modal from "../../../common/Modal";
import ProjectDeletionConfirmation from "../ProjectDeletionConfirmation";

export default function ProjectHeader({ project, onUpdate, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal open={showModal}>
        <ProjectDeletionConfirmation
          onDelete={() => onDelete(project)}
          showModal={setShowModal}
        />
      </Modal>

      <div align="right">
        <button
          type="button"
          className="btn-secondary-alert mx-1"
          onClick={() => setShowModal(true)}
        >
          Delete
        </button>
        <button
          type="submit"
          className="btn-primary mx-1"
          onClick={() => onUpdate(project)}
        >
          Edit
        </button>
      </div>
    </>
  );
}

import { useState } from "react";
import Modal from "../../../common/Modal";
import ProjectDeletionConfirmation from "../ProjectDeletionConfirmation";
import { useNavigate } from "react-router";

export default function ProjectHeader({ project, handleDelete }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function onDelete(project) {
    navigate("/");
    // * Timeout to prevent concurrent render conflict
    setTimeout(() => handleDelete(project), 400);
  }

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
          onClick={() => navigate("edit")}
        >
          Edit
        </button>
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const project = Object.fromEntries(formData);

  return project;
}

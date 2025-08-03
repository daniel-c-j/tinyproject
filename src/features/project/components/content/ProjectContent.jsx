import { useContext, useState } from "react";
import ProjectForm from "../ProjectForm";
import { ProjectContext } from "../../../../contexts/ProjectContext";
import Modal from "../../../base/components/Modal";
import ProjectDeletionConfirmation from "../ProjectDeletionConfirmation";
import ProjectDesc from "./ProjectDesc";
import ProjectTask from "./ProjectTask";

export default function ProjectContent() {
  const {
    items,
    selected,
    handleSaveEdit,
    handleDelete,
    handleUpdateOrCreate,
  } = useContext(ProjectContext);
  const [showModal, setShowModal] = useState(false);

  if (selected.isEditing) return <ProjectForm />;

  return (
    <div className="in-slide-down-realfast">
      <Modal open={showModal}>
        <ProjectDeletionConfirmation
          onDelete={() => handleDelete(selected.item)}
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
          onClick={() => handleUpdateOrCreate(selected.item)}
        >
          Edit
        </button>
      </div>

      <ProjectDesc project={selected} />

      <hr className="opacity-20 border-1 my-4 border-green-800" />

      <h1 className="project-title">Tasks</h1>
      <ProjectTask items={items} project={selected} updateUI={handleSaveEdit} />
    </div>
  );
}

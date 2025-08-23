import { useState } from "react";
import Modal from "../../../common/Modal";
import ProjectDeletionConfirmation from "../ProjectDeletionConfirmation";
import { useNavigate } from "react-router";
import delay from "../../../../util/delay";
import { projectDelete } from "../../projectSlice";
import type { Project } from "../../model/project";
import { useAppDispatch } from "../../../../redux/hook";

export default function ProjectHeader({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onDelete(project: Project) {
    navigate("/");
    // * Timeout to prevent concurrent render conflict
    setTimeout(() => dispatch(projectDelete(project)), 400);
  }

  return (
    <>
      <Modal open={showModal}>
        <ProjectDeletionConfirmation
          onDelete={() => onDelete(project)}
          showModal={setShowModal}
        />
      </Modal>

      <div className="text-right">
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

// TODO when utilizing server-client this should be a post req.
// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const project = Object.fromEntries(formData);

  await delay(1200);
  return project;
}

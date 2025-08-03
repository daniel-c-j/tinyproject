import { useContext, useEffect, useRef, useState } from "react";
import AddOrEditProject from "./AddOrEditProject";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "../context/ProjectContext";
import Modal from "../../../components/Modal";
import ProjectDeletionConfirmation from "./ProjectDeletionConfirmation";
import ProjectStorage from "../data/ProjectStorage";

const titleStyle = "text-3xl font-bold py-2 pt-4 sm:pt-6 md:pt-8";

export default function ProjectContent() {
  const {
    items,
    selected,
    handleSaveEdit,
    handleDelete,
    handleUpdateOrCreate,
  } = useContext(ProjectContext);
  const [showModal, setShowModal] = useState(false);

  if (selected.isEditing) return <AddOrEditProject />;

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

      <ProjectContentMain project={selected} />

      <hr className="opacity-20 border-1 my-4 border-green-800" />

      <ProjectContentTask
        items={items}
        project={selected}
        updateUI={handleSaveEdit}
      />
    </div>
  );
}

export function ProjectContentMain({ project }) {
  return (
    <div className="overflow-x-auto custom-scrollbar">
      <h1 className={titleStyle}>{project.item.title}</h1>
      <p className="text-gray-500">{project.item.dueDate}</p>
      <p className={`py-4 ${project.item.desc || "text-gray-500"}`}>
        {project.item.desc || "No description"}
      </p>
    </div>
  );
}

export function ProjectContentTask({ items, project, updateUI }) {
  const inputStyle =
    "input-field mr-2 task-list opacity-85 hover:!opacity-100 focus:!opacity-100";

  // To delete unprocessed text whenever changing the project.
  const input = useRef();
  useEffect(() => {
    input.current.value = "";
  }, [project]);

  function handleAddTask(newTask) {
    input.current.value = "";
    project.item.task = [newTask, ...(project.item.task ?? [])];
    updateUI(project.item);
  }

  function handleRemoveTask(delTask) {
    project.item.task = project.item.task.filter(
      (task) => task.id !== delTask.id
    );
    updateUI(project.item);
  }

  return (
    <>
      <h1 className={titleStyle}>Tasks</h1>
      <div className="my-2">
        <input
          type="text"
          ref={input}
          name="task"
          className={inputStyle + " italic"}
          placeholder="what should be done...?"
        />
        <button
          type="button"
          className="btn-secondary font-bold sm:font-normal"
          onClick={() =>
            handleAddTask({ id: uuidv4(), value: input.current.value })
          }
        >
          <span className="inline sm:hidden">+</span>
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>

      {/* To immediately update UI, utilizing dynamic key.*/}
      <div key={uuidv4()} className="pb-8">
        {project.item.task.length > 0 ? (
          project.item.task.map((projectTask, index) => (
            <div key={index} className="block">
              <input
                type="text"
                name="task"
                defaultValue={projectTask.value}
                // This will trigger the debouncer to update the UI
                onChange={(e) => {
                  projectTask.value = e.target.value;
                  ProjectStorage.store(items);
                }}
                className={inputStyle}
              />
              <button
                type="button"
                className="btn-secondary-alert font-bold sm:font-normal"
                onClick={() => handleRemoveTask(projectTask)}
              >
                <span className="inline sm:hidden">-</span>
                <span className="hidden sm:inline">Remove</span>
              </button>
            </div>
          ))
        ) : (
          <p>This project does not have any tasks yet.</p>
        )}
      </div>
    </>
  );
}

/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import AddOrEditProject from "./AddOrEditProject";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "../context/ProjectContext";
import Modal from "../../../components/Modal";
import ProjectDeletionConfirmation from "./ProjectDeletionConfirmation";
import ProjectStorage from "../data/ProjectStorage";

const titleStyle = "font-[nunito-sans] text-3xl font-bold py-2";
const inputStyle = "input-field w-[35vw]";

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
    <>
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
    </>
  );
}

export function ProjectContentMain({ project }) {
  return (
    <>
      <h1 className={titleStyle}>{project.item.title}</h1>
      <p className="font-[nunito-sans] text-gray-500">{project.item.dueDate}</p>
      <p
        className={`font-[nunito-sans] py-4 ${
          project.item.desc || "text-gray-500"
        }`}
      >
        {project.item.desc || "No description"}
      </p>
    </>
  );
}

export function ProjectContentTask({ items, project, updateUI }) {
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

  const handleChange = (event, value) => {
    value = event.target.value;
    ProjectStorage.store(items);
  };

  return (
    <>
      <h1 className={titleStyle}>Tasks</h1>
      <div className="my-2">
        <input type="text" ref={input} name="task" className={inputStyle} />
        <button
          type="button"
          className="btn-secondary mx-2"
          onClick={() =>
            handleAddTask({ id: uuidv4(), value: input.current.value })
          }
        >
          + Add Task
        </button>
      </div>

      {/* To immediately update UI, utilizing dynamic key.*/}
      <div key={uuidv4()}>
        {project.item.task.length > 0 ? (
          project.item.task.map((projectTask, index) => (
            <div key={index}>
              <input
                type="text"
                name="task"
                defaultValue={projectTask.value}
                // This will trigger the debouncer to update the UI
                onChange={(e) => handleChange(e, projectTask.value)}
                className={`${inputStyle} opacity-80`}
              />
              <button
                type="button"
                className="btn-secondary-alert mx-2"
                onClick={() => handleRemoveTask(projectTask)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="font-[nunito-sans]">
            This project does not have any tasks yet.
          </p>
        )}
      </div>
    </>
  );
}

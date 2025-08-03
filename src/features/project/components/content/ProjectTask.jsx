import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectStorage from "../../data/ProjectStorage";

export default function ProjectTask({ items, project, updateUI }) {
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

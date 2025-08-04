import { useEffect, useRef } from "react";
import { uid } from "uid/secure";
import ProjectStorage from "../../data/ProjectStorage";

export default function ProjectTask({ items, project, update }) {
  const inputStyle =
    "input-field mr-2 task-list opacity-85 hover:!opacity-100 focus:!opacity-100";

  // To delete unprocessed text whenever changing the project.
  const input = useRef();
  useEffect(() => {
    input.current.value = "";
  }, [project]);

  function handleAddTask(newTask) {
    input.current.value = "";
    project.task = [newTask, ...(project.task ?? [])];
    update(project);
  }

  function handleRemoveTask(delTask) {
    project.task = project.task.filter((task) => task.id !== delTask.id);
    update(project);
  }

  return (
    <>
      <h1 className="project-title">Tasks</h1>
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
            handleAddTask({ id: uid(12), value: input.current.value })
          }
        >
          <span className="inline sm:hidden">+</span>
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>

      {/* To immediately update UI, utilizing dynamic key.*/}
      <div key={uid(12)} className="pb-8">
        {project.task.length > 0 ? (
          project.task.map((projectTask, index) => (
            <div key={index} className="block">
              <input
                type="text"
                name="task"
                defaultValue={projectTask.value}
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

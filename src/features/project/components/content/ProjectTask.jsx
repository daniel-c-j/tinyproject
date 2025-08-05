import { useEffect, useRef } from "react";
import { uid } from "uid/secure";
import { useDispatch } from "react-redux";
import { projectUpdate } from "../../projectSlice";
import { useCallback } from "react";
import ProjectTaskItem from "./ProjectTaskItem";

export default function ProjectTask({ project }) {
  const dispatch = useDispatch();

  // To delete unprocessed text whenever changing the project.
  const input = useRef();
  useEffect(() => {
    input.current.value = "";
  }, [project]);

  function handleAddTask() {
    const newTask = { id: uid(8), value: input.current.value };
    const tasks = [newTask, ...(project.task ?? [])];
    dispatch(projectUpdate({ ...project, task: tasks }));

    input.current.value = "";
  }

  function handleRemoveTask(delTask) {
    const tasks = project.task.filter((task) => task.id !== delTask.id);
    dispatch(projectUpdate({ ...project, task: tasks }));
  }

  const handleEdit = useCallback(
    (task, value) => {
      const tasks = JSON.parse(JSON.stringify(project.task));
      const editedTask = tasks.find((t) => t.id === task.id);
      if (editedTask) editedTask.value = value;

      dispatch(projectUpdate({ ...project, task: tasks }));
    },
    [project, dispatch]
  );

  return (
    <>
      <h1 className="project-title">Tasks</h1>
      <div className="my-2">
        <input
          type="text"
          ref={input}
          name="task"
          className="task-item italic"
          placeholder="what should be done...?"
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            e.preventDefault();
            handleAddTask();
          }}
        />
        <button
          type="button"
          className="btn-secondary font-bold sm:font-normal"
          onClick={() => handleAddTask()}
        >
          <span className="inline sm:hidden">+</span>
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>

      {/* To immediately update UI, utilizing dynamic key.*/}
      <div key={uid(4)} className="pb-8">
        {project.task.length > 0 ? (
          project.task.map((task) => (
            <ProjectTaskItem
              key={task.id}
              projectId={project.id}
              task={task}
              onEdit={handleEdit}
              onRemove={handleRemoveTask}
            />
          ))
        ) : (
          <p>This project does not have any tasks yet.</p>
        )}
      </div>
    </>
  );
}

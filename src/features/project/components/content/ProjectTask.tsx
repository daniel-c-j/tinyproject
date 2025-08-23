import { useEffect, useRef } from "react";
import { uid } from "uid/secure";
import { projectUpdate } from "../../projectSlice";
import { useCallback } from "react";
import ProjectTaskItem from "./ProjectTaskItem";
import { useAppDispatch } from "../../../../redux/hook";
import { Project, TaskItem } from "../../model/project";

export default function ProjectTask({ project }: { project: Project }) {
  const dispatch = useAppDispatch();

  // ? To reset volatile data whenever changing the project.
  const taskFocusIndicator = useRef("");
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    taskFocusIndicator.current = "";
    if (input.current === null) return;
    input.current.value = "";
  }, [project]);

  function handleAddTask() {
    const newTask = new TaskItem(null, input.current!.value);
    const tasks = [newTask, ...(project.task ?? [])];

    const rawProject = project.copyWith({ task: tasks });
    dispatch(projectUpdate(rawProject));

    input.current!.value = "";
  }

  function handleRemoveTask(delTask: TaskItem) {
    const tasks = project.task.filter((task) => task.id !== delTask.id);

    project.task = tasks;
    dispatch(projectUpdate(project));
  }

  const handleEdit = useCallback(
    (task: TaskItem, value: string) => {
      const tasks = JSON.parse(JSON.stringify(project.task));
      const editedTask = tasks.find((t: TaskItem) => t.id === task.id);
      if (editedTask) editedTask.value = value;

      project.task = tasks;
      dispatch(projectUpdate(project));
      taskFocusIndicator.current = task.id;
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
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddTask();
            }
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
              task={task}
              onEdit={handleEdit}
              onRemove={handleRemoveTask}
              isFocus={taskFocusIndicator.current === task.id}
            />
          ))
        ) : (
          <p>This project does not have any tasks yet.</p>
        )}
      </div>
    </>
  );
}

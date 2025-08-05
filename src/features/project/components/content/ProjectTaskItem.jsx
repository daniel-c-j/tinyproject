/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

let focusIndicator = { id: null, value: "" };
export { focusIndicator };

export default function ProjectTaskItem({ projectId, task, onEdit, onRemove }) {
  const [inputValue, setInputValue] = useState("");

  const input = useRef();
  focusIndicator.id = projectId;

  // * Debouncer cannon
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(inputValue), 500);

    return () => {
      clearTimeout(handler);
      if (focusIndicator.id !== projectId) focusIndicator.value = "";
    };
  }, [inputValue, projectId]);

  // * Operation that is debounced.
  useEffect(() => {
    if (debouncedValue) onEdit(task, inputValue);
    if (input.current.value === focusIndicator.value) input.current.focus();
  }, [debouncedValue, onEdit, inputValue, task, projectId]);

  return (
    <div className="block">
      <input
        ref={input}
        type="text"
        name="task"
        defaultValue={task.value}
        onChange={(e) => {
          focusIndicator.value = e.target.value;
          setInputValue(e.target.value);
        }}
        className="task-item"
      />
      <button
        type="button"
        className="btn-secondary-alert font-bold sm:font-normal"
        onClick={() => onRemove(task)}
      >
        <span className="inline sm:hidden">-</span>
        <span className="hidden sm:inline">Remove</span>
      </button>
    </div>
  );
}

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function ProjectTaskItem({ isFocus, task, onEdit, onRemove }) {
  const [inputValue, setInputValue] = useState("");

  const input = useRef();
  useEffect(() => {
    if (isFocus) input.current.focus();
  });

  // * Debouncer cannon
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(inputValue), 500);

    return () => clearTimeout(handler);
  }, [inputValue]);

  // * Operation that is debounced.
  useEffect(() => {
    if (debouncedValue) onEdit(task, inputValue);
  }, [debouncedValue, onEdit, inputValue, task]);

  return (
    <div className="block">
      <input
        ref={input}
        type="text"
        name="task"
        defaultValue={task.value}
        onChange={(e) => setInputValue(e.target.value)}
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

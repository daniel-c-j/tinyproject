import { useContext } from "react";
import { ThemeContext } from "../../theme/context/ThemeContext";
import themeData from "../../theme/context/ThemeData";

export default function ProjectDeletionConfirmation({ showModal, onDelete }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="p-4">
      <h2 className="font-[nunito-sans] text-2xl font-bold m-1">
        Delete this project?
      </h2>
      <div className="my-8"></div>
      <div align="right">
        <button
          type="button"
          className="btn-primary-alert ml-2"
          onClick={() => {
            onDelete();
            showModal(false);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className={`btn-secondary ml-2 ${
            theme === themeData.dark && "hover:!bg-white/10"
          }`}
          onClick={() => showModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

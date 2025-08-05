import { createContext, useReducer } from "react";
import ProjectStorage from "../features/project/data/ProjectStorage";
import { useDebounce } from "../util/debounce";

const projectInitialValue = {
  items: ProjectStorage.retrieve(),
  handleDelete: () => {},
  handleSave: () => {},
  handleUpdate: () => {},
};
const type = { DELETE: "DELETE", SAVE: "SAVE", UPDATE: "UPDATE" };

const ProjectContext = createContext(projectInitialValue);
export { ProjectContext };

function projectReducer(state, action) {
  if (action.type === type.SAVE) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }

  if (action.type === type.UPDATE) {
    return {
      ...state,
      items: state.items.map((project) => {
        if (project.id === action.payload.id) return action.payload;
        return project;
      }),
    };
  }

  if (action.type === type.DELETE) {
    return {
      ...state,
      items: state.items.filter((project) => project.id !== action.payload.id),
    };
  }

  return state;
}

export default function ProjectContextProvider({ children }) {
  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    projectInitialValue
  );
  // Persists data.
  useDebounce(() => ProjectStorage.store(projectState.items), 500);

  const handleDelete = (project) => {
    projectDispatch({ type: type.DELETE, payload: project });
  };

  const handleSave = (project) => {
    projectDispatch({ type: type.SAVE, payload: project });
  };

  const handleUpdate = (project) => {
    projectDispatch({ type: type.UPDATE, payload: project });
  };

  const ctxValue = {
    items: projectState.items,
    handleDelete,
    handleSave,
    handleUpdate,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

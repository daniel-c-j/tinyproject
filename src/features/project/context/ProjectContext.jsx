import { createContext, useReducer } from "react";
import ProjectStorage from "../data/ProjectStorage";
import { useDebounce } from "../../../util/debounce";

const defaultSelectedState = {
  item: null,
  isEditing: false,
};

const projectInitialValue = {
  items: ProjectStorage.retrieve(),
  selected: defaultSelectedState,
  handleSelect: () => {},
  handleUpdateOrCreate: () => {},
  handleDelete: () => {},
  handleSaveEdit: () => {},
  handleCancelEdit: () => {},
};

const ProjectContext = createContext(projectInitialValue);
export { ProjectContext };

const type = {
  SELECT: "SELECT",
  CREATE_UPDATE: "CREATE_UPDATE",
  DELETE: "DELETE",
  SAVE_EDIT: "SAVE_EDIT",
  CANCEL_EDIT: "CANCEL_EDIT",
};

function projectReducer(state, action) {
  if (action.type === type.SELECT) {
    return {
      ...state,
      selected: { item: action.payload, isEditing: false },
    };
  }

  if (action.type === type.CREATE_UPDATE) {
    return {
      ...state,
      selected: { item: action.payload, isEditing: true },
    };
  }

  if (action.type === type.DELETE) {
    return {
      ...state,
      items: state.items.filter((project) => project.id !== action.payload.id),
      selected: defaultSelectedState,
    };
  }

  if (action.type === type.SAVE_EDIT) {
    const isListed = state.items.some(
      (project) => project.id === state.selected.item?.id
    );

    return {
      ...state,
      items: [...state.items, ...(!isListed ? [action.payload] : [])],
      selected: { item: action.payload, isEditing: false },
    };
  }

  if (action.type === type.CANCEL_EDIT) {
    const isListed = state.items.some(
      (project) => project.id === state.selected.item.id
    );

    return {
      ...state,
      selected: {
        item: isListed ? state.selected.item : null,
        isEditing: false,
      },
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

  const handleSelect = (project) => {
    projectDispatch({ type: type.SELECT, payload: project });
  };

  const handleUpdateOrCreate = (project) => {
    projectDispatch({ type: type.CREATE_UPDATE, payload: project });
  };

  const handleDelete = (project) => {
    projectDispatch({ type: type.DELETE, payload: project });
  };

  const handleSaveEdit = (project) => {
    projectDispatch({ type: type.SAVE_EDIT, payload: project });
  };

  const handleCancelEdit = () => {
    projectDispatch({ type: type.CANCEL_EDIT });
  };

  const ctxValue = {
    items: projectState.items,
    selected: projectState.selected,
    handleSelect,
    handleUpdateOrCreate,
    handleDelete,
    handleSaveEdit,
    handleCancelEdit,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

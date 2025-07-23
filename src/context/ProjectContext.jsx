import { createContext, useReducer } from "react";

const defaultSelectedState = {
  item: null,
  isEditing: false,
};

const projectInitialValue = {
  items: [],
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
      items: state.items.filter((project) => project !== action.payload),
      selected: defaultSelectedState,
    };
  }

  if (action.type === type.SAVE_EDIT) {
    return {
      ...state,
      items: [...state.items, action.payload],
      selected: { item: action.payload, isEditing: false },
    };
  }

  if (action.type === type.CANCEL_EDIT) {
    const isListed = state.items.includes(state.selected.item);
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

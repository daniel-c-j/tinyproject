import { createContext, useReducer } from "react";

const projectInitialValue = {
  items: [],
  selected: {
    item: null,
    isEditing: false,
  },
  handleUpdateOrCreate: () => {},
  handleDelete: () => {},
};

const ProjectContext = createContext(projectInitialValue);
export { ProjectContext };

function projectReducer(state, action) {}

export default function ProjectContextProvider({ children }) {
  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    projectInitialValue
  );

  const ctxValue = {
    items: projectState.items,
    selected: projectState.selected,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

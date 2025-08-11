import { uid } from "uid";

const getEmptyProject = () => {
  return {
    id: uid(8),
    title: "",
    desc: null,
    dateAdded: Date.now(),
    dueDate: null,
    task: [],
  };
};

export default getEmptyProject;

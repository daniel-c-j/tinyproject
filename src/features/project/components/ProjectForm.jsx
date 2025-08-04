import { useContext } from "react";
import { ProjectContext } from "../../../contexts/ProjectContext";
import { Project } from "../model/Project";
import { Form, redirect, useNavigate, useRouteLoaderData } from "react-router";

const labelStyle = "block uppercase font-semibold mt-4";
const inputStyle = "input-field w-full";

const getEmptyProject = () => new Project();

export default function ProjectForm() {
  const data = useRouteLoaderData("project-content");
  const projectData = data || getEmptyProject();

  // Focus on data that is change-able in this scope.
  const { handleSaveEdit } = useContext(ProjectContext);
  const handleSubmitClientside = (event) => {
    const formData = new FormData(event.target);
    projectData.title = formData.get("title");
    projectData.desc = formData.get("desc");
    projectData.dueDate = formData.get("date");

    handleSaveEdit(projectData);
  };

  return (
    <Form
      method="POST"
      onSubmit={(e) => handleSubmitClientside(e)}
      className="in-slide-up-fast"
    >
      <ProjectFormHeader />

      {/* Hidden input so that id can be processed in action fn. */}
      <input type="text" name="id" defaultValue={projectData.id} hidden />

      <label htmlFor="title" className={labelStyle}>
        title
      </label>
      <input
        type="text"
        name="title"
        className={inputStyle}
        defaultValue={projectData.title}
        required
        autoFocus
      />

      <label htmlFor="desc" className={labelStyle}>
        Description
      </label>
      <textarea
        name="desc"
        className={inputStyle + " resize-y min-h-[7.5vw]"}
        rows="3"
        defaultValue={projectData.desc}
      />

      <label htmlFor="date" className={labelStyle}>
        Due Date
      </label>
      <input
        type="date"
        name="date"
        className={inputStyle}
        defaultValue={projectData.dueDate}
      />
    </Form>
  );
}

function ProjectFormHeader() {
  const navigate = useNavigate();

  return (
    <div align="right">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="btn-secondary mx-1"
      >
        Cancel
      </button>
      <button type="submit" className="btn-primary mx-1">
        Save
      </button>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const rawData = await request.formData();
  const data = Object.fromEntries(rawData);
  return redirect(`/project/${data.id}`);
}

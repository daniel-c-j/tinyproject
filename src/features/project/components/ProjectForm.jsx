import delay from "../../../util/delay";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  redirect,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import { projectAdd, projectUpdate } from "../projectSlice";
import getEmptyProject from "../model/project";

const labelStyle = "block uppercase font-semibold mt-4";
const inputStyle = "input-field w-full";

export default function ProjectForm() {
  const items = useSelector((state) => state.project.items);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  const projectId = useRouteLoaderData("project-content");
  const dataFromCtx = items.find((proj) => proj.id == projectId);
  const projectData = dataFromCtx || getEmptyProject();

  // Focus on data that is change-able in this scope.
  const handleSubmitClientside = (event) => {
    const formData = new FormData(event.target);
    const projectDt = {
      ...projectData,
      title: formData.get("title"),
      desc: formData.get("desc"),
      dueDate: formData.get("date"),
    };

    // If new
    if (dataFromCtx == undefined) return dispatch(projectAdd(projectDt));
    return dispatch(projectUpdate(projectDt));
  };

  return (
    <Form
      method="POST"
      onSubmit={(e) => handleSubmitClientside(e)}
      className={isLoading ? "pointer-events-none" : "in-slide-up-fast"}
    >
      <ProjectFormHeader />

      <div className={isLoading ? "opacity-60" : undefined}>
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
          disabled={isLoading}
        />

        <label htmlFor="desc" className={labelStyle}>
          Description
        </label>
        <textarea
          name="desc"
          className={inputStyle + " resize-y min-h-[7.5vw]"}
          rows="3"
          defaultValue={projectData.desc}
          disabled={isLoading}
        />

        <label htmlFor="date" className={labelStyle}>
          Due Date
        </label>
        <input
          type="date"
          name="date"
          className={inputStyle}
          defaultValue={projectData.dueDate}
          disabled={isLoading}
        />
      </div>
    </Form>
  );
}

function ProjectFormHeader() {
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isLoading = navigation.state === "submitting";

  return (
    <div align="right">
      <button
        type="button"
        onClick={() => navigate("..")}
        className={"btn-secondary mx-1 " + (isLoading && "opacity-60")}
        disabled={isLoading}
      >
        Cancel
      </button>

      <button type="submit" className="btn-primary mx-1" disabled={isLoading}>
        <div className="flex flex-row justify-center items-center">
          {isLoading && (
            <span className="spinner size-3.5 border-3 text-center mr-2 mb-0.5"></span>
          )}

          <p>Save</p>
        </div>
      </button>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const rawData = await request.formData();
  const data = Object.fromEntries(rawData);

  await delay(1200);
  return redirect(`/project/${data.id}`);
}

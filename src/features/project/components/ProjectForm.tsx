import delay from "../../../util/delay";
import {
  Form,
  redirect,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import { projectAdd, projectItems, projectUpdate } from "../projectSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { Project } from "../model/project";
import type React from "react";

const labelStyle = "block uppercase font-semibold mt-4";
const inputStyle = "input-field w-full";

export default function ProjectForm() {
  const items = useAppSelector(projectItems);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  const projectId = useRouteLoaderData("project-content");
  const dataFromCtx = items.find((proj) => proj.id == projectId);
  const projectData = dataFromCtx || new Project();

  // Focus on data that is change-able in this scope.
  const handleSubmitClientside = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const newProj = projectData.copyWith(
      {
        title: formData.get("title")!.toString(),
        desc: formData.get("desc")!.toString(),
        dueDate: formData.get("date")!.toString()
      }
    );

    // If new
    if (dataFromCtx == undefined) return dispatch(projectAdd(newProj));
    return dispatch(projectUpdate(newProj));
  };

  return (
    <Form
      method="POST"
      onSubmit={(e) => handleSubmitClientside(e)}
      className={isLoading ? "pointer-events-none" : "in-slide-up-fast"}
    >
      <ProjectFormHeader isLoading={isLoading} />

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
          rows={3}
          defaultValue={projectData.desc ?? ""}
          disabled={isLoading}
        />

        <label htmlFor="date" className={labelStyle}>
          Due Date
        </label>
        <input
          type="date"
          name="date"
          className={inputStyle}
          defaultValue={projectData.dueDate ?? 0}
          disabled={isLoading}
        />
      </div>
    </Form>
  );
}

function ProjectFormHeader({ isLoading }: { isLoading: boolean }) {

  const navigate = useNavigate();

  return (
    <div className="text-right">
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
export async function action({ request }: { request: Request }) {
  const rawData = await request.formData();
  const data = Object.fromEntries(rawData);

  await delay(1200);
  return redirect(`/project/${data.id}`);
}

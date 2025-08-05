import { createHashRouter } from "react-router";
import BaseLayoutWrapper from "../layouts/root/BaseLayout";
import ProjectUnselected from "../features/project/components/ProjectUnselected";
import ProjectForm, {
  action as projectFormAction,
} from "../features/project/components/ProjectForm";
import ProjectContent, {
  loader as projectContentLoader,
} from "../features/project/components/content/ProjectContent";
import InnerLayout from "../layouts/root/InnerLayout";
import { action as projectContentEditAction } from "../features/project/components/content/ProjectHeader";
import ErrorPage from "./ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    Component: BaseLayoutWrapper,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: ProjectUnselected },
      {
        // * This is only a wrapper, and does not set the "project/" path here,
        // * since no content exists there.
        Component: InnerLayout,
        children: [
          {
            path: "project/:projectId",
            id: "project-content",
            loader: projectContentLoader,
            children: [
              {
                index: true,
                Component: ProjectContent,
                action: projectContentEditAction,
              },
              {
                path: "edit",
                Component: ProjectForm,
                action: projectFormAction,
              },
            ],
          },
          {
            path: "project/new",
            Component: ProjectForm,
            action: projectFormAction,
          },
        ],
      },
    ],
  },
]);

export default router;

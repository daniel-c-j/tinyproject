import { createBrowserRouter } from "react-router";
import BaseLayoutWrapper from "../layouts/root/BaseLayout";
import ProjectUnselected from "../features/project/components/ProjectUnselected";
import ProjectForm from "../features/project/components/ProjectForm";
import ProjectContent from "../features/project/components/content/ProjectContent";
import InnerLayout from "../layouts/root/InnerLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayoutWrapper,
    children: [
      { index: true, Component: ProjectUnselected },
      {
        Component: InnerLayout,
        children: [
          { path: "new", Component: ProjectForm },
          {
            path: ":projectId",
            id: "project-content",
            children: [
              { index: true, Component: ProjectContent },
              { path: "edit", Component: ProjectForm },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

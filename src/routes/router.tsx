import {
  createBrowserRouter,
  createHashRouter,
  createMemoryRouter,
  type RouteObject,
} from "react-router";
import BaseLayoutWrapper from "../layouts/root/BaseLayout";
import ProjectUnselected from "../features/project/components/ProjectUnselected";
import ProjectContent, {
  loader as projectContentLoader,
} from "../features/project/components/content/ProjectContent";
import InnerLayout from "../layouts/root/InnerLayout";
import ErrorPage from "./ErrorPage";
import { lazy } from "react";
import ProjectFormLazyLoaded from "../features/project/components/ProjectFormLazyLoaded.jsx";

const ProjectForm = lazy(() =>
  import("../features/project/components/ProjectForm.jsx")
);

const routes: RouteObject[] = [
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
                action: async (meta) => {
                  const { action } = await import(
                    "../features/project/components/content/ProjectHeader.jsx"
                  );
                  return await action(meta);
                },
              },
              {
                path: "edit",
                Component: () => ProjectFormLazyLoaded(<ProjectForm />),
                action: async (meta) => {
                  const { action } = await import(
                    "../features/project/components/ProjectForm.jsx"
                  );
                  return await action(meta);
                },
              },
            ],
          },
          {
            path: "project/new",
            Component: () => ProjectFormLazyLoaded(<ProjectForm />),
            action: async (meta) => {
              const { action } = await import(
                "../features/project/components/ProjectForm.jsx"
              );
              return await action(meta);
            },
          },
        ],
      },
    ],
  },
];

// * Since this project will be hosted in github static pages,
// * which does not support browser route (local supports it),
// * then there is a need to check the environment the project is
// * running in.
const router = import.meta.env.DEV
  ? createBrowserRouter(routes)
  : import.meta.env.TEST
    ? createMemoryRouter(routes)
    : createHashRouter(routes);

export default router;

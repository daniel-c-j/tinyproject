import { cleanup } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider, type DataRouter } from "react-router";
import { it } from "vitest";
import InnerLayout from "./InnerLayout";
import { expect } from "vitest";
import { afterEach } from "vitest";

const renderScreen = (router: DataRouter) => render(<RouterProvider router={router} />);

afterEach(() => cleanup());

it(`Renders initial: Has inner layout and children.`, async () => {
  const router = createMemoryRouter([
    {
      path: "/",
      Component: InnerLayout,
      children: [{ index: true, element: <p data-testid="content"></p> }],
    },
  ]);
  renderScreen(router);

  const sidebar = screen.queryByTestId("inner-layout");
  expect(sidebar).not.toBeNull();

  const content = screen.queryByTestId("content");
  expect(content).not.toBeNull();
});

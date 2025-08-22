import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router";
import { it } from "vitest";
import store from "../../redux/store";
import { expect } from "vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import BaseLayout from "./BaseLayout";

const renderScreen = (router) =>
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

afterEach(() => cleanup());

it(`Renders initial: Has sidebar, content, and quick menu.`, async () => {
  const router = createMemoryRouter([
    {
      path: "/",
      Component: BaseLayout,
      children: [{ index: true, element: <p data-testid="content"></p> }],
    },
  ]);
  renderScreen(router);

  const sidebar = screen.queryByTestId("sidebar");
  expect(sidebar).not.toBeNull();

  const content = screen.queryByTestId("content");
  expect(content).not.toBeNull();

  const quickMenu = screen.queryByTestId("quickmenu");
  expect(quickMenu).not.toBeNull();
});

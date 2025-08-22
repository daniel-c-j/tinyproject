import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import store from "../redux/store";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider, type DataRouter } from "react-router";
import ErrorPage from "./ErrorPage";
import delay from "../util/delay";

const renderScreen = (router: DataRouter) =>
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

describe("ErrorPage", () => {
  afterEach(() => cleanup());

  it(`
    Renders initial state:
    - Kaomoji, and error title exist.
    - Redirect feedback does not exist.
    - Does not redirected to anywhere.
    `, async () => {
    const router = createMemoryRouter(
      [
        { path: "/error", element: <ErrorPage /> },
        { path: "/", element: <p data-testid="home">Home</p> },
      ],
      { initialEntries: ["/error"] }
    );
    renderScreen(router);

    // Assert
    const kaomoji = screen.queryByTestId("kaomoji");
    expect(kaomoji).not.toBeNull();

    const errTitle = screen.queryByTestId("err-title");
    expect(errTitle).not.toBeNull();

    const redirectFeedback = screen.queryByTestId("redirect-feedback");
    expect(redirectFeedback).toBeNull();

    const home = screen.queryByTestId("home");
    expect(home).toBeNull();
  });

  it(`
    Renders with forceRedirect prop:
    - Kaomoji, error title, and redirect feedback exist.
    - After 2.5s, redirected to /.
    `, async () => {
    const router = createMemoryRouter(
      [
        { path: "/error", element: <ErrorPage forceRedirect={true} /> },
        { path: "/", element: <p data-testid="home">Home</p> },
      ],
      { initialEntries: ["/error"] }
    );
    renderScreen(router);

    const kaomoji = screen.queryAllByTestId("kaomoji");
    expect(kaomoji).not.toBeNull();

    const errTitle = screen.queryAllByTestId("err-title");
    expect(errTitle).not.toBeNull();

    const redirectFeedback = screen.queryByTestId("redirect-feedback");
    expect(redirectFeedback).not.toBeNull();

    // * Wait 2.5s
    await delay(2500);

    const home = await screen.findByTestId("home");
    expect(home).not.toBeNull();
  });
});

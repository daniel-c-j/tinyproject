import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import Modal from "./Modal";
import { expect, beforeEach, afterEach } from "vitest";
import { Provider } from "react-redux";
import store from "../../redux/store";

// * Necessary logic for createPortal()
let portalRoot;
beforeEach(() => {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "modal");
  document.body.appendChild(portalRoot);
});

afterEach(() => {
  portalRoot.remove();
  portalRoot = null;
});
// * Necessary logic for createPortal()

it(`Open property is set to false, content not appear`, async () => {
  render(
    <Provider store={store}>
      <Modal open={false}>
        <p data-testid="content"></p>
      </Modal>
    </Provider>
  );

  const content = screen.queryByTestId("content");
  expect(content).toBeNull();
});

it(`Open property is set to true, content appears`, async () => {
  render(
    <Provider store={store}>
      <Modal open={true}>
        <p data-testid="content"></p>
      </Modal>
    </Provider>
  );

  const content = screen.queryByTestId("content");
  expect(content).not.toBeNull();
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { it } from "vitest";
import ThemeButton from "./ThemeButton";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

it(`Renders initial: Moon icon`, async () => {
  render(
    <Provider store={store}>
      <ThemeButton />
    </Provider>
  );

  const btn = screen.queryByTestId("light");
  expect(btn).not.toBeNull();

  const logo: HTMLImageElement = screen.getByRole("img");
  expect(logo.src).toContain("dark.png");
});

it(`Renders initial: Moon icon; After tap: Sun icon`, async () => {
  render(
    <Provider store={store}>
      <ThemeButton />
    </Provider>
  );

  const btn = screen.queryByTestId("light");
  expect(btn).not.toBeNull();

  const logo: HTMLImageElement = screen.getByRole("img");
  expect(logo.src).toContain("dark.png");

  const user = userEvent.setup();
  await user.click(btn!);

  const afterLogo: HTMLImageElement = screen.getByRole("img");
  expect(afterLogo.src).toContain("light.png");
});

import React from "react";
import ReactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Button from "../button";

describe("Button tests", () => {
  beforeEach(cleanup);

  it("renders the button", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div);
  });

  it("renders the button text correctly", () => {
    const { getByTestId } = render(<Button text="click me" />);
    expect(getByTestId("button")).toHaveTextContent("click me");
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(<Button text="click me" />);
    expect(getByTestId("button")).toMatchSnapshot();
  });
});

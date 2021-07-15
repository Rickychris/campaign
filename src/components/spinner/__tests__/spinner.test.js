import React from "react";
import ReactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Spinner from "../spinner";

describe("Spinner tests", () => {
  beforeEach(cleanup);

  it("renders the Spinner", () => {
    const div = document.createElement("div");
    ReactDom.render(<Spinner></Spinner>, div);
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId("spinner")).toMatchSnapshot();
  });
});

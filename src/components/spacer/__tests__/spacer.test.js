import React from "react";
import ReactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Spacer from "../spacer";

describe("Spacer tests", () => {
  beforeEach(cleanup);

  it("renders the Spacer", () => {
    const div = document.createElement("div");
    ReactDom.render(<Spacer></Spacer>, div);
  });

  it("renders the Spacer text correctly", () => {
    const { getByTestId } = render(<Spacer height={50} />);
    expect(getByTestId("spacer").getAttribute("style")).toEqual(
      "height: 50px;"
    );
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(<Spacer height={50} />);
    expect(getByTestId("spacer")).toMatchSnapshot();
  });
});

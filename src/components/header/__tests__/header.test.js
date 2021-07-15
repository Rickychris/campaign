import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import Header from "../header";

describe("Header tests", () => {
  beforeEach(cleanup);
  const headerTest = (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  it("renders the Header", () => {
    const div = document.createElement("div");
    ReactDom.render(headerTest, div);
  });

  it("renders the Header with Home text correctly", () => {
    const { getByTestId } = render(headerTest);
    expect(getByTestId("header")).toHaveTextContent("HOME");
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(headerTest);
    expect(getByTestId("header")).toMatchSnapshot();
  });
});

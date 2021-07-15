import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import HomePage from "../homePage";

describe("HomePage tests", () => {
  beforeEach(cleanup);
  const HomePageTest = (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  it("renders the HomePage", () => {
    const div = document.createElement("div");
    ReactDom.render(HomePageTest, div);
  });

  it("renders the HomePage with text correctly", () => {
    const { getByTestId } = render(HomePageTest);
    expect(getByTestId("homepage")).toHaveTextContent(
      "Create Your Email Marketing Campaign Today!!"
    );
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(HomePageTest);
    expect(getByTestId("homepage")).toMatchSnapshot();
  });
});

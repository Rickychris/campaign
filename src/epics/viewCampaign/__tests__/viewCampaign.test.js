import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import ViewCampaign from "../viewCampaign";

describe("viewCampaign  component tests", () => {
  beforeEach(cleanup);
  const viewCampaignTest = (
    <BrowserRouter>
      <ViewCampaign />
    </BrowserRouter>
  );
  it("renders the ViewCampaign component", () => {
    const div = document.createElement("div");
    ReactDom.render(viewCampaignTest, div);
  });

  it("renders the viewCampaign with text correctly", () => {
    const { getByTestId } = render(viewCampaignTest);
    expect(getByTestId("view-campaign")).toHaveTextContent("Campaign List");
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(viewCampaignTest);
    expect(getByTestId("view-campaign")).toMatchSnapshot();
  });
});

import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import CreateCampaign from "../createCampaign";

describe("CreateCampaign  component tests", () => {
  beforeEach(cleanup);
  const CreateCampaignTest = (
    <BrowserRouter>
      <CreateCampaign />
    </BrowserRouter>
  );
  it("renders the CreateCampaign component", () => {
    const div = document.createElement("div");
    ReactDom.render(CreateCampaignTest, div);
  });

  it("renders the CreateCampaign with text correctly", () => {
    const { getByTestId } = render(CreateCampaignTest);
    expect(getByTestId("create-campaign")).toHaveTextContent(
      "Your Campaign Name"
    );
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(CreateCampaignTest);
    expect(getByTestId("create-campaign")).toMatchSnapshot();
  });
});

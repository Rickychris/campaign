import React from "react";
import ReactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Card from "../card";

describe("Card tests", () => {
  beforeEach(cleanup);
  const cardProps = {
    id: "unique ID",
    campaignName: "Email Campaign Test",
    creatorName: "Alvis Monk",
    createdAt: 1626289185097,
    lastModifiedAt: 1626289185097,
    status: "active",
  };
  it("renders the Card", () => {
    const div = document.createElement("div");
    ReactDom.render(<Card cardData={cardProps}></Card>, div);
  });

  it("renders the Card with status correctly", () => {
    const { getByTestId } = render(<Card cardData={cardProps} />);
    expect(getByTestId("card")).toHaveTextContent("Status : active");
  });

  it("matches snapshot", () => {
    const { getByTestId } = render(<Card cardData={cardProps} />);
    expect(getByTestId("card")).toMatchSnapshot();
  });
});

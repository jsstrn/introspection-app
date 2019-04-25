import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import SlicePage from "../Pages/SlicePage/SlicePage";
import Routes from "../Routes";
import IntroDataContext from "../IntroDataContext";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import { data } from "./seedDataTests";

const value = {
  data,
  actions: [
    "Would like to explore",
    "Would like to deepen",
    "Would like to share"
  ],
  office: "Singapore",
  error: null,
  isLoading: false
};

const slicePage = (
  <MemoryRouter initialEntries={["/detailed"]}>
    <IntroDataContext.Provider value={value}>
      <Routes />
    </IntroDataContext.Provider>
  </MemoryRouter>
);

describe("Slice Page", () => {
  it("should render Equitable Tech action plan for all offices by default", () => {
    const { getByText, getByTestId } = render(slicePage);
    expect(getByText("Equitable Tech")).toBeInTheDocument();
    expect(getByTestId("action-val-1")).toHaveTextContent(2);
  });
  it("should render correct brick data if filtered by office", () => {
    const { getByText, getByTestId } = render(slicePage);
    fireEvent.click(getByText("Thailand"));
    expect(getByText("Equitable Tech")).toBeInTheDocument();
    expect(getByTestId("action-val-1")).toHaveTextContent(0);
  });
});

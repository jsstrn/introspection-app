import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Wall from "../components/Wall/Wall.jsx";
import IntroDataContext from "../IntroDataContext";
import { getCategoriesByOffice } from "../services/serveIntrospections";
import { data } from "./seedDataTests";

const value = {
  office: "Singapore",
  data,
  actions: [
    "Would like to explore",
    "Would like to deepen",
    "Would like to share"
  ],
  error: null,
  isLoading: false
};
const office = "Singapore";
const categories = getCategoriesByOffice(data, office);

describe("Wall", () => {
  it("renders categories from list of categories", () => {
    const { queryByText } = render(
      <IntroDataContext.Provider value={value}>
        <Wall office={office} />
      </IntroDataContext.Provider>
    );
    categories.map(cat => expect(queryByText(cat)).toBeInTheDocument());
    expect(queryByText("Fake Category")).not.toBeInTheDocument();
  });
  it("renders correct number of people for action plan", () => {
    const { getByTestId } = render(
      <IntroDataContext.Provider value={value}>
        <Wall office={office} />
      </IntroDataContext.Provider>
    );
    expect(
      getByTestId("Religious Minorities-Would like to explore").innerHTML
    ).toBe("3");
  });
  it("renders correct categories of action plans", () => {
    const { getAllByTestId, getByText } = render(
      <IntroDataContext.Provider value={value}>
        <Wall office={office} />
      </IntroDataContext.Provider>
    );
    expect(getByText(/explore/i)).toBeInTheDocument();
    expect(getAllByTestId(/Racial Minorities/).length).toBe(3);
  });
  it("renders correct number of category rows in table", () => {
    const { container } = render(
      <IntroDataContext.Provider value={value}>
        <Wall office={office} />
      </IntroDataContext.Provider>
    );
    const tr = container.querySelectorAll("tbody > tr");
    expect(tr).toHaveLength(8);
  });
});

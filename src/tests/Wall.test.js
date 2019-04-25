import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
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
      <MemoryRouter>
        <IntroDataContext.Provider value={value}>
          <Wall office={office} />
        </IntroDataContext.Provider>
      </MemoryRouter>
    );
    categories.map(cat => expect(queryByText(cat)).toBeInTheDocument());
    expect(queryByText("Fake Category")).not.toBeInTheDocument();
  });
  it("renders correct number of people for action plan", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <IntroDataContext.Provider value={value}>
          <Wall office={office} />
        </IntroDataContext.Provider>
      </MemoryRouter>
    );
    expect(
      getByTestId("Religious Minorities-Would like to explore").innerHTML
    ).toBe("3");
  });
  it("renders correct categories of action plans", () => {
    const { getAllByTestId, getByText } = render(
      <MemoryRouter>
        <IntroDataContext.Provider value={value}>
          <Wall office={office} />
        </IntroDataContext.Provider>
      </MemoryRouter>
    );
    expect(getByText(/explore/i)).toBeInTheDocument();
    expect(getAllByTestId(/Racial Minorities/).length).toBe(3);
  });
  it("renders correct number of category rows in table", () => {
    const { container } = render(
      <MemoryRouter>
        <IntroDataContext.Provider value={value}>
          <Wall office={office} />
        </IntroDataContext.Provider>
      </MemoryRouter>
    );
    const tr = container.querySelectorAll("tbody > tr");
    expect(tr).toHaveLength(8);
  });
  it("renders category link with the correct href attribute", () => {
    const { getByText } = render(
      <MemoryRouter>
        <IntroDataContext.Provider value={value}>
          <Wall office={office} />
        </IntroDataContext.Provider>
      </MemoryRouter>
    );
    expect(getByText("Economic Justice")).toHaveAttribute("href", "/slice");
  });
  it("renders correct data when filter by office", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <IntroDataContext.Provider value={value}>
          <Wall office={office} />
        </IntroDataContext.Provider>
      </MemoryRouter>
    );
    fireEvent.click(getByText("Thailand"));
    expect(getByText("Thailand's Action Plan")).toBeInTheDocument();
    expect(
      getByTestId("Religious Minorities-Would like to explore").innerHTML
    ).toBe("0");
    fireEvent.click(getByText("All"));
    expect(getByText("All Offices' Action Plan")).toBeInTheDocument();
    expect(
      getByTestId("Society and Privilege-Would like to deepen").innerHTML
    ).toBe("3");
  });
});

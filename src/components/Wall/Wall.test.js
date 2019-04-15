import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Wall from "./Wall";
import { getCategoriesByOffice } from "../../services/serveIntrospections";

const office = "Singapore";
const categories = getCategoriesByOffice(office);

describe("Wall", () => {
  it("renders categories from list of categories", () => {
    const { queryByText } = render(
      <Wall categories={categories} office={office} />
    );
    categories.map(cat => expect(queryByText(cat)).toBeInTheDocument());
    expect(queryByText("Fake Category")).not.toBeInTheDocument();
  });
  it("renders correct number of people for action plan", () => {
    const { getByTestId } = render(
      <Wall categories={categories} office={office} />
    );
    expect(
      getByTestId("Religious Minorities-would like to explore").innerHTML
    ).toBe("3");
  });
  it("renders correct categories of action plans", () => {
    const { getAllByTestId, getByText } = render(
      <Wall categories={categories} office={office} />
    );
    expect(getByText(/explore/i)).toBeInTheDocument();
    expect(getAllByTestId(/Racial Minorities/).length).toBe(3);
  });
  it("renders correct number of category rows in table", () => {
    const { container } = render(
      <Wall categories={categories} office={office} />
    );
    const tr = container.querySelectorAll("tbody > tr");
    expect(tr).toHaveLength(8);
  });
});

import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import FilterBar from "../components/FilterBar/FilterBar.jsx";

describe("FilterBar", () => {
  test("renders an office from a list, All is selected by default", () => {
    const offices = ["All", "Thailand", "Singapore"];

    const { getByText } = render(
      <FilterBar offices={offices} selected={null} handleClick={null} />
    );
    expect(getByText(/all/i)).toBeInTheDocument();
    expect(getByText(/thailand/i)).toBeInTheDocument();
    expect(getByText(/singapore/i)).toBeInTheDocument();
    expect(getByText(/all/i)).toHaveAttribute(
      "class",
      "btn btn-outline-primary"
    );
  });
  test("If there is an office specified, it will be selected", () => {
    const offices = ["All", "Thailand", "Singapore"];

    const { getByText } = render(
      <FilterBar offices={offices} selected={"Singapore"} handleClick={null} />
    );
    expect(getByText(/all/i)).toBeInTheDocument();
    expect(getByText(/thailand/i)).toBeInTheDocument();
    expect(getByText(/singapore/i)).toBeInTheDocument();
    expect(getByText(/singapore/i)).toHaveAttribute("class", "btn btn-primary");
  });
});

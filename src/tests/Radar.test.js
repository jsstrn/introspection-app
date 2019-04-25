import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Radar from "../components/Radar/Radar";
import IntroDataContext from "../IntroDataContext";
import { data } from "./seedDataTests.js";

const value = { data };
const radar = (
  <IntroDataContext.Provider value={value}>
    <Radar />
  </IntroDataContext.Provider>
);

describe("Radar", () => {
  it("should render title Introspection Radar ", () => {
    const { getByText } = render(radar);

    expect(getByText(/Introspection Radar/i)).toBeInTheDocument();
  });

});

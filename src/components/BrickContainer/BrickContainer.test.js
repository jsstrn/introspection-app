import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import BrickContainer from "./BrickContainer";
import IntroDataContext from "../../IntroDataContext";
import {
  getCategoriesByOffice,
  data
} from "../../services/serveIntrospections";

const value = {
  data,
  actions: [
    "Would like to explore",
    "Would like to deepen",
    "Would like to share"
  ],
  error: null,
  isLoading: false
};
const brickContainer = (
  <IntroDataContext.Provider value={value}>
    <BrickContainer category="Diversity and Inclusion" />
  </IntroDataContext.Provider>
);

describe("BrickContainer", () => {
  it("should render brick component", () => {
    const { getByText, getByTestId } = render(brickContainer);
    for (const action of value.actions) {
      expect(getByText(action)).toBeInTheDocument();
    }
  });
});

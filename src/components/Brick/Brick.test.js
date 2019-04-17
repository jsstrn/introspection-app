import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Brick from "./Brick";

describe("renders a brick", () => {
  it("should be able to display action headers", () => {
    const brickObject = {
      explore: ["a", "ab", "ac"],
      deepen: ["ca", "cb", "c"],
      share: ["d", "b", "cc"]
    };
    const { getByText } = render(
      <Brick count={null} brickObject={brickObject} handleActions={null} />
    );
    expect(getByText(/explore/i)).toBeInTheDocument();
    expect(getByText(/deepen/i)).toBeInTheDocument();
    expect(getByText(/share/i)).toBeInTheDocument();
  });

  it("should be able to display action headers", () => {
    const brickObject = {
      explore: ["a", "ab", "ac"],
      deepen: ["ca", "cb"],
      share: ["cc"]
    };
    const { getByTestId } = render(
      <Brick count={null} brickObject={brickObject} handleActions={null} />
    );
    expect(getByTestId("action-val-0")).toHaveTextContent(3);
    expect(getByTestId("action-val-1")).toHaveTextContent(2);
    expect(getByTestId("action-val-2")).toHaveTextContent(1);
  });
});

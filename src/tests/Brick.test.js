import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Brick from "../components/Brick/Brick.jsx";

const brickObject = {
  explore: ["a", "ab", "ac"],
  deepen: ["ca", "cb"],
  share: ["d"]
};
const levelArray = ["a", "b"];

describe("renders a brick", () => {
  it("should be able to display action headers", () => {
    const { getByText } = render(
      <Brick
        count={null}
        brickObject={brickObject}
        levelArray={levelArray}
        handleActions={null}
      />
    );
    expect(getByText(/explore/i)).toBeInTheDocument();
    expect(getByText(/deepen/i)).toBeInTheDocument();
    expect(getByText(/share/i)).toBeInTheDocument();
    expect(getByText(/Activated/i)).toBeInTheDocument();
  });

  it("should be able to display action headers", () => {
    const { getByTestId } = render(
      <Brick
        brickObject={brickObject}
        levelArray={levelArray}
        handleActions={null}
      />
    );
    expect(getByTestId("action-val-0")).toHaveTextContent(3);
    expect(getByTestId("action-val-1")).toHaveTextContent(2);
    expect(getByTestId("action-val-2")).toHaveTextContent(1);
    expect(getByTestId("Activated")).toHaveTextContent(2);
  });
});

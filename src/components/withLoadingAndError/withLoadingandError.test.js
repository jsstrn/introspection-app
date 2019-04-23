import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import withLoadingAndError from "./withLoadingAndError";

describe("withLoadingAndError", () => {
  describe("is loading", () => {
    it("returns loading component when loading is set to true", () => {
      const isLoading = true;

      const component = withLoadingAndError(isLoading);

      const { getByText } = render(component);
      expect(getByText("Is loading...")).toBeInTheDocument();
    });
  });

  describe("is not loading", () => {
    it("does not return loading component when loading is set to false", () => {
      const isLoading = false;

      const component = withLoadingAndError(isLoading);

      const { queryByText } = render(component);
      expect(queryByText("Is loading...")).not.toBeInTheDocument();
    });

    it("returns error component when error is not null", () => {
      const isLoading = false;
      const error = new Error("No data available");

      const component = withLoadingAndError(isLoading, error);

      const { queryByText } = render(component);
      expect(queryByText("No data available")).toBeInTheDocument();
    });

    it("returns given component when error is null", () => {
      const isLoading = false;
      const error = null;
      const MyComponent = <div>My Component</div>;

      const component = withLoadingAndError(isLoading, error, MyComponent);

      const { queryByText } = render(component);
      expect(queryByText("My Component")).toBeInTheDocument();
    });

    it("returns given component with props when error is null", () => {
      const isLoading = false;
      const error = null;
      const MyComponent = props => {
        return <div>{props.some}</div>;
      };

      const component = withLoadingAndError(
        isLoading,
        error,
        <MyComponent some={"My Component"} />
      );

      const { queryByText } = render(component);
      expect(queryByText("My Component")).toBeInTheDocument();
    });
  });
});

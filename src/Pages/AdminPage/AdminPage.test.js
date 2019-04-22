import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "react-testing-library";
import AdminPage from "./AdminPage";

// const isDev = process.env.NODE_ENV !== "production";
// const getUrl = isDev
//   ? "http://localhost:8080"
//   : "https://staging-introspection-api.herokuapp.com";

describe("Admin Page", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("admin page", () => {
    test("renders upload CSV File title and dropzone, the root and input nodes with the necessary props", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      const { container, getByText } = render(
        <Router history={history}>
          <AdminPage />
        </Router>
      );
      const input = container.querySelector("input");
      expect(input).toHaveAttribute("accept", ".csv");
      expect(input).not.toHaveAttribute("multiple");
      expect(getByText(/Upload CSV File/i)).toBeInTheDocument();
      expect(getByText(/or drag it here/i)).toBeInTheDocument();
    });

    xtest("Should render successfully upload if file type is accepted", () => {
      fetch.mockResponseOnce(JSON.stringify(`👍 Successfully uploaded file!`));

      const { getByTestId, container } = render(<AdminPage />);
      const inputEl = getByTestId("file-submit");
      const file = new File(["(⌐□_□)"], "chucknorris.csv", {
        type: ".csv"
      });
      fireEvent.change(inputEl, { target: { files: [file] } });
      expect(container).toContainElement(getByTestId("form"));
      // expect(fetch.mock.calls.length).toBe(1);
      // expect(fetch.mock.calls[0][0]).toEqual(`${getUrl}/upload`);
    });
  });
});

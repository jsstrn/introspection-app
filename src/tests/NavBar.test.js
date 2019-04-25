import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-testing-library";
import NavBar from "../components/NavBar/NavBar";

describe("Navbar", () => {
  test("should render links depending on navbar", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(getByText(/About Introspection/i)).toBeInTheDocument();
    expect(getByText(/Login/i)).toBeInTheDocument();
  });
});

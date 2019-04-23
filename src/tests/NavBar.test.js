import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { createMemoryHistory } from "history";
import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { render, fireEvent } from "react-testing-library";
import NavBar from "../components/NavBar/NavBar";
import App from "../App";

describe("Navbar", () => {
  test("should render 3/5 links depending on env", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(getByText(/About Introspection/i)).toBeInTheDocument();
    expect(getByText(/Introspection Radar/i)).toBeInTheDocument();
    expect(getByText(/Action Plan/i)).toBeInTheDocument();
    if (process.env.REACT_APP_FEATURE_TOGGLE_NAVLINKS === "true") {
      expect(getByText(/Admin Panel/i)).toBeInTheDocument();
      expect(getByText(/Esther T./i)).toBeInTheDocument();
    }
  });
});

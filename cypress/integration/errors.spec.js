/// <reference types="Cypress" />

import api from "../../src/services/api";

describe("Handles errors gracefully", () => {
  beforeEach(() => {
    cy.server();

    cy.route({
      method: "GET",
      url: `${api}/introspection`,
      response: []
    });

    cy.route({
      method: "GET",
      url: `${api}/actions`,
      response: []
    });
  });

  it("gets an error message when no data is provided", () => {
    cy.visit("/", { timeout: 120000 });

    cy.scrollTo("bottom");

    cy.get("[data-cy=error]").should(el => {
      if (Cypress.env("FEATURE_TOGGLE_PIZZA") === "true") {
        expect(el).to.have.length(2);
        expect(el.last()).to.contain("No data available");
      } else {
        expect(el).to.have.length(1);
        expect(el.first()).to.contain("No data available");
      }
    });
  });
});

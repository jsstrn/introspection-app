/// <reference types="Cypress" />

import api from "../../src/services/api";

describe("Handles errors gracefully", () => {
  before(() => {
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
    cy.visit("/");

    cy.get("[data-cy=error]").should(el => {
      expect(el).to.have.length(2);
      expect(el.first()).to.contain("No data available");
      expect(el.last()).to.contain("No data available");
    });
  });
});

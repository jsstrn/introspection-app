/// <reference types="Cypress" />

describe("Handles errors gracefully", () => {
  before(() => {
    cy.server();

    cy.route({
      method: "GET",
      url: "http://localhost:7890/introspection",
      response: []
    });

    cy.route({
      method: "GET",
      url: "http://localhost:7890/actions",
      response: []
    });
  });

  it("gets an error message when no data is provided", () => {
    cy.visit("/");
  });
});

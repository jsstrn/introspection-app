/// <reference types="Cypress" />

describe("Routes", () => {
  it("goes to home page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h4")
      .contains("About Introspection")
      .click();

    cy.url().should("include", "/home");
  });

  it("goes to radar page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h4")
      .contains("Introspection Radar")
      .click();

    cy.url().should("include", "/radar");
  });

  it("goes to action plan page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h4")
      .contains("Action Plan")
      .click();

    cy.url().should("include", "/plan");
  });

  it("goes to admin panel page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h4")
      .contains("Admin Panel")
      .click();

    cy.url().should("include", "/admin");
  });

  it("goes to detailed page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h4")
      .contains("Detailed")
      .click();
    cy.url().should("include", "/slice");
  });

  it("goes to profile page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("span")
      .contains("Esther T")
      .click();
    cy.url().should("include", "/profile");
  });
});

/// <reference types="Cypress" />

import api from "../../src/services/api";

describe("Routes", () => {
  beforeEach(() => {
    cy.server();

    cy.fixture("introspection").as("introspection");
    cy.fixture("actions").as("actions");

    cy.route({
      method: "GET",
      url: `${api}/introspection`,
      response: "@introspection"
    });

    cy.route({
      method: "GET",
      url: `${api}/actions`,
      response: "@actions"
    });
  });

  it.skip("goes to home page", () => {
    cy.visit("/", { timeout: 120000 });

    cy.get("h4")
      .contains("About Introspection")
      .click();

    cy.url().should("include", "/home");

    cy.scrollTo("bottom");

    if (Cypress.env("FEATURE_TOGGLE_PIZZA") === "true") {
      cy.get("h1.radar-title").should(
        "contain",
        "All Offices' Introspection Radar"
      );
    }

    cy.get("h1.wall-title").should("contain", "All Offices' Action Plan");
    cy.get(".actionPlanOfficeFilter").should("contain", "Thailand");
    cy.get(".categoryLink").should("contain", "Society and Privilege");
    cy.get("tr td").should("have.attr", "data-testid");
  });

  it.skip("goes to the detailed action plan page when a category in the table on the homepage is clicked", () => {
    cy.visit("/", { timeout: 120000 });
    cy.get(".categoryLink")
      .first()
      .click();
    cy.url().should("include", "/detailed");
    cy.get("h1").should("contain", "Society and Privilege");
    cy.get('p[data-testid="action-val-1"]')
      .first()
      .should("contain", "3");
  });

  it("goes to radar page", () => {
    cy.visit("/");

    cy.get("h4")
      .contains("Introspection Radar")
      .click();

    cy.url().should("include", "/radar");

    if (Cypress.env("FEATURE_TOGGLE_PIZZA") === "true") {
      cy.get("h1.radar-title").should("contain", "Introspection Radar");
    }
  });

  it("goes to action plan page", () => {
    cy.visit("/");

    cy.get("h4")
      .contains("Action Plan")
      .click();

    cy.url().should("include", "/plan");
  });

  it("goes to admin panel page", () => {
    if (Cypress.env("FEATURE_TOGGLE_NAVLINKS") === "true") {
      cy.visit("/");

      cy.get("h4")
        .contains("Admin Panel")
        .click();

      cy.url().should("include", "/admin");
    }
  });

  xit("goes to detailed page", () => {
    if (Cypress.env("FEATURE_TOGGLE_NAVLINKS") === "true") {
      cy.visit("/");
      cy.get("h4")
        .contains("Detailed")
        .click();
      cy.url().should("include", "/detailed");
      cy.get("h1").should("contain", "Equitable Tech");
    }
  });
});

/// <reference types="Cypress" />

import api from "../../src/services/api";

const wakeServiceUp = url => {
  cy.request(url).then(res => {
    if (res.status === 200) return;
    wakeServiceUp(url);
  });
};

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

  it("goes to home page", () => {
    cy.visit("/", { timeout: 120000 });

    cy.get("h4")
      .contains("About Introspection")
      .click();

    cy.url().should("include", "/home");

    cy.scrollTo("bottom");

    if (Cypress.env("FEATURE_TOGGLE_PIZZA") === "true") {
      cy.get("h1.radar-title").should("contain", "Introspection Radar");
    }

    cy.get("h1.wall-title").should("contain", "Singapore's Action Plan");
    cy.get("tr td").should("have.attr", "data-testid");
  });

  it("goes to the detailed action plan page when a category in the table on the homepage is clicked", () => {
    cy.visit("/", { timeout: 120000 });
    cy.get('a[href="/slice/Economic Justice"]')
      .first()
      .click();
    cy.url().should("include", "/slice/Economic%20Justice");
    cy.get("h1").should("contain", "Economic Justice");
    cy.get('p[data-testid="action-val-1"]')
      .first()
      .should("contain", "2");
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
      cy.url().should("include", "/slice");
      cy.get("h1").should("contain", "Equitable Tech");
    }
  });

  it("goes to profile page", () => {
    if (Cypress.env("FEATURE_TOGGLE_NAVLINKS") === "true") {
      cy.visit("/");
      cy.get("span")
        .contains("Esther T")
        .click();
      cy.url().should("include", "/profile");
    }
  });
});

/// <reference types="Cypress" />

describe("Routes", () => {
  before(() => {
    const wakeServiceUp = url => {
      cy.request(url).then(res => {
        if (res.status === 200) return;
        wakeServiceUp(url);
      });
    };

    wakeServiceUp("https://auto-introspection-api.herokuapp.com");
  });

  it("goes to home page", () => {
    cy.visit("/", { timeout: 120000 });

    cy.get("h4")
      .contains("About Introspection")
      .click();

    cy.url().should("include", "/home");

    if (Cypress.env("FEATURE_TOGGLE_PIZZA") === "true") {
      cy.get("h1.radar-title").should(
        "contain",
        "Singapore's Introspection Radar"
      );
    }

    cy.get("h1.wall-title").should("contain", "Singapore's Action Plan");
    cy.get("tr td").should("have.attr", "data-testid");
  });

  it("goes to radar page", () => {
    cy.visit("/");

    cy.get("h4")
      .contains("Introspection Radar")
      .click();

    cy.url().should("include", "/radar");
  });

  it("goes to action plan page", () => {
    cy.visit("/");

    cy.get("h4")
      .contains("Action Plan")
      .click();

    cy.url().should("include", "/plan");
  });

  it("goes to admin panel page", () => {
    cy.visit("/");
    if (Cypress.env("FEATURE_TOGGLE_NAVLINKS") === "true") {
      cy.visit("/");

      cy.get("h4")
        .contains("Admin Panel")
        .click();

      cy.url().should("include", "/admin");
    }
  });

  xit("goes to detailed page", () => {
    cy.visit("/");
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
    cy.visit("/");
    if (Cypress.env("FEATURE_TOGGLE_NAVLINKS") === "true") {
      cy.visit("/");
      cy.get("span")
        .contains("Esther T")
        .click();
      cy.url().should("include", "/profile");
    }
  });
});

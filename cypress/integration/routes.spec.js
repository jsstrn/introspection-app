/// <reference types="Cypress" />

describe("Routes", () => {
  it("goes to home page", () => {
    cy.visit("/");

    cy.get("h4")
      .contains("About Introspection")
      .click();

    cy.url().should("include", "/home");
    // cy.get("h1.radar-title").should("contain", "Singapore Introspection Radar");
    // cy.get("h1.wall-title").should("contain", "Singapore Action Plan");
    // cy.get("td")
    // .attr("data-testid", "Diversity and Inclusion-would like to share")
    // .should("include", 2);
    // cy.get("td")
    // .attr("data-testid", "Equitable Tech-would like to deepen")
    // .should("include", 3);
  });
  
  it("goes to radar page", () => {
    cy.visit("/");
    
    cy.get("h4")
    .contains("Introspection Radar")
    .click();
    
    cy.url().should("include", "/radar");
    cy.get("h1.radar-title").should("contain", "Singapore Introspection Radar");
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

    cy.get("h4")
      .contains("Admin Panel")
      .click();

    cy.url().should("include", "/admin");
  });

  it("goes to detailed page", () => {
    cy.visit("/");
    cy.get("h4")
      .contains("Detailed")
      .click();
    cy.url().should("include", "/slice");
    cy.get("h1").should("include", "Equitable Tech");
  });

  it("goes to profile page", () => {
    cy.visit("/");
    cy.get("span")
      .contains("Esther T")
      .click();
    cy.url().should("include", "/profile");
  });
});

/// <reference types="Cypress" />

// Home button is clickable and takes you to the main page
describe("Home button", () => {
  it("clicking home button takes you to the main page", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Shareversity").click();
    cy.url().should("eq", "https://shareversity.us/");
  });
});
//  Clicks on sign in button
describe("Sign in button", () => {
  it("click sign in button", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Sign In").click();
  });
});

// Confirms URL changed to  sign-up page
describe("Sign in URL", () => {
  it("clicking sign in, navigates to sign-in URL", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Sign In").click();
    // URL changes to /sign-in
    cy.url().should("include", "/sign-in");
  });
});

// Clicks on "Register" button
describe("Register button", () => {
  it("clicks register button", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Register");
  });
});

// Confirms URL changed to  sign-up page
describe("Check register page URL", () => {
  it("clicking register, navigates to a new URL", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Register").click();
    // URL changes to /sign-in
    cy.url().should("include", "/sign-up");
  });
});

//  Clicks on sign up button
describe("Sign up button", () => {
  it("click sign up button", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Sign Up").click();
  });
});

// Confirms URL changed to  sign-up page
describe("Sign up URL", () => {
  it("clicking sign up, navigates to sign-up URL", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Sign Up").click();
    // URL changes to /sign-up
    cy.url().should("include", "/sign-up");
  });
});

// Already have an account link works
describe("Already have an account", () => {
  it("clicking sign up, navigates to sign-up URL", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Sign Up").click();
    // URL changes to /sign-up
    cy.url().should("include", "/sign-up");
    cy.contains("Already have an account").click();
    cy.url().should("include", "/sign-in");
  });
});

//Not a member yet? Sign Up here
describe("Not a member link", () => {
  it("not a member link takes you to sign-up page", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Sign In").click();
    cy.url().should("include", "sign-in");
    cy.contains("Sign Up here").click();
    cy.url().should("include", "sign-up");
  });
});

// Sign-up fake user
describe("Sign up user", () => {
  it("signing up form", () => {
    cy.visit("https://shareversity.us");
    cy.contains("Sign Up").click();
    // URL changes to /sign-up
    cy.url().should("include", "/sign-up");

    cy.get("input[name=firstName]").type("John");
    cy.get("input[name=lastName]").type("Doe");
    cy.get("input[name=email]").type("jdoe@harvard.edu");
    cy.get("input[name=password]").type("averylongpwthatneedstoworkwherewewe");
  });
});

// serepie.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

describe("Login functionality",() => {

    let mobile_number = "01020476240";
    let password = "password";


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });



    it("Should login successfully with valid phone number and valid password", () => {
        cy.visit("https://www.buffaloburger.com", { failOnStatusCode: false });
        cy.get('div').contains('Login').click();
        cy.get('[name="mobile_number"]').click().type(mobile_number);
        cy.get('[name="mobile_number"]').should('have.value', mobile_number);
        cy.get('[name="password"]').click().type(password);
        cy.get('[name="password"]').should('have.value', password);
        cy.get('button').contains('Log in').click();
        cy.get('span.truncate').should('be.visible').and('contain','Hello');
        cy.get('div').contains('Login').should('not.exist');
    });

    it("Should display error for invalid password", () => {
        cy.visit("https://www.buffaloburger.com", { failOnStatusCode: false });
        cy.get('div').contains('Login').click();
        cy.get('[name="mobile_number"]').click().type(mobile_number);
        cy.get('[name="mobile_number"]').should('have.value', mobile_number);
        cy.get('[name="password"]').click().type("213453783453");
        cy.get('[name="password"]').should('have.value', "213453783453");
        cy.get('button').contains('Log in').click();
        cy.get('div').contains('Wrong password').should('be.visible');
    });

    it("Should display error for invalid phone number", () => {
        cy.visit("https://www.buffaloburger.com", { failOnStatusCode: false });
        cy.get('div').contains('Login').click();
        cy.get('[name="mobile_number"]').click().type("01235438720");
        cy.get('[name="mobile_number"]').should('have.value', "01235438720");
        cy.get('[name="password"]').click().type(password);
        cy.get('[name="password"]').should('have.value', password);
        cy.get('button').contains('Log in').click();
        cy.get('div').contains('Mobile number not found').should('be.visible');
    });

    it("Should prevent login with empty password", () => {
        cy.visit("https://www.buffaloburger.com", { failOnStatusCode: false });
        cy.get('div').contains('Login').click();
        cy.get('[name="mobile_number"]').click().type("01235438720");
        cy.get('[name="mobile_number"]').should('have.value', "01235438720");
        cy.get('button').contains('Log in').should('be.disabled');
    });

    it("Should prevent login with empty fields", () => {
        cy.visit("https://www.buffaloburger.com", { failOnStatusCode: false });
        cy.get('div').contains('Login').click();
        cy.get('button').contains('Log in').should('be.disabled');
    });

})
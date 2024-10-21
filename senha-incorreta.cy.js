/// <reference types= 'Cypress'/>

describe('Teste funcional de login', () => {
    it('O sistema identidficar senha incorreta', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('abc123')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
        
    })
});

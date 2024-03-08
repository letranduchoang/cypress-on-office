/// <reference types="Cypress" />

//const cypress = require("cypress");

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()


        cy.get('.cart-icon').click()
        cy.get('.cart-preview').find('.action-block').find('button').click()
        cy.get('.container').contains('Place Order').click()
        cy.get('select').select(2)


        cy.get('.wrapperTwo').should('have.attr')

        cy.get('.chkAgree').check().should('be.checked').and('have.value', 'on')

        cy.get('button').click()



    })



})
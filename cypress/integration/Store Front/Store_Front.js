/// <reference types="cypress" />

describe('test_name', function() {

    it('what_it_does', function() {
        cy.visit('https://staging-chkec-ec.deuna.io/')

        cy.get('.ml-md-5 > li > a > span > .translation_missing').click({ force: true })

        cy.visit('https://staging-chkec-ec.deuna.io/menu')

        //cy.get("[placeholder = 'BUSCAR']").should('be.visible')

        cy.get('.modal-content > .modal-header > .close > span > .spree-icon:nth-child(2)').click()

        cy.get('#product_4 > .card > .h-100 > .card-body > .mt-auto').click()

        cy.get('div > .modifier-container > .modifier-group-divider > .form-check > #original-o-crispy-original').click()

        cy.get('div > .modifier-container > .modifier-group-divider > .form-check > #original-o-crispy-original').type('1_1')

        cy.get('div > .modifier-container > .modifier-group-divider > .form-check > #sabor-de-tu-bebida-pepsi').click()

        cy.get('div > .modifier-container > .modifier-group-divider > .form-check > #sabor-de-tu-bebida-pepsi').type('2_4')

        cy.get('.container-fluid > .row > .col-12 > .d-flex > #add-to-cart-button').click()

        cy.get('.product-added-content > .modal-body > .row > .col-12 > .btn-lg').click()

        cy.visit('https://staging-chkec-ec.deuna.io/checkout')

        cy.get('#dUnaCheckoutWidget__modal').should('be.visible')

    })

})
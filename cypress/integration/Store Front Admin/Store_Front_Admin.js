/// <reference types="cypress" />

describe('Login Store Front Admin', function() {
    it('Validar la pagina Store Front Admin', function() {
        cy.visit('https://staging-prue2-cl.getduna.com/admin/login')
        cy.title().should('eq', 'Administración')
    })
    it('Validar el campo Usuario', () => {
        cy.get('.card-body > #new_spree_user > #password-credentials > .form-group > #spree_user_email').type('jcallataxi@getduna.com')
    })

    it('Validar el campo Contraseña', () => {
        cy.get('.card-body > #new_spree_user > #password-credentials > .form-group > #spree_user_password').type('@Admin2021')
    })

    it('Validar el boton Ingresar', () => {
        cy.get('.card > .card-body > #new_spree_user > .form-group > .btn').click()
        cy.visit('https://staging-prue2-cl.getduna.com')
    })

})

describe('Login Store Front', function() {
    it('Validar login en el Store Front', () => {
        cy.get('#account-button > .d-none').click({ force: true })
        cy.get('[href="/login"]').click({ force: true })
        cy.get('#spree_user_email').type('jcallataxi@getduna.com')
        cy.get('#spree_user_password').type('@Admin2021')
        cy.get('#new_spree_user > .btn').click({ force: true })
        cy.get('#account-button > .d-none').click({ force: true })
        cy.get('[href="/admin/orders"]').click({ force: true })
        cy.url().should('include', 'admin/orders')
    })

})

describe('Crear un nuevo Pedido', function() {
    it('Validar boton Nuevo Pedido', () => {
        cy.get('#admin_new_order').click({ force: true })
    })
})
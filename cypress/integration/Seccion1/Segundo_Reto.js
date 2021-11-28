/// <reference types="cypress" />

require('cypress-xpath')

describe('Selectores', () => {
    it('Selector por Atributo', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.title().should('eq', 'Computers database')
        cy.wait(1000)
    })

    it('Validar agregar nuevo PC', () => {
        cy.xpath("//a[contains(@id,'add')]").should('be.visible').click()
        cy.xpath("//input[contains(@id,'name')]").should('be.visible').type('Dell')
        cy.xpath("//input[contains(@id,'introduced')]").should('be.visible').type('2021-09-26')
        cy.xpath("//input[contains(@id,'discontinued')]").should('be.visible').type('2021-12-31')
        cy.xpath("//select[contains(@id,'company')]").should('be.visible').select("RCA").should('have.value', '3')
        cy.xpath("//input[contains(@type,'submit')]").should('have.value', 'Create this computer').click()
        cy.wait(1000)
    })

    it('Validar buscar PC', () => {
        cy.xpath("//input[contains(@id,'searchbox')]").type('ACE')
        cy.xpath("//input[contains(@id,'searchsubmit')]").click()
    })


    it('Validar editar PC', () => {
        cy.xpath("//a[@href='/computers/381'][contains(.,'ACE')]").should('be.visible').click()
        cy.xpath("//input[contains(@id,'name')]").should('be.visible').clear().type('ACE1')
        cy.xpath("//input[contains(@id,'introduced')]").should('be.visible').type('2021-09-26')
        cy.xpath("//input[contains(@id,'discontinued')]").should('be.visible').type('2021-12-31')
        cy.xpath("//select[contains(@id,'company')]").should('be.visible').select("RCA").should('have.value', '3')
        cy.xpath("//input[contains(@value,'Save this computer')]").should('have.value', 'Save this computer').click()
    })

    it('Validar eliminar PC', () => {
        cy.xpath("//a[@href='/computers/501'][contains(.,'AN/FSQ-32')]").should('be.visible').click()
        cy.xpath("#main > form.topRight > input").should('be.visible').click()
    })
})
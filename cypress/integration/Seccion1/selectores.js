/// <reference types="cypress" />

require('cypress-xpath')

describe('Selectores', () => {
    it('Selector por Atributo', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get("[placeholder = 'Full Name']").should('be.visible').type('Juan Callataxi')
    })
    it('Selector por Xpath', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should('be.visible').type('Juan Callataxi')
    })

    it('Selector por Contains', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get('.custom-control-label').contains('Female').click()
        cy.get('.custom-control-label').contains('Music').click()
    })

    it.only('Selector por copy_selector', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1000)

        cy.get('#userNumber').should('be.visible').type('0987033304')
    })

})
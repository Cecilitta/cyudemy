/// <reference types="Cypress" />

describe('handling mouse hover popups', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('verify the info of a mouse hover',() =>{
        cy.get('div.mouse-hover-content').invoke('show')
        cy.get('a[href="#top"]').click()
        cy.url().should('include','top')
 })

})
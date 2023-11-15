/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"

describe('handling iframes', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('verify the correct functionality of iframes ',() =>{
        cy.get('div.mouse-hover-content').invoke('show')
        cy.get('a[href="#top"]').click()
        cy.url().should('include','top')
 })

})
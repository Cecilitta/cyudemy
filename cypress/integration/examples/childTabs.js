/// <reference types="Cypress" />

describe('handling child tabs', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('automate child tabs',() =>{
      cy.get('#opentab').invoke('removeAttr','target').click()
      cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('#navbarSupportedContent > ul > li:nth-child(4) > a').click()
        cy.get('.mt-50 > h2').should('contain','Welcome to QAClick Academy')
      })

    })

 
 } )


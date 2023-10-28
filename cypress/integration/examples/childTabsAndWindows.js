/// <reference types="Cypress" />

describe('handling child tabs', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('navigate through child tab',() =>{
      cy.get('#opentab').invoke('removeAttr','target').click()
      cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('#navbarSupportedContent > ul > li:nth-child(4) > a').click()
        cy.get('.mt-50 > h2').should('contain','Welcome to QAClick Academy')
      })
   })

    it ('navigate through child window',() =>{
    cy.get('#openwindow').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com/',()=>{
      cy.url().should('eq','https://www.qaclickacademy.com/')
      cy.get('#navbarSupportedContent > ul > li:nth-child(4) > a').click()
      cy.get('.mt-50 > h2').should('contain','Welcome to QAClick Academy')

    })
 
 } )
} )
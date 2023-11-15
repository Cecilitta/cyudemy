/// <reference types="Cypress" />

describe('handling popUps', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('verify the message of the alert popUp',() =>{
       cy.get('#alertbtn').click()
       cy.on('window:alert',(msg)=>{
        expect(msg).to.equal('Hello , share this practice page and share your knowledge')
       })
    })

    it ('verify the message of the confirmation popUp',() =>{
      cy.get('#confirmbtn').click()
      cy.on('window:confirm',(msg)=>{
       expect(msg).to.equal('Hello , Are you sure you want to confirm?')
      })
   })
 
 } )


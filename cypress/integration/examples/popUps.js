/// <reference types="Cypress" />

describe('handling popUps', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('automate popUps',() =>{
       cy.get('#alertbtn').click()
       cy.get('#confirmbtn').click()
       cy.on('window:alert',(msg)=>{
        expect(msg).to.equal('Hello , share this practice page and share your knowledge')
       })
       cy.on('window:confirm',(msg)=>{
        expect(msg).to.equal('Hello , Are you sure you want to confirm?')
       })
    })

 
 } )


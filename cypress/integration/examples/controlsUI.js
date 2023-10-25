/// <reference types="Cypress" />

describe('handling web controls UI', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('automate checkboxes',() =>{
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })

    it ('automate dropdowns',() =>{
        //static
        cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')

        //dynamic
        cy.get('#autocomplete').type('ind') 
        cy.get('.ui-menu-item div').each((el, index, list) =>{
           if(el.text()==="India") {
            cy.wrap(el).click()
           }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it ('automate visible/invisible elements',() =>{
    cy.get('#displayed-text').as('textInput')
    cy.get('@textInput').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('@textInput').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('@textInput').should('be.visible')
    })

    it ('automate radioButtons',() =>{
        cy.get('input[value="radio1"]').click().should('be.checked').and('have.value','radio1')
        cy.get('input[value="radio2"]').click()
        cy.get('input[value="radio1"]').should('not.be.checked')
    })
    
 })


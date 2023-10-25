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

    
 } )


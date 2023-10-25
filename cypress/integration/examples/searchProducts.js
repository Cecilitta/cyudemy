/// <reference types="Cypress" />


describe('My First Test', () => {

    it('Search products!', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('input[type="search"]').clear().type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)
      cy.get('.products').as('prodClass')
      cy.get('@prodClass').find('.product').should('have.length',4)
      cy.get('@prodClass').find('.product').eq(2).contains('ADD TO CART').click()
      cy.get('@prodClass').find('.product').each((el, index, $list) => {
        const prodName= el.find('h4.product-name').text()
        if (prodName.includes('Carrot')) {
          cy.contains('ADD TO CART').click()
        } 
      })
    })

    it ('log brand', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())
        })
      cy.get('.brand').should('have.text', 'GREENKART')
    })
  
  })
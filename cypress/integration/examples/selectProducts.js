/// <reference types="Cypress" />


describe('select products and checkOut', () => {

    it('verify the correct functionality of Selection and checkOut of products', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('input[type="search"]').clear().type('ca')
      cy.wait(2000)
 
      cy.get('.products').as('prodClass')

      cy.get('@prodClass').find('.product').each((el, index, $list) => {
        const prodName= el.find('h4.product-name').text()
        if (prodName.includes('Carrot')) {
          cy.wrap(el).find('button').click() // $el.find('button').click() esta deprecado, hay que envolverlo para crear objeto y poder aplicar el find.click
        } 
      })
      cy.wait(2000)
      cy.get('.cart-icon > img').click()
      cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click()
      cy.contains('button', 'Place Order').click();
     
    })
 
  })
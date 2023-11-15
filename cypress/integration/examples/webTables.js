/// <reference types="Cypress" />

describe('handling web controls UI', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      });

    it ('verify that info in a web table is correct',() =>{

        cy.get('tr td:nth-child(2)').each((el, index, list) =>{
           const course=el.text()
            if(course.includes('QA Resume')){
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('0')
        })
            }
    })

 })

})
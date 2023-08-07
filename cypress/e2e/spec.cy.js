describe("Burrito Builder", () => {
  it("should display the title, form, and orders", () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      body: {
        "orders": [
          {
          "id": 1,
          "name": "Pat",
          "ingredients": [
          "beans",
          "lettuce",
          "carnitas",
          "queso fresco",
          "jalapeno"
          ]
          },
          {
          "id": 2,
          "name": "Sam",
          "ingredients": [
          "steak",
          "pico de gallo",
          "lettuce",
          "carnitas",
          "queso fresco",
          "jalapeno"
          ]
          },
          {
          "id": 3,
          "name": "Alex",
          "ingredients": [
          "sofritas",
          "beans",
          "sour cream",
          "carnitas",
          "queso fresco"
          ]
          }
          ]
      }
    })
    cy.visit("http://localhost:3000/");

    cy.get('h1').should('have.text', 'Burrito Builder')
    cy.get('form').should('be.visible')
    cy.get('section').children().should('have.length', 3)
  });
  it.only("should allow users to add orders", () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      body: {
        "orders": [
          {
          "id": 1,
          "name": "Pat",
          "ingredients": [
          "beans",
          "lettuce",
          "carnitas",
          "queso fresco",
          "jalapeno"
          ]
          },
          {
          "id": 2,
          "name": "Sam",
          "ingredients": [
          "steak",
          "pico de gallo",
          "lettuce",
          "carnitas",
          "queso fresco",
          "jalapeno"
          ]
          },
          {
          "id": 3,
          "name": "Alex",
          "ingredients": [
          "sofritas",
          "beans",
          "sour cream",
          "carnitas",
          "queso fresco"
          ]
          }
          ]
      }
    })
    // cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
    //   statusCode: 200,
    //   body: {
    //     "orders": [
    //       {
    //       "id": 4,
    //       "name": "Pepper",
    //       "ingredients": [
    //       "beans",
    //       "hot sauce",
    //       "carnitas"
    //       ]
    //       }
    //       ]
    //   }
    // }).as('addOrder')
    cy.visit("http://localhost:3000/");

    cy.get('input').type('Pepper')
    cy.get('[name="beans"]').click()
    cy.get('[name="hot sauce"]').click()
    cy.get('[name="carnitas"]').click()

    cy.get(':nth-child(16)').click()

    // cy.wait('@addOrder')

    cy.get('section').children().should('have.length', 4)
    // cy.get('section').children().first().should('have.length', 1)
    
  });
  it("should not allow users to add orders that are missing a name or ingredients", () => {
    cy.visit("http://localhost:3000/");
  });
});

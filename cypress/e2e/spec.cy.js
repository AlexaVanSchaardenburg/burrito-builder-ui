describe("Burrito Builder", () => {
  it.only("should display the title, form, and orders", () => {
    cy.visit("http://localhost:3000/");
  });
  it("should allow users to add orders", () => {
    cy.visit("http://localhost:3000/");
  });
  it("should not allow users to add orders that are missing a name or ingredients", () => {
    cy.visit("http://localhost:3000/");
  });
});

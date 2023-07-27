describe("Order Component Tests", () => {
  beforeEach(() => {
    // Before each test, visit your application's URL
    cy.visit("/");
  });

  it("should be able to add text to the input", () => {
    // Test adding text to the name input field
    cy.get("#name-input").type("John Doe").should("have.value", "John Doe");
  });

  it("should be able to select multiple toppings", () => {
    // Test selecting multiple toppings
    cy.get("#pepperoni").check().should("be.checked");
    cy.get("#sausage").check().should("be.checked");
    cy.get("#pineapple").check().should("be.checked");
    // Add more toppings if needed
  });

  it("should be able to submit the form", () => {
    // Test submitting the form
    cy.get("#name-input").type("John Doe");
    // Select pizza size and toppings if needed
    cy.get("#order-button").click();
    cy.url().should("include", "/confirmation");
  });
});

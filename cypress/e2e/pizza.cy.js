describe("Order Component Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("should be able to add text to the input", () => {
    cy.get("#name-input").type("John Doe").should("have.value", "John Doe");
  });

  
  it("should be able to select multiple toppings", () => {
    cy.get("#pepperoni").check().should("be.checked");
    cy.get("#sausage").check().should("be.checked");
    cy.get("#pineapple").check().should("be.checked");
    
  });

  
  it("should be able to submit the form", () => {
    cy.get("#name-input").type("John Doe");
    cy.get("#size-dropdown").select("small"); 
    cy.get("#pepperoni").check(); 
    cy.get("#sausage").check(); 
    
    cy.get("#order-button").click();
    cy.url().should("include", "/confirmation");
  });
});

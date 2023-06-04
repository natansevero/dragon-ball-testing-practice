/// <reference types="cypress" />

context('Testing balls found', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("should show 'Encontrada' badge when user click that found a ball", () => {
    cy.get('[data-testid="found-button-ball-id-2"]').click();
    cy.get('.modal-footer').should("be.visible");
    cy.findByText('Sim').click();

    cy.get('[data-testid="found-ball-id-2"]').should("be.visible");
  });
})
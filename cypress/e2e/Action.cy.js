/// <reference types="cypress" />

context('Testing shenlong invocation', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should invocate if user have 7 dragon balls', () => {
    cy.get('[data-testid="found-button-ball-id-2"]').click();
    cy.get('.modal-footer').should("be.visible");
    cy.findByText('Sim').click();

    cy.get('[data-testid="found-button-ball-id-3"]').click();
    cy.get('.modal-footer').should("be.visible");
    cy.findByText('Sim').click();

    cy.get('[data-testid="found-button-ball-id-4"]').click();
    cy.get('.modal-footer').should("be.visible");
    cy.findByText('Sim').click();

    cy.findByText("Invocar").should("be.visible");
    cy.findByText("Invocar").click();
    cy.get('[data-testid="shenlong"]').should("be.visible");
  });

  it('Should not invocate if user doesnt have 7 dragon balls', () => {
    cy.findByText("Invocar").should("be.visible");
    cy.findByText("Invocar").click();
    cy.get('.modal-content').should("be.visible");
    cy.findByText("Você não tem todas as esferas para invocar o shenlong").should("be.visible");
    cy.findByText("Voltar").click();
  });
})
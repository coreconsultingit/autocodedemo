describe('Main page', () => {
  it('should display AUT-11', () => {
    cy.visit('/');
    cy.contains('AUT-11');
  });
});
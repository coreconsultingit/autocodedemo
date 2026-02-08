describe('Main page', () => {
  it('should display hello world', () => {
    cy.visit('/');
    cy.contains('Hello World');
  });
});
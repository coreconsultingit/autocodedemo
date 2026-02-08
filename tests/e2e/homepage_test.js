describe('Homepage', () => {
  it('should display the correct title', () => {
    cy.visit('/');
    cy.title().should('eq', 'My App');
  });

  it('should navigate to the about page', () => {
    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');
  });
});

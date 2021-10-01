describe('Heading Text', () => {
  it('contains the correct title', () => {
    cy.visit('/example-1');

    cy.get('h1')
      .invoke('text')
      .should('equal', 'My Awesome Web Application')
  })
})
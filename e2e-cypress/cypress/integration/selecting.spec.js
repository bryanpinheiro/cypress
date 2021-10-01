describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('/example-3');

    cy.get('[data-cy="first-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '15');

    cy.get('[data-cy="input-first-name"]')
      .type('hello');

    cy.get('[data-cy="first-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '10');

    cy.get('[data-cy="input-first-name"]')
      .type(' my friend');

    cy.get('[data-cy="first-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '0');
  });

  it('prevents the user from typing more characters once' +
    'max is exceeded', () => {
      cy.visit('/example-3');

      const word = 'sudhsaudhsoquuwueyqwoue';
      cy.get('[data-cy="input-first-name"]')
        .type(word);

      cy.get('[data-cy="input-first-name"]')
        .should('have.attr', 'value', word.slice(0, 15));
    });
})
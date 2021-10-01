describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('/example-3');

    cy.get('[data-cy="first-name-chars-left-count"]')
      .as('charsLeftSpan');

    cy.get('[data-cy="input-first-name"]')
      .as('charInput');

    cy.get('@charsLeftSpan')
      .then($charsLeftSpan => {
        expect($charsLeftSpan.text()).to.be.equal('15');
      });

    cy.get('@charInput')
      .type('hello');

    cy.get('@charsLeftSpan')
      .invoke('text')
      .should('equal', '10');

    cy.get('@charInput')
      .type(' my friend');

    cy.get('@charsLeftSpan')
      .invoke('text')
      .should('equal', '0');
  });

  it('prevents the user from typing more characters once' +
    'max is exceeded', () => {
      cy.visit('/example-3');

      const word = 'sudhsaudhsoquuwueyqwoue';

      cy.get('[data-cy="input-first-name"]')
        .as('charInput');

      cy.get('@charInput')
        .type(word);

      cy.get('@charInput')
        .should('have.attr', 'value', word.slice(0, 15));
    });
})
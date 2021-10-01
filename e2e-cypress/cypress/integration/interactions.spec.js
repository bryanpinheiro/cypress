describe('Basic page interactions', () => {

  beforeEach(() => {
    cy.visit('/example-4');

    cy.get('[data-cy="box-1-items-list"] > :nth-child(2)')
      .as('list-one');

    cy.get('[data-cy="box-1-selected-name"]')
      .as('header-one');

    cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input')
      .as('checkboxes-one');
  });

  it('sets the header text to the item\'s name when double clicked', () => {
    cy.get('@list-one')
      .dblclick();

    cy.get('@header-one')
      .invoke('text')
      .should('equal', 'Option Two');
  });

  it('displays the correct count foro the number of selected checkboxes', () => {
    cy.get('@checkboxes-one')
      .check();
    
    cy.get('[data-cy=box-2-selected-count]')
      .invoke('text')
      .should('equal', '1');
  });

})
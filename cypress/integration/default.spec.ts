describe('Default site', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads home page', () => {
    cy.findByText('Next Demo!')
    cy.findByTestId("list-server-side").within(() => {
      cy.findAllByRole("link").should('have.length', 5)
    })

    cy.findByTestId("list-dynamic-pages").within(() => {
      cy.findAllByRole("link").should('have.length', 3)
    })

    cy.findByTestId("list-catch-all").within(() => {
      cy.findAllByRole("link").should('have.length', 3)
    })

    cy.findByTestId("list-static").within(() => {
      cy.findAllByRole("link").should('have.length', 2)
    })
  })
})
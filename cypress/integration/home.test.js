import { ROUTES } from '../constants'

describe('Homepage', () => {
  beforeEach(() => {
  })

  it('should access home page', () => {
    cy.visit(ROUTES.HOME)

    cy.get('h1')
      .should('contain.text', 'home')
  })
})

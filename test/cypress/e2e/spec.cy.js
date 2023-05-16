describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')
    cy.get('input[aria-describedby="username"]').type('admin@test.com')
    cy.get('input[aria-describedby="password"]').type('Sogeti33')
    cy.xpath('//div[@class="login-form"]//button').click()
    cy.get('img[alt="OpenCruise"]').should('be.visible')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')
    cy.get('input[aria-describedby="username"]').type('admin@test.com')
    cy.xpath('//div[@class="login-form"]//button').click()
    cy.get('[class="invalid-feedback"]').contains('Merci de renseigner votre mot de passe')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opencruise-ko.sogeti-center.cloud')
    cy.get('input[aria-describedby="username"]').type('admin@test.com')
    cy.get('input[aria-describedby="password"]').type('Sogeti33')
    cy.xpath('//div[@class="login-form"]//button').click()
    cy.get('img[alt="OpenCruise"]').should('be.visible')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opencruise-ko.sogeti-center.cloud')
    cy.get('input[aria-describedby="username"]').type('admin@test.com')
    cy.xpath('//div[@class="login-form"]//button').click()
    cy.get('[class="invalid-feedback"]').contains('Merci de renseigner votre mot de passe')
  })
})
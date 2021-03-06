/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-localstorage-commands'

Cypress.Commands.add('getToken', (user, passwd) => {
  cy.request({
    method: 'POST',
    url: 'https://api.qa-base.runahrapps.com/sessions',
    body: {
      email: user,
      password: passwd,
      subdomain: 'mexico',
    },
  }).its('body.access_token').should('not.be.empty')
    .then((accessToken) => accessToken)
})

Cypress.Commands.add('itemSelect', (text, selector1, selector2) => {
  cy.get(selector1).click().type(text)
  cy.get(selector2).each(($el) => {
    if ($el.text() === text) ($el.click())
  })
})

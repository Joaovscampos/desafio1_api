Cypress.Commands.add('createUser', (username, password) => {
    cy.request({
        method: 'POST',
        url: '/Account/v1/User',
        body: {
            "userName": username,
            "password": password
        }
    })
}); 





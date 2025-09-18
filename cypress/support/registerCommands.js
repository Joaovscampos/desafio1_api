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

Cypress.Commands.add('returnUserId', (username, password) => {
    let userId;
    
    cy.createUser(username, password).then((response) => {
        userId = response.body.userId;
        return userId;
    });
}); 





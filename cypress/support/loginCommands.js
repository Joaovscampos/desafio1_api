Cypress.Commands.add('loginSuccess', (username, password) => {
    cy.request({
        method: 'POST',
        url: '/Account/v1/GenerateToken',
        body: {
            "userName": username,
            "password": password
        }
    })
}); 

Cypress.Commands.add('returnToken', (username, password) => {
   let token;
   let headers;
   
    cy.loginSuccess(username, password).then((response) => {
        token = response.body.token;
        headers ={
            'Authorization': `Bearer ${token}`,
        };
        return {token, headers};
    }); 
});

Cypress.Commands.add('authorizeUser', (username, password) => {
    cy.request({
        method: 'POST',
        url: '/Account/v1/Authorized',
        body: {
            "userName": username,
            "password": password
        }
    })
});


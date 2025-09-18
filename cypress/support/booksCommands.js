Cypress.Commands.add('getBooks', () => {
    cy.request({
        method: 'GET',
        url: '/BookStore/v1/Books',
    })
}); 

Cypress.Commands.add('rentBooks', (userId, isbn1, isbn2) => {
    cy.request({
      method: "POST",
      url: "/BookStore/v1/Books",
      body: {
        "userId": userId,
        "collectionOfIsbns": [
          {
            "isbn": isbn1,
          },
          {
            "isbn": isbn2,
          },
        ],
      },
    });
});
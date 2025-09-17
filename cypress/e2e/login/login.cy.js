import { faker } from '@faker-js/faker';

describe('Login', () => {
    let username;
    let password;

    before(() => {
        username = faker.internet.userName();
        password = faker.internet.password({
            length: 8,
            memorable: false,
            pattern: /[A-Za-z0-9]/,
            prefix: '!A1a'
        });
        cy.createUser(username, password).then((response) => {
            expect(response.status).to.eq(201);
        }); 
    });

    it('should login successfully', () => {
        cy.loginSuccess(username, password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.token).to.not.eq(null);
        }); 
    });

    it('should authorize user', () => {
        cy.authorizeUser(username, password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq(true);
        }); 
    });
});
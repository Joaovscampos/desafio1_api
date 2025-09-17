import {faker} from '@faker-js/faker'

describe('Register', () => {     
    it('should register successfully', () => {
        const username = faker.internet.userName();
        const password = faker.internet.password({
            length: 8,
            memorable: false,
            pattern: /[A-Za-z0-9]/,
            prefix: '!A1a'
        });
        cy.createUser(username, password).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.username).to.eq(username);
            expect(response.body.userId).to.not.eq(null);
        }); 
    }); 
})
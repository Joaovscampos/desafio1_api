import {faker} from '@faker-js/faker'

describe('Account', () => {     
    it('create user', () => {
        const username = faker.internet.userName();
        const password = faker.internet.password({
            length: 8,
            memorable: false,
            pattern: /[A-Za-z0-9]/,
            prefix: '!A1a'
        });
        cy.createUser(username, password); 
    }); 
})
import {faker} from '@faker-js/faker'

describe('Books', () => {
    let userId;
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
        cy.returnUserId(username, password).then((response) => {
            userId = response.body.userId;
            cy.log(userId); //undefined
        }); 
        cy.loginSuccess(username, password).then((response) => {
            expect(response.status).to.eq(200);
        });
        cy.authorizeUser(username, password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq(true);
        });
    });

    it('should get books successfully', () => {
        cy.getBooks().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('books').and.to.be.an('array');
            expect(response.body.books.length).to.be.greaterThan(0);

            const book = response.body.books[0];
            expect(book).to.have.all.keys(
                'isbn',
                'title',
                'subTitle',
                'author',
                'publish_date',
                'publisher',
                'pages',
                'description',
                'website'
            );            
        }); 
    });

    it.skip('should rent two books successfully', () => {
        cy.rentBooks(userId, 'teste', 'teste',).then((response) => {
            expect(response.status).to.eq(201);
        });

        //userID undefined  
    })  

    it.skip('should list user detail with book choice successfully', () => {
        //userID undefined  
    })
})
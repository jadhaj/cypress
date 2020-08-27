describe('Heading text Jad first test', () => {
    it('contains the correct title', () => {
        cy.visit('http://192.168.1.102:3000/example-1');

        cy.get('h1')
            .invoke('text')
            .should('equal', 'Awesome Web Application');
    });
});

export class HomePage {
    get productTitle () {
        return cy.get('.title');
    }
}
export const homePage = new HomePage();

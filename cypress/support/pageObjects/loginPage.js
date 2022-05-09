export class LoginPage {
    get usernameField () {
        return cy.get('#user-name');
    }
    get passwordField () {
        return cy.get('#password');
    }
    get errorMessage () {
        return cy.get('[data-test="error"]');
    }
    login (username, password) {
        this.usernameField.type(username);
        this.passwordField.type(`${password}{enter}`, { log: false });
    }
}
export const loginPage = new LoginPage();

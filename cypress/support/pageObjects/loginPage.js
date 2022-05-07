export class LoginPage {
    get usernameField () {
        return cy.get('#user-name');
    }
    get passwordField () {
        return cy.get('#password');
    }
    login (username, password) {
        this.usernameField.type(username);
        this.passwordField.type(`${password}{enter}`, { log: false });
    }
}
export const loginPage = new LoginPage();

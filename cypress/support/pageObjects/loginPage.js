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
    login3UnsuccessfulAttempts (username, password) {
        loginPage.login(username, password);
        loginPage.usernameField.clear();
        loginPage.passwordField.clear();
        loginPage.login(username, password);
        loginPage.usernameField.clear();
        loginPage.passwordField.clear();
        loginPage.login(username, password);
    }
}
export const loginPage = new LoginPage();

import { loginPage } from '../support/pageObjects/loginPage';
import { homePage } from "../support/pageObjects/homePage";

describe('Login', function () {
    beforeEach (function () {
        cy.visit("/");
        cy.fixture('testData').then(function (data){
            this.data = data;
        });
    });
    it('Standard user login with valid credentials', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.productTitle.should('be.visible');
    });
    it('Locked out user login with invalid credentials', function () {
        loginPage.login(this.data.lockedOut, this.data.password);
        loginPage.errorMessage.then((innerText) => {
            expect(innerText.text()).to.include(this.data.errorLockedOut);
        })
    });
    it('Username and/or password is not matching', function () {
        loginPage.login(this.data.incorrectUsername, this.data.password);  //not in "Accepted usernames"
        loginPage.errorMessage.then((innerText) => {
            expect(innerText.text()).to.include(this.data.errorNoMatch);
        })
    });
    it('Problem user login with valid credentials', function () {
        loginPage.login(this.data.problem, this.data.password);
        homePage.productTitle.should('be.visible');
    });
    it('Performance glitch login with valid credentials', function () {
        loginPage.login(this.data.glitchUser, this.data.password);  //takes extra time to process, but cypress auto waits
        homePage.productTitle.should('be.visible');
    });
});

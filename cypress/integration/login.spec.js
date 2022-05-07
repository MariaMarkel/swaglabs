import { loginPage } from '../support/pageObjects/loginPage';
import { homePage } from "../support/pageObjects/homePage";

describe('Login', function () {
    before (function () {
        cy.visit("/");
        cy.fixture('testData').then(function (data){
            this.data = data;
        })
    })
    it('log in with valid credentials', function () {
        loginPage.login(this.data.standardUsername, this.data.password);
        homePage.productTitle.should('be.visible');
    })
})

import { loginPage } from '../support/pageObjects/loginPage';
import { homePage } from "../support/pageObjects/homePage";
import { productPage } from '../support/pageObjects/productPage';

describe('Cart functionality: standard user', function () {
    beforeEach(function () {
        cy.visit("/");
        cy.fixture('testData').then(function (data) {
            this.data = data;
        });
    });
    it('Add to cart from the home page', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.firstProductName.click();
    });
    it('Add to cart from the product page page', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.firstProductName.click();
    });
    it('Remove product from the cart', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.firstProductName.click();
    });
    it('Checkout e2e', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.firstProductName.click();
    });
    it('Checkout with empty cart', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.firstProductName.click();
    });
});

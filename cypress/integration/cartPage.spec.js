import { loginPage } from '../support/pageObjects/loginPage';
import { homePage } from "../support/pageObjects/homePage";
import { productPage } from '../support/pageObjects/productPage';
import {cartPage} from "../support/pageObjects/cartPage";
import {checkoutPage} from "../support/pageObjects/checkoutPage";

before(function () {
    cy.fixture('testData').then(function (data){
        this.data = data;
    });
});
describe('Cart functionality: standard user', function () {
    beforeEach (function () {
        cy.visit("/");
        loginPage.login(this.data.standard, this.data.password);
    });
    it('Add random product from home page', function () {
        homePage.allAddToCartButtons.eq(Math.floor(Math.random() * 6)).click();
        homePage.shoppingCart.should('have.text', 1);
    });
    it('Add to cart from the product page page', function () {
        homePage.firstProductName.click();
        cy.contains("Add to cart").click();
        productPage.shoppingCart.should('have.text', 1);
    });
    it('Remove product from the cart', function () {
        homePage.addAndRemoveProduct();
        cartPage.cartQty.should('not.exist');
    });
    it('Added product is still in shopping cart after logging out', function () {
        homePage.firstProductName.click();
        cy.contains("Add to cart").click();
        homePage.logout();
        loginPage.login(this.data.standard, this.data.password);
        homePage.shoppingCart.should('have.text', 1)
    });
    it('Checkout e2e: happy path', function () {
        checkoutPage.addProductAndCheckout(this.data.firstName, this.data.lastName, this.data.zipcode);
        checkoutPage.thankYouForYourOrder.should('be.visible');
    });
    it('Checkout with empty cart', function () {
        checkoutPage.checkoutWithEmptyCart(this.data.firstName, this.data.lastName, this.data.zipcode);
        checkoutPage.thankYouForYourOrder.should('not.exist');
    });
});

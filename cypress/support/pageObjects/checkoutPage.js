import { homePage } from "./homePage";

export class CheckoutPage {
    get firstNameField () {
        return cy.get('#first-name');
    }
    get lastNameField () {
        return cy.get('#last-name');
    }
    get zipcodeField () {
        return cy.get('#postal-code');
    }
    get continueBtn () {
        return cy.get('#continue');
    }
    get thankYouForYourOrder () {
        return cy.get('h2.complete-header');
    }

    addProductAndCheckout (firstName, lastName, zipcode) {
        homePage.allAddToCartButtons.eq(Math.floor(Math.random() * 6)).click();
        homePage.shoppingCart.click();
        cy.contains("Checkout").click();
        this.firstNameField.type(firstName);
        this.lastNameField.type(lastName);
        this.zipcodeField.type(zipcode);
        this.continueBtn.click();
        cy.contains("Finish").click();
    }
    checkoutWithEmptyCart (firstName, lastName, zipcode) {
        homePage.shoppingCart.click();
        cy.contains("Checkout").click();
        this.firstNameField.type(firstName);
        this.lastNameField.type(lastName);
        this.zipcodeField.type(zipcode);
        this.continueBtn.click();
        cy.contains("Finish").click();
    }
}
export const checkoutPage = new CheckoutPage();

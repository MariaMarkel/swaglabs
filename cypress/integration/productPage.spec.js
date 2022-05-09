import { loginPage } from '../support/pageObjects/loginPage';
import { homePage } from "../support/pageObjects/homePage";
import { productPage } from '../support/pageObjects/productPage';

describe('Standard user is on Product page', function () {
    beforeEach(function () {
        cy.visit("/");
        cy.fixture('testData').then(function (data) {
            this.data = data;
        });
    });
    it('Verify the product title', function () {
        let homePageProductName;
        loginPage.login(this.data.standard, this.data.password);
        homePage.firstProductNameText.then((name) => {
            homePageProductName = name.text();
            homePage.firstProductName.click();
            productPage.productTitle.should((productName) => {
                expect(productName.text()).to.eq(homePageProductName);
            });
        });
    });
    it('Verify the product price', function () {
        let homePageProductPrice;
        loginPage.login(this.data.standard, this.data.password);
        homePage.firstProductNameText.then((name) => {
            //homePageProductName = name.text();
            homePage.firstProductName.click();
            productPage.productTitle.should((productName) => {
                expect(productName.text()).to.eq(homePageProductName);
            });
        });
    });
});

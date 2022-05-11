import { loginPage } from '../support/pageObjects/loginPage';
import { homePage } from "../support/pageObjects/homePage";

describe('Home page products: images', function () {
    let srcArray = [];
    let duplicateImages = [];
    beforeEach(function () {
        cy.visit("/");
        cy.fixture('testData').then(function (data) {
            this.data = data;
        });
    });
    it('Standard user home page: each product image is unique', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.allProductsImages.each((image) => {
            const scr = image.prop( 'src');  //using src property as it is unique for each image
            srcArray.push(scr);
        }).then((array) => {
            array = srcArray;
            duplicateImages = srcArray.filter(el => srcArray.indexOf(el) !== srcArray.lastIndexOf(el)); //looking for any duplicates
            cy.wrap(duplicateImages.length).should('eq', 0);  //no duplicate src = no duplicate images
        });
    });
    it('Problem user home page: each product image is unique', function () {
        duplicateImages = [];
        srcArray = [];
        loginPage.login(this.data.problem, this.data.password);
        homePage.allProductsImages.each((image) => {
            const scr = image.prop( 'src');
            srcArray.push(scr);
        }).then((array) => {
            array = srcArray;
            duplicateImages = srcArray.filter(el => srcArray.indexOf(el) !== srcArray.lastIndexOf(el));
            cy.wrap(duplicateImages.length).should('eq', 0);  // all 6 images are same = 6 duplicates found
        });
    });
    it('Performance glitch user home page: each product image is unique', function () {
        duplicateImages = [];
        srcArray = [];
        loginPage.login(this.data.glitchUser, this.data.password);
        homePage.allProductsImages.each((image) => {
            const scr = image.prop( 'src');
            srcArray.push(scr);
        }).then((array) => {
            array = srcArray;
            duplicateImages = srcArray.filter(el => srcArray.indexOf(el) !== srcArray.lastIndexOf(el));
            cy.wrap(duplicateImages.length).should('eq', 0);
        });
    });
});
describe('Home page: Standard user can sort products', function () {
    let productNames = [];
    let productPrices = [];
    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data;
        });
        cy.visit("/");
    });
    it('Sort by Name (A to Z)', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.productNames.each((name) => {
            productNames.push(name.text());
        });
        productNames = productNames.sort();  //product names are sorted A to Z
        homePage.sort(this.data.optionAZ);  //products on home page are sorted A to Z
        homePage.firstProductName.should((innerText) => {
            expect(innerText.text()).to.include(productNames[0]);
        });
    });
    it('Sort by Name (Z to A)', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.productNames.each((name) => {
            productNames.push(name.text());
        });
        productNames = productNames.sort().reverse();  //product names are sorted Z to A
        homePage.sort(this.data.optionZA);
        homePage.firstProductName.should((innerText) => {
            expect(innerText.text()).to.include(productNames[0]);
        });
    });
    it('Sort by Price (low to high)', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.productPrices.each((price) => {
            productPrices.push(price.text());
        }).then((array) => {
            array = productPrices;
            productPrices = productPrices.map(el=>el.slice(1)).sort((a,b)=>a-b); //sorted array of numbers -> lowest price to highest price
        });
        homePage.sort(this.data.optionLowHigh);
        homePage.firstProductPrice.should((innerText) => {
            expect(innerText.text()).to.include(productPrices[0]);
        });
    });
    it('Sort by Price (high to low)', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.productPrices.each((price) => {
            productPrices.push(price.text());
        }).then((array) => {
            array = productPrices;
            productPrices = productPrices.map(el=>el.slice(1)).sort((a,b)=>a-b).reverse();  //sorted array of numbers -> highest price to lowest price
        });
        homePage.sort(this.data.optionHighLow);
        homePage.firstProductPrice.should((innerText) => {
            expect(innerText.text()).to.include(productPrices[0]);
        });
    });
});
describe('Home page: Problem user can sort products', function () {
    let productNames = [];
    let productPrices = [];
    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data;
        });
        cy.visit("/");
    });
    it('Sort by Name (A to Z)', function () {
        loginPage.login(this.data.problem, this.data.password);
        homePage.productNames.each((name) => {
            productNames.push(name.text());
        });
        productNames = productNames.sort();
        homePage.sort(this.data.optionAZ);
        homePage.firstProductName.should((innerText) => {
            expect(innerText.text()).to.include(productNames[0]);
        });
    });
    it('Sort by Name (Z to A)', function () {
        loginPage.login(this.data.problem, this.data.password);
        homePage.productNames.each((name) => {
            productNames.push(name.text());
        });
        productNames = productNames.sort().reverse();
        homePage.sort(this.data.optionZA);
        homePage.firstProductName.should((innerText) => {
            expect(innerText.text()).to.include(productNames[0]);
        });
    });
    it('Sort by Price (low to high)', function () {
        loginPage.login(this.data.problem, this.data.password);
        homePage.productPrices.each((price) => {
            productPrices.push(price.text());
        }).then((array) => {
            array = productPrices;
            productPrices = productPrices.map(el => el.slice(1)).sort((a, b) => a - b);
        });
        homePage.sort(this.data.optionLowHigh);
        homePage.firstProductPrice.should((innerText) => {
            expect(innerText.text()).to.include(productPrices[0]);
        });
    });
    it('Sort by Price (high to low)', function () {
        loginPage.login(this.data.problem, this.data.password);
        homePage.productPrices.each((price) => {
            productPrices.push(price.text());
        }).then((array) => {
            array = productPrices;
            productPrices = productPrices.map(el => el.slice(1)).sort((a, b) => a - b).reverse();
        });
        homePage.sort(this.data.optionHighLow);
        homePage.firstProductPrice.should((innerText) => {
            expect(innerText.text()).to.include(productPrices[0]);
        });
    });
});
describe('Home page: Performance glitch user can sort products', function () {
    let productNames = [];
    let productPrices = [];
    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data;
        });
        cy.visit("/");
    });
    it('Sort by Name (A to Z)', function () {
        loginPage.login(this.data.glitchUser, this.data.password);
        homePage.productNames.each((name) => {
            productNames.push(name.text());
        });
        productNames = productNames.sort();
        homePage.sort(this.data.optionAZ);
        homePage.firstProductName.should((innerText) => {
            expect(innerText.text()).to.include(productNames[0]);
        });
    });
    it('Sort by Name (Z to A)', function () {
        loginPage.login(this.data.glitchUser, this.data.password);
        homePage.productNames.each((name) => {
            productNames.push(name.text());
        });
        productNames = productNames.sort().reverse();
        homePage.sort(this.data.optionZA);
        homePage.firstProductName.should((innerText) => {
            expect(innerText.text()).to.include(productNames[0]);
        });
    });
    it('Sort by Price (low to high)', function () {
        loginPage.login(this.data.glitchUser, this.data.password);
        homePage.productPrices.each((price) => {
            productPrices.push(price.text());
        }).then((array) => {
            array = productPrices;
            productPrices = productPrices.map(el => el.slice(1)).sort((a, b) => a - b);
        });
        homePage.sort(this.data.optionLowHigh);
        homePage.firstProductPrice.should((innerText) => {
            expect(innerText.text()).to.include(productPrices[0]);
        });
    });
    it('Sort by Price (high to low)', function () {
        loginPage.login(this.data.glitchUser, this.data.password);
        homePage.productPrices.each((price) => {
            productPrices.push(price.text());
        }).then((array) => {
            array = productPrices;
            productPrices = productPrices.map(el => el.slice(1)).sort((a, b) => a - b).reverse();
        });
        homePage.sort(this.data.optionHighLow);
        homePage.firstProductPrice.should((innerText) => {
            expect(innerText.text()).to.include(productPrices[0]);
        });
    });
});
describe('Home page: burger-menu options', function () {
    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data;
        });
        cy.visit("/");
    });
    it('Burger menu closes when ALL ITEMS clicked', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.burgerMenu.click();
        homePage.allItemsOption.click();
        homePage.closeBurgerMenu.should('not.be.visible');
        });
    it('Burger menu closes when ABOUT clicked', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.burgerMenu.click();
        homePage.aboutOption.click();
        homePage.closeBurgerMenu.should('not.exist');
    });
    it('Burger menu closes when RESET APP STATE clicked', function () {
        loginPage.login(this.data.standard, this.data.password);
        homePage.burgerMenu.click();
        homePage.resetAppStateOption.click();
        homePage.closeBurgerMenu.should('not.be.visible');
    });
});
describe('Home page: social network links', function () {
    before(function () {
        cy.visit("/");
        cy.fixture('testData').then(function (data) {
            this.data = data;
            loginPage.login(this.data.standard, this.data.password);
        });
    });
    it('Twitter/Facebook//Linkedin links redirect to sauce labs corresponding pages', function () {
        homePage.twitterLink.then((link) => {
            expect(link.attr('href')).to.contain(this.data.twitterUrl);
        });
        homePage.facebookLink.then((link) => {
            expect(link.attr('href')).to.contain(this.data.facebookUrl);
        });
        homePage.linkedinLink.then((link) => {
            expect(link.attr('href')).to.contain(this.data.linkedinUrl);
        });
    });
});

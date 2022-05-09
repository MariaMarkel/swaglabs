export class HomePage {
    get productTitle () {
        return cy.get('.title');
    }
    get allProductsImages () {
        return cy.get('.inventory_item_img>a>img');
    }
    get sortDropdown () {
        return cy.get('.product_sort_container');
    }
    get productNames () {
        return cy.get('.inventory_item_name');
    }
    get productPrices () {
        return cy.get('.inventory_item_price');
    }
    get firstProductName () {
        return cy.get('.inventory_list>div:nth-child(1)>div>div.inventory_item_label>a>div');
    }
    get firstProductNameText () {
        return cy.get('.inventory_list>div:nth-child(1)>div>div.inventory_item_label>a>div.inventory_item_name');
    }
    get firstProductPrice () {
        return cy.get('.inventory_list>div:nth-child(1)>div>div.pricebar>div');
    }
    get burgerMenu () {
        return cy.get('#react-burger-menu-btn');
    }
    get allItemsOption () {
        return cy.get('#inventory_sidebar_link');
    }
    get resetAppStateOption () {
        return cy.get('#reset_sidebar_link');
    }
    get aboutOption () {
        return cy.get('#about_sidebar_link');
    }
    get closeBurgerMenu () {
        return cy.get('#react-burger-cross-btn');
    }
    get allAddToCartButtons () {
        return cy.get('.inventory_item>div>div>button');
    }
    get shoppingCart () {
        return cy.get('.shopping_cart_link');
    }
    get logoutOption () {
        return cy.get('#logout_sidebar_link');
    }
    get twitterLink () {
        return cy.get('li.social_twitter>a');
    }
    get facebookLink () {
        return cy.get('li.social_facebook>a');
    }
    get linkedinLink () {
        return cy.get('li.social_linkedin>a');
    }

    sort (option) {
        this.sortDropdown.select(option);
    }
    emptyShoppingCart () {
        this.shoppingCart.click();
        cy.contains("Remove").click();
    }
    addAndRemoveProduct () {
        this.firstProductName.click();
        cy.contains("Add to cart").click();
        this.shoppingCart.click();
        cy.contains("Remove").click();
    }
    logout () {
        this.burgerMenu.click();
        this.logoutOption.click();
    }
}
export const homePage = new HomePage();

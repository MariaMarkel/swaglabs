export class ProductPage {
    get productTitle () {
        return cy.get('.inventory_details_name.large_size');
    }
    get productPrice () {
        return cy.get('.inventory_details_price');
    }
    get productImage () {
        return cy.get('img.inventory_details_img');
    }
    get addToCart () {
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }
    get backButton () {
        cy.get('#back-to-products');
    }
    get shoppingCart () {
        return cy.get('.shopping_cart_badge');
    }
}
export const productPage = new ProductPage();

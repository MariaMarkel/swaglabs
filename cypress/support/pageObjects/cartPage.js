export class CartPage {
    get productTitle () {
        return cy.get('.inventory_details_name.large_size');
    }
    get productPrice () {
        return cy.get('.inventory_details_price');
    }
    get cartQty () {
        return cy.get('.cart_quantity');
    }
}
export const cartPage = new CartPage();

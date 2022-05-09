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

    sort (option) {
        this.sortDropdown.select(option);
    }

}
export const homePage = new HomePage();

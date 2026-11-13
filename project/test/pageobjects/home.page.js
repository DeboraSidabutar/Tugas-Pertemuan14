export class HomePage {
    get productsTitle() {
        return 'android=new UiSelector().text("PRODUCTS")'
    }

    get burgerMenu() {
        return 'android=new UiSelector().description("test-Menu")'
    }

    get logoutButton() {
        return 'android=new UiSelector().description("test-LOGOUT")'
    }

    get filterButton() {
        return 'android=new UiSelector().description("test-Modal Selector Button")'
    }

    get productNames() {
        return 'android=new UiSelector().description("test-Item title")'
    }

    get productPrices() {
        return 'android=new UiSelector().description("test-Price")'
    }

    // Locator > 1 -> function dengan parameter index
    addToCartButton(index = 0) {
        return `android=new UiSelector().description("test-ADD TO CART").instance(${index})`
    }

    removeButton(index = 0) {
        return `android=new UiSelector().description("test-REMOVE").instance(${index})`
    }

    sortOption(text) {
        return `android=new UiSelector().text("${text}")`
    }
}

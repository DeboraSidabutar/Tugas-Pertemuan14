import { HomePage } from '../pageobjects/home.page.js'

const homePage = new HomePage()

export class HomeAction {
    async waitForHomePage() {
        await $(homePage.productsTitle).waitForDisplayed({ timeout: 10000 })
    }

    async isHomePageDisplayed() {
        return await $(homePage.productsTitle).isDisplayed()
    }

    async openBurgerMenu() {
        await $(homePage.burgerMenu).click()
    }

    async logout() {
        await $(homePage.logoutButton).waitForDisplayed({ timeout: 5000 })
        await $(homePage.logoutButton).click()
    }

    async addToCart(index = 0) {
        await $(homePage.addToCartButton(index)).click()
    }

    async removeFromCart(index = 0) {
        await $(homePage.removeButton(index)).click()
    }

    async isRemoveButtonDisplayed(index = 0) {
        return await $(homePage.removeButton(index)).isDisplayed()
    }

    async sortBy(optionText) {
        await $(homePage.filterButton).click()
        await $(homePage.sortOption(optionText)).waitForDisplayed({ timeout: 5000 })
        await $(homePage.sortOption(optionText)).click()
    }

    // Nama produk yang terlihat di layar
    async getProductNames() {
        const elements = await $$(homePage.productNames)
        const names = []
        for (const el of elements) names.push(await el.getText())
        return names
    }

    // Harga produk yang terlihat di layar (dalam angka)
    async getProductPrices() {
        const elements = await $$(homePage.productPrices)
        const prices = []
        for (const el of elements) {
            prices.push(parseFloat((await el.getText()).replace('$', '')))
        }
        return prices
    }
}

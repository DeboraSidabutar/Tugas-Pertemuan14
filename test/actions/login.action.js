import { LoginPage } from '../pageobjects/login.page.js'

const loginPage = new LoginPage()

export class LoginAction {
    async waitForLoginPage() {
        await $(loginPage.loginButton).waitForDisplayed({ timeout: 10000 })
    }

    async inputUsername(value) {
        await $(loginPage.usernameInput).setValue(value)
    }

    async inputPassword(value) {
        await $(loginPage.passwordInput).setValue(value)
    }

    async clickLogin() {
        await $(loginPage.loginButton).click()
    }

    async login({ username, password }) {
        await this.waitForLoginPage()
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLogin()
    }

    async waitForProductsPage() {
        await $(loginPage.productsTitle).waitForDisplayed({ timeout: 10000 })
    }

    async isProductsPageDisplayed() {
        return await $(loginPage.productsTitle).isDisplayed()
    }

    async waitForErrorMessage(message) {
        await $(loginPage.errorText(message)).waitForDisplayed({ timeout: 5000 })
    }

    async isErrorMessageDisplayed(message) {
        return await $(loginPage.errorText(message)).isDisplayed()
    }

    async isLoginPageDisplayed() {
        return await $(loginPage.loginButton).isDisplayed()
    }
}

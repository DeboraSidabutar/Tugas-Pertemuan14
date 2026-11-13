import { expect } from '@wdio/globals'
import fs from 'fs'
import { LoginAction } from '../actions/login.action.js'
import { HomeAction } from '../actions/home.action.js'
import appHelper from '../../utils/app.helper.js'
import credentials from '../test_data/credentials.js'
import { messages, sortOptions } from '../test_data/messages.js'

const loginAction = new LoginAction()
const homeAction = new HomeAction()

describe('Swag Labs App', () => {
    before(() => {
        fs.mkdirSync('./reports/screenshots', { recursive: true })
    })

    // Setiap test mulai dari kondisi aplikasi yang bersih
    beforeEach(async () => {
        await appHelper.reset()
    })

    // Screenshot otomatis jika test gagal
    afterEach(async function () {
        if (this.currentTest?.state === 'failed') {
            const name = this.currentTest.title.replace(/[^a-z0-9]+/gi, '_')
            await driver.saveScreenshot(`./reports/screenshots/${name}.png`)
        }
    })

    after(async () => {
        await appHelper.close()
    })

    it('should login successfully with standard user', async () => {
        await loginAction.login(credentials.standard_user)
        await loginAction.waitForProductsPage()
        expect(await loginAction.isProductsPageDisplayed()).toBe(true)
    })

    it('should fail login with invalid credentials', async () => {
        await loginAction.login(credentials.invalid_user)
        await loginAction.waitForErrorMessage(messages.invalidLogin)
        expect(await loginAction.isErrorMessageDisplayed(messages.invalidLogin)).toBe(true)
    })

    it('should fail login with locked out user', async () => {
        await loginAction.login(credentials.locked_user)
        await loginAction.waitForErrorMessage(messages.lockedLogin)
        expect(await loginAction.isErrorMessageDisplayed(messages.lockedLogin)).toBe(true)
    })

    it('should sort products by name (Z to A)', async () => {
        await loginAction.login(credentials.standard_user)
        await homeAction.waitForHomePage()

        await homeAction.sortBy(sortOptions.nameDesc)
        const names = await homeAction.getProductNames()
        const expected = [...names].sort().reverse()
        expect(names).toEqual(expected)
    })

    it('should sort products by price (low to high)', async () => {
        await loginAction.login(credentials.standard_user)
        await homeAction.waitForHomePage()

        await homeAction.sortBy(sortOptions.priceLow)
        const prices = await homeAction.getProductPrices()
        const expected = [...prices].sort((a, b) => a - b)
        expect(prices).toEqual(expected)
    })

    it('should add and remove product from cart', async () => {
        await loginAction.login(credentials.standard_user)
        await homeAction.waitForHomePage()

        await homeAction.addToCart(0)
        expect(await homeAction.isRemoveButtonDisplayed(0)).toBe(true)
        await homeAction.removeFromCart(0)
    })

    it('should logout successfully', async () => {
        await loginAction.login(credentials.standard_user)
        await homeAction.waitForHomePage()

        await homeAction.openBurgerMenu()
        await homeAction.logout()
        await loginAction.waitForLoginPage()
        expect(await loginAction.isLoginPageDisplayed()).toBe(true)
    })
})

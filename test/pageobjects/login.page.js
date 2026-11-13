export class LoginPage {
    get usernameInput() {
        return 'android=new UiSelector().description("test-Username")'
    }

    get passwordInput() {
        return 'android=new UiSelector().description("test-Password")'
    }

    get loginButton() {
        return 'android=new UiSelector().text("LOGIN")'
    }

    get productsTitle() {
        return 'android=new UiSelector().text("PRODUCTS")'
    }

    errorText(message) {
        return `android=new UiSelector().text("${message}")`
    }
}

import BasePage from "./BasePage";
import { LoginPageLocator } from "../locators/LoginPageLocator.js";

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.locator = LoginPageLocator(page);
    }

    // Verify Login Page
    async isLoginPageDisplayed() {
        return await this.isVisible(this.locator.loginHeading);
    }

    // Login
    async login(email, password) {

        await this.fill(this.locator.loginEmail, email);

        await this.fill(this.locator.loginPassword, password);

        await this.click(this.locator.loginButton);
    }

}
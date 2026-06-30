import BasePage from "./BasePage.js";
import { HomePageLocator } from "../locators/HomePageLocator.js";

export default class HomePage extends BasePage {

    constructor(page) {
        super(page);

        this.locator = HomePageLocator(page);
    }

    // Navigate to Home Page
    async openApplication() {
        await this.navigate("/");
    }

    // Verify Home Page
    async isHomePageDisplayed() {
        return await this.isVisible(this.locator.homeLogo);
    }

    // Navigation Methods
    async clickSignupLogin() {
        await this.click(this.locator.signupLoginBtn);
    }

    async clickProducts() {
        await this.click(this.locator.productsBtn);
    }

    async clickCart() {
        await this.click(this.locator.cartBtn);
    }

    async clickContactUs() {
        await this.click(this.locator.contactUsBtn);
    }

    // Verify Logged In User
    async isUserLoggedIn() {
        return await this.isVisible(this.locator.loggedInUser);
    }

}
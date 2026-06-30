import BasePage from "./BasePage.js";
import { RegisterPageLocator } from "../locators/RegisterPageLocator.js";

export default class RegisterPage extends BasePage {

    constructor(page) {
        super(page);

        this.locator = RegisterPageLocator(page);
    }

    // Signup
    async enterSignupDetails(name, email) {

        await this.fill(this.locator.signupName, name);
        await this.fill(this.locator.signupEmail, email);
        await this.click(this.locator.signupButton);

    }

    // Create Account
    async createAccount(user) {

        await this.click(this.locator.titleMr);

        await this.fill(this.locator.password, user.password);

        await this.locator.day.selectOption("12");
        await this.locator.month.selectOption("1");
        await this.locator.year.selectOption("2021");

        await this.fill(this.locator.firstName, user.firstName);
        await this.fill(this.locator.lastName, user.lastName);
        await this.fill(this.locator.company, user.company);
        await this.fill(this.locator.address, user.address);

        await this.locator.country.selectOption(user.country);

        await this.fill(this.locator.state, user.state);
        await this.fill(this.locator.city, user.city);
        await this.fill(this.locator.zipcode, user.zipcode);
        await this.fill(this.locator.mobileNumber, user.mobileNumber);

        await this.click(this.locator.createAccountBtn);

    }

    // Verify Account Created
    async isAccountCreated() {
        return await this.isVisible(this.locator.accountCreatedMsg);
    }

    // Continue
    async clickContinue() {
        await this.click(this.locator.continueBtn);
    }

}
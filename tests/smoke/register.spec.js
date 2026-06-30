import { test, expect } from "@playwright/test";
import HomePage from "../../pages/HomePage.js";
import RegisterPage from "../../pages/RegisterPage.js";
import registerData from "../../test-data/registerData.json" assert { type: "json" };
import { generateRandomEmail } from "../../utils/emailGenerator.js";

test.describe("Register Tests", () => {

    test("Register New User", async ({ page }) => {

        const homePage = new HomePage(page);
        const registerPage = new RegisterPage(page);

        // Open Application
        await homePage.openApplication();

        // Open Signup/Login
        await homePage.clickSignupLogin();

        // Generate Random Email
        const email = generateRandomEmail();

        // Enter Signup Details
        await registerPage.enterSignupDetails(
            registerData.user.name,
            email
        );

        // Create Account
        await registerPage.createAccount(registerData.user);

        // Verify Account Created
        await expect(await registerPage.isAccountCreated()).toBeTruthy();

        // Click Continue
        await registerPage.clickContinue();

        // Verify User Logged In
        await expect(await homePage.isUserLoggedIn()).toBeTruthy();

    });

});
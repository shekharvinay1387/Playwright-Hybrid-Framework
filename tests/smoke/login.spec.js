import { test, expect } from "@playwright/test";
import HomePage from "../../pages/HomePage.js";
import LoginPage from "../../pages/LoginPage.js";
import loginData from "../../test-data/loginData.json" assert { type: "json" };

test.describe("Login Tests", () => {

    test("Login with valid credentials", async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.openApplication();

        await homePage.clickSignupLogin();

        await expect(loginPage.isLoginPageDisplayed()).resolves.toBeTruthy();

        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

    });

});
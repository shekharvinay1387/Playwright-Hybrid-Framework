import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage.js';

test.describe('Home Page Tests', () => {

    test('Verify Home Page Loads Successfully', async ({ page }) => {

        const homePage = new HomePage(page);

        // Open Application
        await homePage.openApplication();

        // Verify Home Page
        await expect(await homePage.isHomePageDisplayed()).toBeTruthy();

        // Verify Title
        await expect(page).toHaveTitle(/Automation Exercise/);

    });

});
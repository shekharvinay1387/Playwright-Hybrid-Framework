// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from "./config/config.js";

export default defineConfig({

  // Test folder
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail build if test.only is committed in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Number of workers in CI
  workers: process.env.CI ? 1 : undefined,

  // HTML Report
  reporter: 'html',

  // Common settings
  use: {

    // Application URL
    baseURL: config.baseURL,

    // Open browser in headed mode
    headless: false,

    // Capture screenshot only when test fails
    screenshot: 'only-on-failure',

    // Save video only for failed tests
    video: 'retain-on-failure',

    // Save trace on first retry
    trace: 'on-first-retry',
  },

  // Browser
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
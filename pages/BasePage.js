export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url = "/") {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async getCurrentURL() {
    return this.page.url();
  }

  async reloadPage() {
    await this.page.reload();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }

  // Click on element
async click(locator) {
    await this.page.locator(locator).click();
}

// Enter text
async fill(locator, value) {
    await this.page.locator(locator).fill(value);
}

// Get text
async getText(locator) {
    return await this.page.locator(locator).textContent();
}

// Check visibility
async isVisible(locator) {
    return await this.page.locator(locator).isVisible();
}

// Wait for element
async waitForElement(locator) {
    await this.page.locator(locator).waitFor();
}
}
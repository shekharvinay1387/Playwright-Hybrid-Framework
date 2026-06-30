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

    // Click
    async click(locator) {
        await locator.click();
    }

    // Fill
    async fill(locator, value) {
        await locator.fill(value);
    }

    // Get Text
    async getText(locator) {
        return await locator.textContent();
    }

    // Is Visible
    async isVisible(locator) {
        return await locator.isVisible();
    }

    // Wait
    async waitForElement(locator) {
        await locator.waitFor();
    }

}
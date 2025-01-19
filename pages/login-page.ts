import { Page, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;

    // Selectors
    private usernameInput = "#user-name";
    private passwordInput = "#password";
    private loginBtn = "#login-button";
    private errorMsg = "[data-test='error']";

    constructor(page: Page) {
        this.page = page;
    }

    // Method to navigate to the login page
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Method to input username
    async enterUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
    }

    // Method to input password
    async enterPassword(password: string): Promise<void> {
        await this.page.fill(this.passwordInput, password);
    }

    // Method to click the login button
    async clickLoginButton(): Promise<void> {
        await this.page.click(this.loginBtn);
    }

    // Method to get the error message
    async getErrorMessage(): Promise<string> {
        return (await this.page.textContent(this.errorMsg)) ?? '';
    }

    // Method to login with provided credentials
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    // Method to verify if login was successful (adjust selector as needed)
    async isLoginSuccessful(successIndicatorSelector: string): Promise<boolean> {
        return await this.page.isVisible(successIndicatorSelector);
    }

    // Method to verify if the error message is visible
    async isErrorVisible(): Promise<boolean> {
        return await this.page.isVisible(this.errorMsg);
    }
}

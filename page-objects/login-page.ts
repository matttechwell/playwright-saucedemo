import { Page } from '@playwright/test';

export default class LoginPage {
  private page: Page;

  // Locators
  private usernameInput = 'input[data-test="username"]';
  private passwordInput = 'input[data-test="password"]';
  private loginButton = 'input[id="login-button"]';
  private errorMessage = 'h3[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the login page
  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  // Perform login action
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Get error message text
  async getErrorMessage() {
    return this.page.textContent(this.errorMessage);
  }
}

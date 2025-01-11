import { Page } from '@playwright/test';
import { selectors } from '../variables/selectors';
import { credentials } from '../variables/credentials';

export const login = async (
  page: Page,
  username: string,
  password: string
): Promise<void> => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill(selectors.loginPage.usernameInput, username);
  await page.fill(selectors.loginPage.passwordInput, password);
  await page.click(selectors.loginPage.loginButton);
};

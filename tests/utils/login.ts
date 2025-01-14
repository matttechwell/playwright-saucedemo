import { Page } from '@playwright/test';
import { selectors } from '../../page-objects/selectors';
import { credentials } from '../fixtures/credentials';

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

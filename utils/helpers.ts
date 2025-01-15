import { Page } from '@playwright/test';
import LoginPage from '@page-objects/login-page';
import { credentials } from '../fixtures/credentials';

export const loginWithStandardUser = async (page: Page) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
};

import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '@pages/login-page';
import { URLs } from '@utils/constants';
import * as fs from 'fs';

const authFile = 'auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate and log in
  await loginPage.navigateTo(URLs.sauceDemo);
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify successful login
  const isSuccess = await loginPage.isLoginSuccessful('#inventory_container');
  expect(isSuccess).toBeTruthy();

  // Save authentication state
  await page.context().storageState({ path: authFile });
});

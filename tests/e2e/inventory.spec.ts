import { test, expect } from '@playwright/test';
import LoginPage from '@page-objects/login-page';
import { credentials } from '@fixtures/credentials';
import { URLs } from '@constants/urls';

test.describe('Inventory Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);

  });

  test('Test 1', async ({ page }) => {
    await expect(page).toHaveURL(`${URLs.baseUrl}/inventory.html`);
  });

  test('Test 2', async ({ page }) => {
    await expect(page).toHaveURL(`${URLs.baseUrl}/inventory.html`);
  });

});
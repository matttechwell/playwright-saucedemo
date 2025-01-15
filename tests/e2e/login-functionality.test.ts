import { test, expect } from '@playwright/test';
import LoginPage from '@page-objects/login-page';
import { credentials, errorMsg } from '@fixtures/credentials';
import { URLs } from '@constants/urls';

test.describe('Login Page Tests', () => {
  // Standard user test
  test('should successfully login with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);

    await expect(page).toHaveURL(`${URLs.baseUrl}/inventory.html`);
  });

  // Locked out user test
  test('should show error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(credentials.lockedOutUser.username, credentials.lockedOutUser.password);

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(errorMsg.lockedOutUser);
  });

  // Invalid user test
  test('should show error for wrong username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('wrong_username', 'wrong_password');

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(errorMsg.invalidUser);
  });

});

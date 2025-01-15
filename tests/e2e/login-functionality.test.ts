import { test, expect } from '@playwright/test';
import LoginPage from '@page-objects/login-page';
import { credentials } from '@fixtures/credentials';
import { URLs } from '@constants/urls';

test.describe('Login Page Tests', () => {
  test('should successfully login with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);

    // Verify successful login by checking redirection to inventory page
    await expect(page).toHaveURL(`${URLs.baseUrl}/inventory.html`);
  });

  test('should show error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(credentials.lockedOutUser.username, credentials.lockedOutUser.password);

    // Verify error message
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Sorry, this user has been locked out.');
  });
});

import { test, expect } from '@playwright/test';
import { credentials, errorMessages } from './variables/credentials';
import { urls } from './variables/urls';
import { selectors } from './variables/selectors';
import { login } from './utils/login';

test.describe('Login functionality tests', () => {
  test('Successful login with standard user', async ({ page }) => {
    await login(page, credentials.standardUser.username, credentials.standardUser.password);

    // Validate successful login
    await expect(page).toHaveURL(urls.inventoryPage);
    await expect(page.locator(selectors.inventoryPage.inventoryList)).toBeVisible();
  });

  test('Login attempt with locked out user', async ({ page }) => {
    await login(page, credentials.lockedOutUser.username, credentials.lockedOutUser.password);

    // Validate error message
    const errorMessage = await page.locator(selectors.loginPage.errorMessage);
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(errorMessages.lockedOut);
  });

  test('Login attempt with incorrect username', async ({ page }) => {
    await login(page, credentials.incorrectUsername, credentials.standardUser.password);

    // Validate error message
    const errorMessage = await page.locator(selectors.loginPage.errorMessage);
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(errorMessages.incorrectCredentials);
  });

  test('Login attempt with incorrect password', async ({ page }) => {
    await login(page, credentials.standardUser.username, credentials.incorrectPassword);

    // Validate error message
    const errorMessage = await page.locator(selectors.loginPage.errorMessage);
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(errorMessages.incorrectCredentials);
  });

  test('Empty login fields', async ({ page }) => {
    await page.goto(urls.loginPage);
    await page.click(selectors.loginPage.loginButton);

    // Validate error message
    const errorMessage = await page.locator(selectors.loginPage.errorMessage);
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(errorMessages.usernameRequired);
  });
});

import { test, expect } from '@playwright/test';

test.describe('Login functionality tests', () => {

  test('Successful login with standard user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');

    // Fill in username and password fields
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');

    // Click on login button
    await page.click('input[id="login-button"]');

    // Validate successful login by checking for a specific element on the landing page
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Login attempt with locked out user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');

    // Fill in username and password fields
    await page.fill('input[data-test="username"]', 'locked_out_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');

    // Click on login button
    await page.click('input[id="login-button"]');

    // Validate error message
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Sorry, this user has been locked out.');
  });

  test('Login attempt with incorrect password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');

    // Fill in username and incorrect password
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'wrong_password');

    // Click on login button
    await page.click('input[id="login-button"]');

    // Validate error message
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match');
  });

  test('Empty login fields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');

    // Click on login button without entering credentials
    await page.click('input[id="login-button"]');

    // Validate error message
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username is required');
  });

});

import { test, expect } from '@playwright/test';
import { InventoryPage } from '@pages/inventory-page';
import { LoginPage } from '@pages/login-page';
import { URLs } from '@utils/constants';
import * as creds from '@data/credentials.json';
import * as fs from 'fs';

const authFile = 'auth/user.json';

test.describe('Inventory Page Tests', () => {
  test.beforeEach(async ({ context, page }) => {
    if (fs.existsSync(authFile)) {
      // Log usage of stored authentication state
      console.log('Using stored authentication from:', authFile);

      // Load the stored authentication state
      await context.addCookies(JSON.parse(fs.readFileSync(authFile, 'utf-8')).cookies);
    } else {
      // Log usage of credentials file
      console.log('Stored auth not found. Logging in using credentials from data/credentials.json');

      // Perform login and save auth state
      const loginPage = new LoginPage(page);
      await loginPage.navigateTo(URLs.getFullPath(URLs.paths.login));
      await loginPage.login(creds.users.standard_user, creds.password);

      // Save the authentication state after logging in
      await context.storageState({ path: authFile });

      console.log('Authentication state saved to:', authFile);
    }
  });

  test('Verify products are listed on the inventory page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    // Navigate directly to the inventory page
    await page.goto(URLs.getFullPath(URLs.paths.inventory));
    const isProductListVisible = await inventoryPage.isProductListVisible();
    expect(isProductListVisible).toBeTruthy();
  });

  test('Add an item to the cart and verify', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    // Navigate directly to the inventory page
    await page.goto(URLs.getFullPath(URLs.paths.inventory));

    // Add item to the cart
    await inventoryPage.addItemToCart('sauce-labs-backpack');

    // Open cart and verify
    await inventoryPage.openCart();
    const cartUrl = page.url();
    expect(cartUrl).toContain(URLs.getFullPath(URLs.paths.cart));
  });

  test('Logout from the inventory page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    // Navigate directly to the inventory page
    await page.goto(URLs.getFullPath(URLs.paths.inventory));

    // Logout
    await inventoryPage.openMenu();
    await inventoryPage.logout();

    // Verify redirection to login page
    const loginUrl = page.url();
    expect(loginUrl).toBe(URLs.sauceDemo);
  });  
});

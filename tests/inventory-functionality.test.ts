import { test, expect } from '@playwright/test';
import { credentials } from './variables/credentials';
import { urls } from './variables/urls';
import { selectors } from './variables/selectors';
import { login } from './utils/login';
import { addItemToCart, getCartItemCount, sortProducts, logout } from './utils/inventory';

test.describe('Inventory functionality tests', () => {
  test.beforeEach(async ({ page }) => {
    // Perform login before each test
    await login(page, credentials.standardUser.username, credentials.standardUser.password);

    // Validate successful login
    await expect(page).toHaveURL(urls.inventoryPage);
    await expect(page.locator(selectors.inventoryPage.inventoryList)).toBeVisible();
  });

  test('Add a product to the cart', async ({ page }) => {
    // Add the first product to the cart
    await addItemToCart(page, 0);

    // Verify that the cart icon shows 1 item
    const cartCount = await getCartItemCount(page);
    expect(cartCount).toBe(1);

    // Verify cart contents
    await page.click(selectors.inventoryPage.cartLink);
    const cartItem = page.locator('.cart_item');
    await expect(cartItem).toHaveCount(1);
  });

  test('Sort products by price (low to high)', async ({ page }) => {
    // Select the "Price (low to high)" sorting option
    await sortProducts(page, 'lohi');

    // Validate that the products are sorted by price in ascending order
    const prices = await page.locator(selectors.inventoryPage.productPrices).allTextContents();
    const numericPrices = prices.map((price) => parseFloat(price.replace('$', '')));
    const sortedPrices = [...numericPrices].sort((a, b) => a - b);

    expect(numericPrices).toEqual(sortedPrices);
  });

  test('Logout from the inventory page', async ({ page }) => {
    // Perform logout
    await logout(page);

    // Validate that the user is redirected to the login page
    await expect(page).toHaveURL(urls.loginPage);
  });
});

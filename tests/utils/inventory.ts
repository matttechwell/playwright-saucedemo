import { Page } from '@playwright/test';
import { selectors } from '../variables/selectors';

export const addItemToCart = async (page: Page, itemIndex: number): Promise<void> => {
  const productAddToCartButton = page.locator(selectors.inventoryPage.productAddToCartButton).nth(itemIndex);
  await productAddToCartButton.click();
};

export const getCartItemCount = async (page: Page): Promise<number> => {
  const cartBadge = page.locator(selectors.inventoryPage.cartBadge);
  const cartCount = await cartBadge.textContent();
  return cartCount ? parseInt(cartCount, 10) : 0;
};

export const sortProducts = async (page: Page, sortOption: string): Promise<void> => {
  const sortDropdown = page.locator(selectors.inventoryPage.sortDropdown);
  await sortDropdown.selectOption(sortOption);
};

export const logout = async (page: Page): Promise<void> => {
  await page.click(selectors.menu.burgerButton);
  await page.click(selectors.menu.logoutLink);
};

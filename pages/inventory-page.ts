import { Page } from '@playwright/test';

export class InventoryPage {
  private page: Page;

  // Selectors
  private menuButton = '#react-burger-menu-btn';
  private logoutButton = '#logout_sidebar_link';
  private productList = '[data-test="inventory-item"]';
  private cartButton = '[data-test="shopping-cart-link"]';
  private addToCartButton = (itemName: string) => `[data-test="add-to-cart-${itemName}"]`;

  constructor(page: Page) {
    this.page = page;
  }

  // Open the side menu
  async openMenu(): Promise<void> {
    await this.page.click(this.menuButton);
  }

  // Logout from the application
  async logout(): Promise<void> {
    await this.page.click(this.logoutButton);
  }

  // Add a specific product to the cart
  async addItemToCart(itemName: string): Promise<void> {
    const buttonSelector = this.addToCartButton(itemName);
    await this.page.click(buttonSelector);
  }

  // Check the cart for added items
  async openCart(): Promise<void> {
    await this.page.click(this.cartButton);
  }

  // Verify the product list is visible
  async isProductListVisible(): Promise<boolean> {
    return this.page.isVisible(this.productList);
  }
}

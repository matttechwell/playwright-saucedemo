export const selectors = {
    loginPage: {
      usernameInput: 'input[data-test="username"]',
      passwordInput: 'input[data-test="password"]',
      loginButton: 'input[id="login-button"]',
      errorMessage: 'h3[data-test="error"]',
    },
    inventoryPage: {
      inventoryList: '.inventory_list',
      productAddToCartButton: 'button.btn_inventory',
      cartBadge: '.shopping_cart_badge',
      cartLink: '.shopping_cart_link',
      productPrices: '.inventory_item_price',
      sortDropdown: '.product_sort_container',
    },
    menu: {
      burgerButton: '.bm-burger-button',
      logoutLink: '#logout_sidebar_link',
    },
  };
  
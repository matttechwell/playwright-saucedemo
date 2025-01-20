export const URLs = {
  sauceDemo: 'https://www.saucedemo.com/',

  // Paths relative to the base URL
  paths: {
    login: '',
    inventory: 'inventory.html',
    cart: 'cart.html',
    checkout: 'checkout-step-one.html',
    about: 'https://saucelabs.com/', // External URL
  },

  // Helper function to construct full URLs
  getFullPath(path: string): string {
    return `${this.sauceDemo}${path}`;
  },
};

export const Items = {
  backpack: 'sauce-labs-backpack',
  bikeLight: 'sauce-labs-bike-light',
};

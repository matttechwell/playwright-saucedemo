export const URLs = {
  baseUrl: 'https://www.saucedemo.com',
};

export const expandtestingUrls = {
  baseUrl: process.env.BASE_URL || 'https://practice.expandtesting.com/notes/api',
  endpoints: {
    healthCheck: '/health-check',
    notes: '/notes',
    users: '/users',
  },
};

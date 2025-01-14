const { test, expect } = require('@playwright/test');

test.describe('API Tests for Login Page', () => {
  const baseURL = 'https://www.saucedemo.com/v1/';

  test('Validate Login Page Response', async ({ request }) => {
    const response = await request.get(baseURL);

    // Validate status code
    expect(response.status()).toBe(200);

    // Validate Content-Type header
    expect(response.headers()['content-type']).toContain('text/html');

    // Validate specific content in the response
    const responseBody = await response.text();
    expect(responseBody).toContain('<title>Swag Labs</title>');
    expect(responseBody).toContain('standard_user');
    expect(responseBody).toContain('secret_sauce');
    expect(responseBody).toContain('id="login_button_container"');
  });
});

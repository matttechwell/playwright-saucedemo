import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '../tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: '../report/html' }],
    ['list'],
    ['json', { outputFile: '../report/results.json' }],
    ['junit', { outputFile: '../report/results.xml' }],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'on',
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment these for Firefox and Safari
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});

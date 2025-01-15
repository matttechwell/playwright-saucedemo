import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '../tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 1 : 4,
  reporter: [
    ['html', { outputFolder: '../reports/html-report', open: 'never' }],
    ['json', { outputFile: '../reports/report.json' }],
    ['junit', { outputFile: '../reports/junit-results.xml' }]
  ],
  use: {
    trace: 'on-first-retry',
    headless: false,

  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

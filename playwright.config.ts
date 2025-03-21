import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'https://nordvpn.com',
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 15000,
    navigationTimeout: 15000,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  },
  workers: 3,
  retries: 0,
  reporter: 'html',
  projects: [
    {
      name: 'Chrome',
      use: {
        channel: 'chrome',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
      },
    },
  ],
};
export default config;

import {defineConfig, devices} from '@playwright/test'

export default defineConfig({
  timeout: 180000,
  expect: {
    timeout: 15000,
  },
  workers: 4,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-report', open: 'on-failure' }],
  ],
  use: {
    baseURL: 'https://www.spinberry.com/#products/',
    headless: true,
    actionTimeout: 15000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: {
      mode: 'retain-on-failure',
      size: { width: 1920, height: 1080 },
    },
    viewport: { width: 1920, height: 1080 }
  },

  projects: [
    {
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    // {
    //   name: 'mobile-chrome',
    //   use: {
    //     ...devices['Pixel 5']
    //   }
    // }
  ]
})

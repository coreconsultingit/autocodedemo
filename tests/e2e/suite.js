const { test } = require('playwright');

test('Navigate to homepage', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('h1');
  await expect(page.title()).resolves.toMatch('My App');
});

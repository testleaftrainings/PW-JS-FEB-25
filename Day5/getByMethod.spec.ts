import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/inventory.html');
  await page.getByText('$29.99').click();
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
});


/* 'link' — The ARIA role for anchor (<a>) tags. Playwright identifies this as a link.
{ name: 'Sauce Labs Backpack' } — This is an accessible name filter. 
 Playwright will only match links that have the text "Sauce Labs Backpack" as their visible label. */
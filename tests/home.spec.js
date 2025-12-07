import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.anesilab.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Anesi Lab' }).click();
  await page.getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('link', { name: 'Body Care' }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Cleansers' }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Exfoliators' }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Eye Area' }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Masks' }).click();
  await page.getByRole('link', { name: 'Anesi Lab' }).click();
});
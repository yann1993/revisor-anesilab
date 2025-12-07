import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(90000);
  await page.goto('https://www.anesilab.com/collection/cleansers/');
  await page.locator('#block-10').getByRole('link', { name: 'Cleansers' }).click();
  await page.getByLabel('Aqua Vital Mousse Radiance', { exact: true }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Exfoliators' }).click();
  await page.getByLabel('Aqua Vital Flash Exfoliator', { exact: true }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Eye Area' }).click();
  await page.getByLabel('Expression Lash & Brow Sérum', { exact: true }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Masks' }).click();
  await page.getByLabel('Beauty Sleep Mask', { exact: true }).click();
});
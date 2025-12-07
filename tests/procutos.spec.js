import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.anesilab.com/es/collection/limpiadores/');
  await page.getByLabel('Aqua Vital Express Cleansing Milk', { exact: true }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Exfoliantes' }).click();
  await page.getByLabel('Exfoliante Aqua Vital Flash', { exact: true }).click();
  await page.getByRole('link', { name: 'Contorno de Ojos', exact: true }).click();
  await page.getByLabel('3C Vitamin Glow Eye Bright Serum', { exact: true }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Mascarillas' }).click();
  await page.getByLabel('3D Aqua Vidalys Mask', { exact: true }).click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.anesilab.com/es/');
  await page.getByRole('link', { name: 'Contacto' }).click();
  await page.getByRole('link', { name: 'Sobre Nosotros' }).click();
  await page.getByRole('link', { name: 'Cuidado Corporal' }).click();
  await page.getByRole('link', { name: 'Anesi Lab' }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Limpiadores' }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Exfoliantes' }).click();
  await page.getByRole('link', { name: 'Contorno de Ojos', exact: true }).click();
  await page.locator('#block-10').getByRole('link', { name: 'Mascarillas' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
});
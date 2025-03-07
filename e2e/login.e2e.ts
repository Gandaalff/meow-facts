import { expect, test } from '@playwright/test';

test('isLoginPageAvailable', async ({ page }) => {
  await page.goto('/login');
  await expect(page).toHaveTitle('MeowFacts');
});

test('isLoginWork', async ({ page }) => {
  await page.goto('/login');
  await expect(page).toHaveTitle('MeowFacts');
  await expect(
    page.getByRole('textbox', { name: 'Wpisz swój login' })
  ).toBeVisible();
  await expect(
    page.getByRole('textbox', { name: 'Wpisz swoje hasło' })
  ).toBeVisible();
  await page.getByRole('textbox', { name: 'Wpisz swój login' }).fill('Jan');
  await page
    .getByRole('textbox', { name: 'Wpisz swoje hasło' })
    .fill('Kowalski');
  await page.getByRole('button', { name: 'Zaloguj' }).click();
  await page.waitForURL(/\/app\/cat-facts$/);
  const currentURL = page.url();
  expect(currentURL).toMatch(/\/app\/cat-facts$/);
});


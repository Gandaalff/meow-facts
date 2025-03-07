import { expect } from '@playwright/test';

export const login = async (page: any): Promise<void> => {
  await page.goto('/login');
  await page.getByRole('textbox', { name: 'Wpisz swój login' }).fill('Jan');
  await page
    .getByRole('textbox', { name: 'Wpisz swoje hasło' })
    .fill('Kowalski');
  await page.getByRole('button', { name: 'Zaloguj' }).click();
  await page.waitForURL(/\/app\/cat-facts$/);
  const currentURL = page.url();
  expect(currentURL).toMatch(/\/app\/cat-facts$/);
};

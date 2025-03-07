import test from '@playwright/test';
import { login } from './fixtures/login';
import { expect } from '@playwright/test';

test.beforeEach(async ({ page }): Promise<void> => {
  await login(page);
});

test('isLogoutWork', async ({ page }) => {
  await expect(
    page.locator('div').filter({ hasText: 'Jan Kowalski Wyloguj' }).first()
  ).toBeVisible();

  await page.getByRole('button', { name: 'Wyloguj' }).click();
  await page.waitForURL(/\/login/);
  const currentURL = page.url();
  expect(currentURL).toMatch(/\/login/);
});

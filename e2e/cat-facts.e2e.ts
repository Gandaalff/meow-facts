import test from '@playwright/test';
import { login } from './fixtures/login';
import { expect } from '@playwright/test';

test.beforeEach(async ({ page }): Promise<void> => {
  await login(page);
});

test('isCatFactsDisplayed', async ({ page }) => {
  await expect(
    page.locator('div').filter({ hasText: 'Jan Kowalski Wyloguj' }).first()
  ).toBeVisible();
  const cards = page.locator('.cat-facts-card');
  await expect(cards.first()).toBeVisible();
});

test('isNewCatFactsLoadedCorectly', async ({ page }) => {
  await expect(
    page.locator('div').filter({ hasText: 'Jan Kowalski Wyloguj' }).first()
  ).toBeVisible();
  const cards = page.locator('.cat-facts-card');
  const initialCount = await cards.count();
  await page.mouse.wheel(0, 20000);
  await page.waitForTimeout(2000);
  const finalCount = await cards.count();
  await expect(finalCount).toBeGreaterThan(initialCount);
});

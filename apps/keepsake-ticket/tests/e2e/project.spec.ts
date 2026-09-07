import { expect, test } from '@playwright/test';

test('shows the first visual-preview slice', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Keep the feeling/i })).toBeVisible();
  await expect(page.getByLabel('Sample photo and travel ticket composition')).toBeVisible();
  await expect(page.getByText('COASTAL DAY')).toBeVisible();
  await expect(page.getByText('Choose a photo')).toBeVisible();
  await expect(page.getByText('VISUAL PREVIEW')).toBeVisible();
});

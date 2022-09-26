import { expect, test } from '@playwright/test';

test('index page expected navbar', async ({ page }) => {
    await page.goto('/');
    expect(await page.textContent('p')).toBe('Home');
});

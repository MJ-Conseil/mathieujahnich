import { test, expect } from '@playwright/test';

test.describe('blog page', () => {
	test('should filter blog posts', async ({ page }) => {
		await page.goto('/blog');
		const allReferences = await page.getByTestId(new RegExp('^toutes-references-')).count();
		expect(allReferences).toBeLessThanOrEqual(6);
		await page.locator('#Temoignage').click();
		await page.url.toString().match(new RegExp('^categories=\\['));
	});
});

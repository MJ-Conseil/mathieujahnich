import { test, expect } from '@playwright/test';

test.describe('blog page', () => {
	test('should filter blog posts', async ({ page }) => {
		await page.goto('/blog');
		const allReferences = await page.getByTestId(new RegExp('^toutes-references-')).count();
		expect(allReferences).toBeLessThanOrEqual(6);
		await page.locator('#TEMOIGNAGES').click();
		await page.url.toString().match(new RegExp('^categories=\\['));
	});

	test('should perform a search ', async ({ page }) => {
		await page.goto('/blog');
		await page.getByLabel('Recherchez un article précis :').fill('ma recherche');
		await page.getByRole('button', { name: 'Recherchez' }).click();
		await page.url.toString().match(new RegExp('^ma recherche'));
	});
});

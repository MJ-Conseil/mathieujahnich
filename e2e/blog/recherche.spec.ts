import { test } from '@playwright/test';

test.describe('blog page', () => {
	test('should perform a search ', async ({ page }) => {
		await page.goto('/blog');
		await page.getByLabel('Chercher un article précis :').fill('green');
		await page.getByRole('button', { name: 'Rechercher' }).click();

		await page.waitForURL('/blog/recherche?search=%22green%22&per_page=50');
		await page.getByRole('heading', { name: '50 resultats trouvés pour "green"' });
	});
});

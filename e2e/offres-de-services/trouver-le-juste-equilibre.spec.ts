import { test, expect } from '@playwright/test';

test.describe('trouver-le-juste-equilibre page', () => {
	test('should have at least required headings ', async ({ page }) => {
		await page.goto('/offres-de-services/trouver-le-juste-equilibre');
		const headings = await page.getByRole('heading').all();

		const headingContents = await Promise.all(headings.map((item) => item.textContent()));

		const expectedHeadings = [
			'Trouver le juste équilibre',
			'Votre besoin',
			'Nos méthodes et les résultats',
			'Analyse et recommandations',
			'Tous types de supports',
			'Modalités',
			'Résultats'
		];

		// check if page headings contains at least the heading specified above
		expect(expectedHeadings.every((item) => headingContents.includes(item))).toBeTruthy();
	});
});

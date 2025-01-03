import { test, expect } from '@playwright/test';

test.describe('donner-de-l-elan page', () => {
	test('should have at least required headings ', async ({ page }) => {
		await page.goto('/offres-de-services/donner-de-l-elan');
		const headings = await page.getByRole('heading').all();

		const headingContents = await Promise.all(headings.map((item) => item.textContent()));

		const expectedHeadings = [
			'Donner de l’élan',
			'Votre besoin',
			'Nos méthodes et livrables',
			'Diagnostic',
			'Stratégie',
			'Appropriation',
			'Livrables'
		];

		// check if page headings contains at least the heading specified above
		expect(expectedHeadings.every((item) => headingContents.includes(item))).toBeTruthy();
	});
});

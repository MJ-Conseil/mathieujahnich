import { test, expect } from '@playwright/test';

test.describe('prendre-de-la-hauteur page', () => {
	test('should display few references on the page', async ({ page }) => {
		await page.goto('/offres-de-services/prendre-de-la-hauteur');
		const referenceCount = await page.getByTestId(new RegExp('^reference-')).count();
		expect(referenceCount).toBeGreaterThan(1);
	});

	test('should have at least required headings ', async ({ page }) => {
		await page.goto('/offres-de-services/prendre-de-la-hauteur');
		const headings = await page.getByRole('heading').all();

		const headingContents = await Promise.all(headings.map((item) => item.textContent()));

		const expectedHeadings = [
			'Prendre de la hauteur',
			'Votre besoin',
			'Nos méthodes',
			'Diagnostic',
			'Stratégie',
			'Mobilisation et communication',
			'Missions récentes'
		];

		// check if page headings contains at least the heading specified above

		expect(expectedHeadings.every((item) => headingContents.includes(item))).toBeTruthy();
	});
});

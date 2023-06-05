import { test, expect } from '@playwright/test';

test.describe('faire-monter-en-competence page', () => {
	test('should display few references on the page', async ({ page }) => {
		await page.goto('/offres-de-services/faire-monter-en-competence');
		const referenceCount = await page.getByTestId(new RegExp('^reference-')).count();
		expect(referenceCount).toBeGreaterThanOrEqual(1);
	});

	test('should have at least required headings ', async ({ page }) => {
		await page.goto('/offres-de-services/faire-monter-en-competence');
		const headings = await page.getByRole('heading').all();

		const headingContents = await Promise.all(headings.map((item) => item.textContent()));

		const expectedHeadings = [
			'Faire monter en compétences',
			'Votre besoin',
			'Nos prestations',
			'Des formats adaptés à vos publics',
			'Des contenus sur-mesure',
			'Co-construction d’outils pratiques',
			'Des formations certifiées Qualiopi'
		];

		// check if page headings contains at least the heading specified above

		expect(expectedHeadings.every((item) => headingContents.includes(item))).toBeTruthy();
	});

	test('users should go on reference page using `voir plus de référence link` ', async ({
		page
	}) => {
		await page.goto('/offres-de-services/faire-monter-en-competence');

		await page.getByRole('link', { name: 'Voir plus de références' }).click();

		await page.waitForURL('/references');
	});
});

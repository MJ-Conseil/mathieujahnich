import { test, expect } from '@playwright/test';

test.describe('donner-de-l-elan page', () => {
	// No references for this slug

	// test('should display few references on the page', async ({ page }) => {
	// 	await page.goto('/offres-de-services/donner-de-l-elan');
	// 	const referenceCount = await page.getByTestId(new RegExp('^reference-')).count();
	// 	expect(referenceCount).toBeGreaterThan(1);
	// });

	test('should have at least required headings ', async ({ page }) => {
		await page.goto('/offres-de-services/donner-de-l-elan');
		const headings = await page.getByRole('heading').all();

		const headingContents = await Promise.all(headings.map((item) => item.textContent()));

		const expectedHeadings = [
			'Donner de l’élan',
			'Votre besoin',
			'Nos méthodes et les livrables',
			'Diagnostic',
			'Stratégie',
			'Appropriation',
			'Livrables'
		];

		// const array = expectedHeadings.every((item) => headingContents.includes(item));
		// console.log(array);

		// check if page headings contains at least the heading specified above
		expect(expectedHeadings.every((item) => headingContents.includes(item))).toBeTruthy();
	});

	// No references for this slug
	// test('users should go on reference page using `voir plus de référence link` ', async ({
	// 	page
	// }) => {
	// 	await page.goto('/offres-de-services/donner-de-l-elan');

	// 	await page.getByRole('link', { name: 'Voir plus de références' }).click();

	// 	await page.waitForURL('/references');
	// });
});

import { test } from './fixtures.js';
import { expect } from '@playwright/test';

test.describe('accessibilty - pages without required authentication', () => {
	test('home page should not have any automatically detectable accessibility issues', async ({
		page,
		makeAxeBuilder
	}) => {
		await page.goto('/');

		const accessibilityScanResults = await makeAxeBuilder().analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('contact page should not have any automatically detectable accessibility issues', async ({
		page,
		makeAxeBuilder
	}) => {
		await page.goto('/contact');

		const accessibilityScanResults = await makeAxeBuilder().analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('offres/prendre de la hauteur page should not have any automatically detectable accessibility issues', async ({
		page,
		makeAxeBuilder
	}) => {
		await page.goto('/offres-de-services/prendre-de-la-hauteur');

		const accessibilityScanResults = await makeAxeBuilder().analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('reference page should not have any automatically detectable accessibility issues', async ({
		page,
		makeAxeBuilder
	}) => {
		await page.goto('/references');

		const accessibilityScanResults = await makeAxeBuilder().analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('blog page should not have any automatically detectable accessibility issues', async ({
		page,
		makeAxeBuilder
	}) => {
		await page.goto('/blog');

		const accessibilityScanResults = await makeAxeBuilder().analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('search blog post page should not have any automatically detectable accessibility issues', async ({
		page,
		makeAxeBuilder
	}) => {
		await page.goto('/blog/recherche?per_page=6&search="tata"&categories=[19]');

		const accessibilityScanResults = await makeAxeBuilder().analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

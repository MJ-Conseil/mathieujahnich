import { test } from './fixtures.js';
import { expect } from '@playwright/test';

test.describe('contact page', () => {
	test('contact page should have a link to go Reservio site', async ({ page, browser }) => {
		await page.goto('/contact');
		const url = await page.getByTestId('reservio-link').getAttribute('href');
		const context = await browser.newContext();
		const page2 = await context.newPage();
		if (url) {
			await page2.goto(url);
			await expect(page2).toHaveURL('https://mathieu-jahnich.reservio.com/');
		}
	});
});

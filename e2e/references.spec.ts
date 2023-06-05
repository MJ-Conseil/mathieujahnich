import { test, expect } from '@playwright/test';

test.describe('reference page', () => {
	test('should display and filter references', async ({ page }) => {
		await page.goto('/references');

		const referenceCount = await page.getByTestId(new RegExp('^reference-')).count();

		expect(referenceCount).toBeGreaterThan(1);

		await page.getByRole('button', { name: 'Grande entreprise' }).click();

		const filteredReferencesCount = await page.getByTestId(new RegExp('^reference-')).count();

		expect(filteredReferencesCount).toBeLessThanOrEqual(referenceCount);
	});
});

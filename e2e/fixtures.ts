import AxeBuilder from '@axe-core/playwright';
import { test as base } from '@playwright/test';

/**
 * These fixtures allow simplifying setup/teardown logic in tests,
 * especially for preparing server-side state.
 * See: https://playwright.dev/docs/test-fixtures
 * See: https://playwright.dev/docs/test-api-testing#sending-api-requests-from-ui-tests
 */

type AppFixtures = {
	makeAxeBuilder: () => AxeBuilder;
};

export type AppTestArgs = AppFixtures;

export const test = base.extend<AppTestArgs>({
	makeAxeBuilder: async ({ page }, use) => {
		const makeAxeBuilder = () => new AxeBuilder({ page })
		await use(makeAxeBuilder);
	}
});

import AxeBuilder from '@axe-core/playwright';
import { test as base, expect, type APIRequestContext } from '@playwright/test';
import type { Dataset } from '../../definitions/datasets.js';
import { toDataset } from '../../lib/transformers/dataset.js';
import { ADMIN_EMAIL, ADMIN_PASSWORD, TEST_EMAIL, TEST_PASSWORD } from './constants.js';

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
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore this is a hot fix untild this isssue will be resolved https://github.com/dequelabs/axe-core-npm/issues/601
		const makeAxeBuilder = () => new AxeBuilder.default({ page });
		await use(makeAxeBuilder);
	}
});
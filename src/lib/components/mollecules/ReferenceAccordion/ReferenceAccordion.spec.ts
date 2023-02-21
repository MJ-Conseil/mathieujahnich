// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import ReferenceAccordion from './ReferenceAccordion.svelte';

test('shows panel if button has been clicked', async () => {
	const { getByRole } = render(ReferenceAccordion, {
		props: {
			title: 'Hello',
			content: '<p>Hello World<p/>'
		}
	});

	const triggerButton = getByRole('button');

	await triggerButton.click();

	const panel = getByRole('region');
	expect(panel.textContent).toBe('Hello World');
});

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import DesktopMenu from './DesktopMenu.svelte';

test('can see menu items only when the button has been pressed', async () => {
	const { getByTestId, getByText } = render(DesktopMenu);

	const button = await getByText('Offres de services', {
		exact: false
	});

	await fireEvent.click(button);

	const menu = await getByTestId('faire-monter-en-competence-menu');
	expect(menu).not.toBe(null);
});

test('button has focus if escape key has been pressed', async () => {
	const { getByTestId, getByText, queryByTestId } = render(DesktopMenu);

	const button = await getByText('Offres de services', {
		exact: false
	});

	await fireEvent.click(button);

	const menu = await getByTestId('faire-monter-en-competence-menu');

	await fireEvent.keyDown(menu, { key: 'Escape' });

	expect(await queryByTestId('faire-monter-en-competence-menu')).toBe(null);
});

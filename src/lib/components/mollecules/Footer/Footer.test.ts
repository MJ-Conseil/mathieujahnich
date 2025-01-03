// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import Footer from './Footer.svelte';

test('shows proper heading when rendered', () => {
	render(Footer);
	const headings = screen.getAllByRole('heading');

	expect(headings.length).toBe(3);
	expect(headings[0]).toHaveTextContent('Mathieu Jahnich');
	expect(headings[1]).toHaveTextContent('Ressources');
});

test('shows proper catch phrase when rendered', () => {
	render(Footer);
	screen.getByText('Je mets la communication au service de la transition écologique');
});

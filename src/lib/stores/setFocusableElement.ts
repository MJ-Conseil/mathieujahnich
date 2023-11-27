import { writable } from 'svelte/store';

const buildFocusableElementStore = () => {
	const { subscribe, update } = writable<Array<string>>([]);

	return {
		subscribe,
		setFocusableElementIds: (id: string) =>
			update((ids) => {
				return [...ids, id];
			})
	};
};
export const focusableElementStore = buildFocusableElementStore();

import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		environment: 'jsdom',
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 5173,
		strictPort: true
	},

	preview: {
		port: 5173,
		strictPort: true
	}
};

export default config;

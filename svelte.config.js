import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			definitions: 'src/definitions'
		},
		csp: {
			directives: {
				'default-src': [
					'self',
					'https://mj-cms.jcloud-ver-jpe.ik-server.com/', // we allow resources loading from this website
					'http://localhost:*',
					'https://*.matomo.cloud'
				],
				'base-uri': ['self'],
				'manifest-src': ['self'],
				'font-src': ['self'],
				'img-src': [
					'self',
					'https://mj-cms.jcloud-ver-jpe.ik-server.com/', // the images come from the current on line website
					'http://localhost:*'
				]
			}
		}
	}
};

export default config;

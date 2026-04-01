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
					'https://mj-conseil-wordpress.osc-fr1.scalingo.io',
					'https://mj-storage.s3.fr-par.scw.cloud', // this is the storage S3 for images
					'http://localhost:*',
					'https://*.matomo.cloud'
				],
				'base-uri': ['self'],
				'manifest-src': ['self'],
				'font-src': ['self'],
				'img-src': [
					'self',
					'https://mj-cms.jcloud-ver-jpe.ik-server.com/', // the images come from the current on line website,
					'https://mj-storage.s3.fr-par.scw.cloud', // this is the storage S3 for images,
					'https://mj-conseil-wordpress.osc-fr1.scalingo.io',
					'http://localhost:*',
					'data:',
				]
			}
		}
	}
};

export default config;

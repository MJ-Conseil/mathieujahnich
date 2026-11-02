import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelteParser from 'svelte-eslint-parser';
import sveltePlugin from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

const globals = {
	browser: true,
	es2017: true,
	node: true,
	process: 'readonly',
	fetch: 'readonly',
	URL: 'readonly',
	URLSearchParams: 'readonly',
	Request: 'readonly',
	Response: 'readonly',
	Headers: 'readonly',
	console: 'readonly',
	document: 'readonly',
	window: 'readonly',
	HTMLElement: 'readonly',
	HTMLInputElement: 'readonly',
	Event: 'readonly',
	KeyboardEvent: 'readonly',
	MouseEvent: 'readonly',
	CustomEvent: 'readonly'
};

const testGlobals = {
	...globals,
	test: 'readonly',
	describe: 'readonly',
	it: 'readonly',
	expect: 'readonly',
	beforeEach: 'readonly',
	afterEach: 'readonly'
};

export default [
	{
		ignores: [
			'*.cjs',
			'.svelte-kit/',
			'build/',
			'+error.svelte',
			'declaration-accessibilité/+page.svelte',
			'plan-de-site/+page.svelte'
		]
	},
	js.configs.recommended,
	{
		files: ['**/*.{js,ts}', '**/*.test.{js,ts}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020
			},
			globals: testGlobals
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...tsPlugin.configs.recommended.rules
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				sourceType: 'module',
				ecmaVersion: 2020
			},
			globals
		},
		plugins: {
			svelte: sveltePlugin,
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...sveltePlugin.configs.recommended.rules
		}
	},
	prettier
];

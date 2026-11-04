import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelteParser from 'svelte-eslint-parser';
import sveltePlugin from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

import { defineConfig } from 'eslint/config';

import globals from 'globals';

export default defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.svelte
			}
		}
	},
	{
		ignores: [
			'*.cjs',
			'.svelte-kit/',
			'build/',
			'.DS_Store',
			'node_modules',
			'.env*',
			'!.env.example',
			'coverage',
			'playwright-report/**',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
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
	prettier,
	{
		rules: {
			'no-irregular-whitespace': 'off'
		}
	}
]);

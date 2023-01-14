/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			blue: {
				light: '#F2F3F7',
				dark: '#06154A'
			},
			sand: '#F0CB85',
			indigo: '#291F9C',
			white: '#ffffff',
			gray: {
				DEFAULT: '#F2F3F7'
			}
		},
		fontFamily: {
			ptsans: ['PT Sans', 'sans-serif'],
			sans: ['Arial', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};

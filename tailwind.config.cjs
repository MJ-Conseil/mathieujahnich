/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	important: true,
	theme: {
		container: {
			center: true
		},
		colors: {
			blue: {
				light: '#F2F3F7',
				dark: '#06154A',
				medium: '#291F9C'
			},
			sand: '#F3C461',
			indigo: '#291F9C',
			white: '#ffffff',
			gray: {
				DEFAULT: '#F2F3F7'
			},
			grey: {
				light: '#D0D6EC'
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

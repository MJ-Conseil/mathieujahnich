/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	important: true,
	theme: {
		container: {
			center: true
		},

		colors: {
			red: '#ff6d91',
			blue: {
				xlight: '#1A295E',
				light: '#F2F3F7',
				dark: '#06154A'
			},
			sand: {
				DEFAULT: '#F3C461',
				dark: '#F2AA12'
			},
			indigo: '#291F9C',
			white: '#ffffff',
			gray: {
				DEFAULT: '#F2F3F7',
				light: '#D0D6EC',
				dark: '#ebe8e8'
			},
			teal: '#0d9488'
		},
		fontFamily: {
			ptsans: ['PT Sans', 'sans-serif'],
			sans: ['Arial', 'sans-serif']
		},
		extend: {}
	},
	variants: {
		extend: {
			justifyContent: ['odd']
		}
	},
	plugins: []
};

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {fontFamily: {sans: ['Gothic A1', 'sans-serif']}}
	},

	plugins: []
}

module.exports = config

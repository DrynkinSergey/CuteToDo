/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			josefin: ['Josefin Sans', 'sans-serif'],
		},
		extend: {
			gridTemplateColumns: {
				todo: '45px 3fr 1fr ',
			},
		},
	},
	plugins: [],
}

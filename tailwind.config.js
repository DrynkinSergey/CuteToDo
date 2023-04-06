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
			colors: {
				darkMain: 'hsl(235, 24%, 19%)',
				darkVeryBG: 'hsl(235, 21%, 11%)',
			},
		},
	},
	plugins: [],
}

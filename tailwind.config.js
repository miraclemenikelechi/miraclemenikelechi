/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"purple--100": "#fae8ff",
			},
		},
		fontFamily: {
			"space-mono": ["Space Mono", "serif"],
		},
	},
	plugins: [],
};

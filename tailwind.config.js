/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		extend: {screens: {
			'xs': '320px', // Custom breakpoint for smaller screens
		  },},
	},
	plugins: [],
};

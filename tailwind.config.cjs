/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				audiowide: ["Audiowide", "cursive"],
				hammersmith: "Hammersmith One",
				poppins: "Poppins",
			},
			colors: {
				"gray-bd": "#BDBDBD",
				"gray-82": "#828282",
				"gray-e0": "#E0E0E0",
				"blue-65": "#65FCF2",
				"black-13": "#131313",
				"black-0b": "#0B0C10",
				"gray-gradient":
					"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #D9D9D9;",
			},
			backgroundImage: {
				"about-us": "url('../../src/assets/images/bg-about.svg')",
			},
			screens: {
				xl: { max: "1200px" },
				lg: { max: "1024px" },
				md: { max: "768px" },
				sm: { max: "640px" },
				mb: { max: "425px" },
				ms: { max: "320px" },
				mf: { max: "280px" },
			},
		},
		container: {
			padding: "5px",
			center: true,
			overflow: "hidden",
		},
	},
	plugins: [],
};

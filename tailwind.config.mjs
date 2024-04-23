/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				Quicksand: ["Quicksand", "sans-seriff"],

				Exo: ["Exo", "sans-seriff"]
			}
		},
	},
	plugins: [],
}

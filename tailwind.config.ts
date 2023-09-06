import type { Config } from "tailwindcss";
import plugin from "flowbite/plugin";

export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#f0fdf4",
					"100": "#dcfce7",
					"200": "#bbf7d0",
					"300": "#86efac",
					"400": "#4ade80",
					"500": "#22c55e",
					"600": "#16a34a",
					"700": "#15803d",
					"800": "#166534",
					"900": "#14532d",
					"950": "#052e16",
				},
			},
		},
		fontFamily: {
			body: [
				"Nunito Sans",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"system-ui",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			sans: [
				"Nunito Sans",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"system-ui",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
		},
	},
	plugins: [plugin],
} satisfies Config;

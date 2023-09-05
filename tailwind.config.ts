import type { Config } from 'tailwindcss'
import plugin from 'flowbite/plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#fff7ed",
					"100": "#ffedd5",
					"200": "#fed7aa",
					"300": "#fdba74",
					"400": "#fb923c",
					"500": "#f97316",
					"600": "#ea580c",
					"700": "#c2410c",
					"800": "#9a3412",
					"900": "#7c2d12",
					"950": "#431407"
				},
			},
		},
		fontFamily: {
			body: [
				'Inter',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'system-ui',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
			sans: [
				'Inter',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'system-ui',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
		},
	},
	plugins: [plugin],
} satisfies Config

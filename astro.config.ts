import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	site: 'https://automation-mastering-website.vercel.app',
	output: 'server',
	integrations: [tailwind(), sitemap()],
	adapter: vercel(),
})

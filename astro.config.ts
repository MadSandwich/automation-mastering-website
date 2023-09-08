import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	site: 'https:localhost:4321',
	output: 'server',
	integrations: [tailwind(), sitemap()],
	adapter: vercel(),
})

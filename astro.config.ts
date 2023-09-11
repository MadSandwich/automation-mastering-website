import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	site: 'https://automation-mastering-website.vercel.app',
	output: 'server',
	integrations: [tailwind(), sitemap(), react()],
	adapter: vercel(),
})

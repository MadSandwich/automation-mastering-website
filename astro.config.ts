import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	site: 'https:localhost:4321',
	output: 'hybrid',
	integrations: [tailwind()],
})

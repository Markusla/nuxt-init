// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
	typescript: { shim: false },
	vite: {
		plugins: [eslintPlugin()],
	},
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'vite-plugin-components'
import pages from 'vite-plugin-pages'
import icons, { ViteIconsResolver } from 'vite-plugin-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      customComponentResolvers: ViteIconsResolver(),
    }),
    pages(),
    icons(),
  ],
})

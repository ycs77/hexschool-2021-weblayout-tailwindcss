import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import icons from 'vite-plugin-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages(),
    icons(),
  ],
})

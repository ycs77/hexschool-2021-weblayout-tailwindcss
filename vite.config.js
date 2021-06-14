import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components, { HeadlessUiResolver } from 'vite-plugin-components'
import pages from 'vite-plugin-pages'
import icons, { ViteIconsResolver } from 'vite-plugin-icons'

export const ssrTransformCustomDirective = () => ({ props: [], needRuntime: true })

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          directiveTransforms: {
            tippy: ssrTransformCustomDirective,
          },
        },
      }
    }),
    components({
      customComponentResolvers: [
        HeadlessUiResolver(),
        ViteIconsResolver(),
      ],
    }),
    pages(),
    icons(),
  ],
})

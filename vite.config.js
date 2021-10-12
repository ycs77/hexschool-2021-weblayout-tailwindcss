import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import pages from 'vite-plugin-pages'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

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
      resolvers: [
        HeadlessUiResolver(),
        IconsResolver(),
      ],
    }),
    pages(),
    icons(),
  ],
})

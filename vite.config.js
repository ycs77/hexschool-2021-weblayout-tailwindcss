import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  base: process.env.BASE_URL || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          directiveTransforms: {
            tippy: () => ({ props: [], needRuntime: true }),
          },
        },
      },
    }),
    Components({
      resolvers: [
        HeadlessUiResolver(),
        IconsResolver({
          prefix: '',
        }),
      ],
    }),
    Pages(),
    Icons(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vue-tippy',
      '@headlessui/vue',
      '@vueuse/head',
    ],
  },
})

import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import tippy from 'vue-tippy'
import App from './App.vue'
import 'tippy.js/dist/tippy.css'
import './style/main.css'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.use(tippy, {
    defaultProps: {
      placement: 'top',
      hideOnClick: false,
    },
  })
})

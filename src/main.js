import { ViteSSG } from 'vite-ssg'
import tippy from 'vue-tippy'
import routes from '~pages'
import App from './App.vue'
import 'tippy.js/dist/tippy.css'
import './style/main.css'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.use(tippy)
})

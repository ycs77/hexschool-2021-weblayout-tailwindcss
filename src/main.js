import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import './style/main.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(VueTippy)
  }
)

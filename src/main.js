import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import VueTippy from 'vue-tippy'
import App from './App.vue'
import router from './router'
import 'tippy.js/dist/tippy.css'
import './style/main.css'

const head = createHead()

createApp(App)
  .use(router)
  .use(head)
  .use(VueTippy)
  .mount('#app')

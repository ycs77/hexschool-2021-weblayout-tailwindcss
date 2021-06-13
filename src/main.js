import { createApp } from 'vue'
import VueTippy from 'vue-tippy'
import App from './App.vue'
import router from './router'
import 'tippy.js/dist/tippy.css'
import './style/main.css'

createApp(App)
  .use(router)
  .use(VueTippy)
  .mount('#app')

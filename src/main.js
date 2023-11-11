import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
  .use(router)
  .mount('#app')
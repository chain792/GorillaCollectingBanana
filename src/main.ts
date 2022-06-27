import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import VueGtag from "vue-gtag";

createApp(App)
  .use(router)
  .use(VueGtag, {
    config: { 
      id: "G-CYS7Z53H7N",
    },
  }, router)
  .use(createPinia())
  .mount('#app')

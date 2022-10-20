import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/tailwind_dist.css'
import './assets/fonts/font.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
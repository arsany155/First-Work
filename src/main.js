import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'


createApp(App).use(router).mount('#app')

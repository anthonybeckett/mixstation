import "primeicons/primeicons.css"
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { AVPlugin } from "vue-audio-visual"
import setupPrimeVue from "@/config/PrimeVueConfig.js"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AVPlugin)

setupPrimeVue(app);

app.mount('#app')

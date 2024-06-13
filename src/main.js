import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import components from '@/components/UI'

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const component in components) {
  app.component(components[component].name, components[component])
}

app.use(createPinia())
app.use(router)

app.mount('#app')

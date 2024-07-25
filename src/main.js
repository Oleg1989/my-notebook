import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import components from '@/components/UI'

import App from './App.vue'
import router from './router'

import { createI18n, useI18n } from 'vue-i18n'
import { languages } from '@/i18n/index'
import { defaultLocale } from '@/i18n/index'

const localeStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang || defaultLocale,
  fallbackLocale: 'en',
  messages
})

const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

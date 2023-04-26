import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import firebase from "@/middleware/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import "@/plugins/auth"

const app = createApp(App)

onAuthStateChanged(getAuth(firebase), () => {
    app.use(createPinia())
    app.use(router)
    app.use(vuetify)
    app.mount('#app')
})

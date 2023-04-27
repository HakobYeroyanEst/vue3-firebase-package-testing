import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import firebase from "@/middleware/firebase"
import AuthGuard from "@nerd305/firebase-vuetify-auth"
import { authGuardSettings } from "./plugins/auth"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const app = createApp(App)
const pinia = createPinia()

app.config.productionTip = false

onAuthStateChanged(getAuth(firebase), () => {
    app.use(AuthGuard, authGuardSettings)
    app.use(pinia)
    app.use(router)
    app.use(vuetify)
    app.mount('#app')
})

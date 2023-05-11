import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import firebase from "@/middleware/firebase"
import AuthGuard from "@nerd305/firebase-vuetify-auth"
import { authGuardSettings } from "./plugins/auth"
import { getAuth, onAuthStateChanged } from "firebase/auth"

onAuthStateChanged(getAuth(firebase), () => {
    const app = createApp(App)

    app.config.productionTip = false

    app.use(createPinia())
    app.use(router)
    app.use(vuetify)
    app.use(AuthGuard, authGuardSettings)
    app.mount('#app')
})

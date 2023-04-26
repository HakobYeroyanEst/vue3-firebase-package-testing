import { createRouter, createWebHistory } from 'vue-router'
import { AuthMiddleware } from "@nerd305/firebase-vuetify-auth"
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(AuthMiddleware)

export default router

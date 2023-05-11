export default [
    {
        name: "Login",
        path: "/login",
        component: () => import(/* webpackChunkName: "login" */ "@/views/LoginCard.vue"),
    },
    {
        path: "/public", // this route is public, no `beforeEnter`
        name: "Public",
        component: () => import("@/views/PublicRoute.vue"), // example public route
    },
    {
        path: "/protected",
        meta: { requiresAuth: true }, // this route requires authentication guard
        name: "Protected",
        component: () => import("@/views/ProtectedRoute.vue"), // example protected route
    },
]

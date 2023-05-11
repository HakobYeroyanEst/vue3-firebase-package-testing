<template>
    <div>
        <p>Login page</p>
        <button @click="$router.push('/protected').catch(() => {})">Log in</button>
        <br>
        <button @click="handleSignOut()">Log out</button>
    </div>
</template>

<script setup>
import {
    getAuth,
    signOut,
} from "firebase/auth"

import firebaseApp from "@/middleware/firebase"

function handleSignOut() {
    const auth = getAuth(firebaseApp)

    return signOut(auth)
}
</script>

<template>
  <div>
      <AuthenticationGuard />

      <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

</script>

<style scoped>
</style>

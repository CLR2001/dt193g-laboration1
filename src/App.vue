<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <HeaderComponent />

    <main>
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<style scoped></style>

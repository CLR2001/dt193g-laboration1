<script setup>
import { ref } from 'vue'
</script>

<template>
  <header>
    <nav class="">
      <ul class="">
        <li>
          <router-link to="/" class="">Hem</router-link>
        </li>
        <li>
          <router-link to="/tailwind" class="">Tailwind</router-link>
        </li>
        <li>
          <router-link to="/bulma" class="">Bulma</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>

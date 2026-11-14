<script setup lang="ts">
import { ref } from 'vue'
import ToggleThemeButton from './ToggleThemeButton.vue'
</script>

<template>
  <footer>
    <div class="bg-brand-primary">
      <ul
        class="m-auto flex w-full max-w-300 flex-col items-center gap-8 py-8 text-white sm:flex-row sm:justify-around sm:gap-0"
      >
        <li>Ludvig Rosenqvist</li>
        <li>2026</li>
        <li>Laboration 1</li>
        <li>
          <ToggleThemeButton></ToggleThemeButton>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped></style>

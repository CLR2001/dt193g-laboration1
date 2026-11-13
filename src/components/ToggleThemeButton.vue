<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) return savedTheme === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const applyTheme = (dark: boolean) => {
  const theme = dark ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
}

const isInitialDark = getInitialTheme()

applyTheme(isInitialDark)

const isDarkMode = ref(isInitialDark)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  applyTheme(isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}
</script>

<template>
  <button @click="toggleTheme" class="cursor-pointer">
    <BaseIcon :name="isDarkMode ? 'light-mode' : 'dark-mode'" class="size-8" />
  </button>
</template>

<style scoped></style>

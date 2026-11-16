<script setup lang="ts">
import type { IconName } from '@/utils/iconLoader'

defineProps<{
  name: IconName
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    class="inline-block size-6 fill-current stroke-current"
    aria-hidden-true="true"
    aria-hidden="true"
  >
    <use :href="`#${name}`" />
  </svg>
</template>

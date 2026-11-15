<script setup lang="ts">
import type { IDataRow } from '@/composables/tableDataHandler'
import { tableDataHandler } from '@/composables/tableDataHandler'
import { ref } from 'vue'

const { addRow } = tableDataHandler()

const emptyForm = {
  framework: '',
  developer: '',
  linkText: '',
  url: '',
}
const formData = ref<Omit<IDataRow, 'id'>>({ ...emptyForm })

const handleSubmit = () => {
  if (!formData.value.framework.trim() || !formData.value.developer.trim() || !formData.value.url.trim()) {
    alert('Vänligen fyll i alla fält!')
    return
  }

  addRow(formData.value)
  formData.value = { ...emptyForm }
}

const handleReset = () => {
  formData.value = { ...emptyForm }
}
</script>

<template>
  <div class="has-background-light block p-4">
    <form @submit.prevent="handleSubmit" class="is-flex is-flex-direction-column gap-10">
      <div class="">
        <label for="framework" class="label">Ramverk:</label>
        <input
          v-model="formData.framework"
          type="text"
          name="framework"
          autocomplete="off"
          placeholder="Tailwind"
          class="input"
        />
        <label for="developer" class="label mt-5">Utvecklare:</label>
        <input
          v-model="formData.developer"
          type="text"
          name="developer"
          autocomplete="off"
          placeholder="Tailwind Labs Inc"
          class="input"
        />
        <label for="linkText" class="label mt-5">Länktext:</label>
        <input
          v-model="formData.linkText"
          type="text"
          name="linkText"
          autocomplete="off"
          placeholder="tailwindcss.com"
          class="input"
        />
        <label for="url" class="label mt-5">URL:</label>
        <input
          v-model="formData.url"
          type="url"
          name="url"
          autocomplete="off"
          placeholder="https://tailwindcss.com/"
          class="input"
        />
      </div>
      <div class="is-flex is-justify-content-center gap-10">
        <button type="submit" class="button">Skicka</button>
        <button type="button" class="button" @click="handleReset">Rensa</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

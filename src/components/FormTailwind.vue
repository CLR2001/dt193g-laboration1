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
  <div class="w-full">
    <form
      @submit.prevent="handleSubmit"
      class="border-border-line bg-card-surface rounded-2xl border p-8 shadow-(--shadow-card) sm:p-12"
    >
      <div class="grid items-center gap-x-2 gap-y-2">
        <label for="" class="w-fit">Ramverk:</label>
        <input
          v-model="formData.framework"
          type="text"
          name="framework"
          autocomplete="off"
          placeholder="Tailwind"
          class="bg-page-background w-full rounded-md border border-white/15 px-2 py-1"
        />
        <label for="" class="w-fit">Utvecklare:</label>
        <input
          v-model="formData.developer"
          type="text"
          name="developer"
          autocomplete="off"
          placeholder="Tailwind Labs Inc"
          class="bg-page-background w-full rounded-md border border-white/15 px-2 py-1"
        />
        <label for="" class="w-fit">Länktext:</label>
        <input
          v-model="formData.linkText"
          type="text"
          name="linkText"
          autocomplete="off"
          placeholder="tailwindcss.com"
          class="bg-page-background w-full rounded-md border border-white/15 px-2 py-1"
        />
        <label for="" class="w-fit">URL:</label>
        <input
          v-model="formData.url"
          type="url"
          name="url"
          autocomplete="off"
          placeholder="https://tailwindcss.com/"
          class="bg-page-background w-full rounded-md border border-white/15 px-2 py-1"
        />
      </div>
      <div class="m-auto mt-8 flex flex-wrap justify-center gap-6">
        <button
          type="submit"
          class="bg-brand-primary cursor-pointer rounded-2xl border border-white/10 px-6 py-4 text-white transition-transform duration-100 hover:scale-105 active:scale-100"
        >
          Skicka
        </button>
        <button
          type="button"
          class="bg-brand-primary cursor-pointer rounded-2xl border border-white/10 px-6 py-4 text-white transition-transform duration-150 hover:scale-105 active:scale-100"
          @click="handleReset"
        >
          Rensa
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

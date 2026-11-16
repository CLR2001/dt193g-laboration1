<script setup lang="ts">
import type { IDataRow } from '@/composables/tableDataHandler'
import { tableDataHandler } from '@/composables/tableDataHandler'
import { ref } from 'vue'

const { addRow } = tableDataHandler()

const emptyForm = {
  framework: '',
  developer: '',
  difficulty: '',
  recommended: false,
  review: '',
}
const formData = ref<Omit<IDataRow, 'id'>>({ ...emptyForm })

const handleSubmit = () => {
  if (
    !formData.value.framework.trim() ||
    !formData.value.developer.trim() ||
    !formData.value.difficulty.trim() ||
    !formData.value.recommended ||
    !formData.value.review.trim()
  ) {
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
      <div>
        <div class="field is-flex is-flex-direction-column">
          <label for="framework" class="label">Ramverk:</label>
          <input
            v-model="formData.framework"
            type="text"
            name="framework"
            autocomplete="off"
            placeholder="Tailwind"
            class="input"
          />
        </div>
        <div class="field is-flex is-flex-direction-column">
          <label for="developer" class="label">Utvecklare:</label>
          <input
            v-model="formData.developer"
            type="text"
            name="developer"
            autocomplete="off"
            placeholder="Tailwind Labs Inc"
            class="input"
          />
        </div>
        <div class="field is-flex is-flex-direction-column">
          <label for="difficulty" class="label">Svårighetsgrad:</label>
          <select v-model="formData.difficulty" name="difficulty" class="input">
            <option value="Lätt">Lätt</option>
            <option value="Medel">Medel</option>
            <option value="Svår">Svår</option>
          </select>
        </div>
        <div class="field is-flex is-align-items-center">
          <label for="recommended" class="label mr-2">Rekommenderas för nybörjare:</label>
          <input v-model="formData.recommended" type="checkbox" name="recommended" class="checkbox mb-1" />
        </div>
        <div class="field is-flex is-flex-direction-column">
          <label for="review" class="label">Recension:</label>
          <textarea
            v-model="formData.review"
            name="review"
            placeholder="Skriv din recension här..."
            class="input"
          ></textarea>
        </div>
      </div>
      <div class="is-flex is-justify-content-center gap-10">
        <button type="submit" class="button">Skicka</button>
        <button type="button" class="button" @click="handleReset">Rensa</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

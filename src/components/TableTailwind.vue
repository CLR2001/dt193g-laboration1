<script setup lang="ts">
import { tableDataHandler } from '@/composables/tableDataHandler'
const { tableData, deleteRow, resetTable } = tableDataHandler()
</script>

<template>
  <div
    class="border-border-line bg-card-surface w-full overflow-hidden overflow-x-auto rounded-2xl border shadow-(--shadow-card)"
  >
    <table class="box-border w-full table-auto border-collapse text-left text-sm">
      <thead class="bg-brand-primary text-white">
        <tr>
          <th class="px-6 py-4 whitespace-nowrap">Ramverk</th>
          <th class="px-6 py-4 whitespace-nowrap">Utvecklare</th>
          <th class="px-6 py-4 whitespace-nowrap">Länk</th>
          <th class="px-6 py-4 whitespace-nowrap"></th>
        </tr>
      </thead>
      <tbody class="divide-border-line divide-y">
        <tr
          v-for="row in tableData"
          :key="row.id"
          class="transition-[background-color] duration-150 hover:bg-[color-mix(in_srgb,var(--color-card-surface)_98%,white)]"
        >
          <td class="px-6 py-4 whitespace-nowrap">{{ row.framework }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ row.developer }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <a :href="row.url" target="_blank" class="text-blue-500 underline hover:text-blue-700">
              {{ row.linkText }}
            </a>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button @click="deleteRow(row.id, row.framework)" class="cursor-pointer text-red-500 hover:text-red-700">
              Ta bort
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button
    @click="resetTable"
    class="border-border-line bg-brand-primary cursor-pointer rounded-2xl border px-6 py-4 text-white shadow-(--shadow-card) transition-transform duration-150 hover:scale-105"
  >
    Återställ tabellen
  </button>
</template>

<style scoped></style>

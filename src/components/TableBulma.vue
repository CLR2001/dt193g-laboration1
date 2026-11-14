<script setup lang="ts">
import { tableDataHandler } from '@/composables/tableDataHandler'
const { tableData, deleteRow } = tableDataHandler()
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Ramverk</th>
          <th>Utvecklare</th>
          <th>Länk</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.id">
          <td>{{ row.framework }}</td>
          <td>{{ row.developer }}</td>
          <td>
            <a :href="row.url" target="_blank" class="">
              {{ row.linkText }}
            </a>
          </td>
          <td>
            <button @click="deleteRow(row.id, row.framework)" class="">Ta bort</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

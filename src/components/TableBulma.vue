<script setup lang="ts">
import { tableDataHandler } from '@/composables/tableDataHandler'
const { tableData, deleteRow, resetTable } = tableDataHandler()
</script>

<template>
  <div class="table-container">
    <table class="is-narrow has-text-black is-hoverable is-fullwidth is-striped is-bordered table">
      <thead class="">
        <tr>
          <th class="">Ramverk</th>
          <th class="">Utvecklare</th>
          <th class="">Svårighetsgrad</th>
          <th class="">Rekommenderas</th>
          <th class="">Åtgärd</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="row in tableData" :key="row.id" class="">
          <td class="">{{ row.framework }}</td>
          <td class="">{{ row.developer }}</td>
          <td class="">{{ row.difficulty }}</td>
          <td class="">{{ row.recommended ? 'Ja' : 'nej' }}</td>
          <td class="has-text-danger">
            <button @click="deleteRow(row.id, row.framework)" class="">Ta bort</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button @click="resetTable" class="button m-auto w-fit p-4">Återställ tabellen</button>
</template>

<style lang="scss" scoped>
.block {
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.04),
    0 10px 25px -3px rgba(0, 0, 0, 0.05);
}
</style>

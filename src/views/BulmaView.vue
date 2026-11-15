<script setup>
import HeaderBulma from '@/components/HeaderBulma.vue'
import FooterBulma from '@/components/FooterBulma.vue'
import TableBulma from '@/components/TableBulma.vue'
import FormBulma from '@/components/FormBulma.vue'
import { onMounted, onUnmounted } from 'vue'

// AI-genererad del som endast laddar in Bulma på bulma undersidan för att undvika css-krockar som påverkade layouten på alla sidor.
onMounted(() => {
  const link = document.createElement('link')
  link.id = 'bulma-dynamic-theme'
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css'
  document.head.appendChild(link)
})

onUnmounted(() => {
  const link = document.getElementById('bulma-dynamic-theme')
  if (link) {
    link.remove()
  }
})
// Slut på AI-genererad kod.
</script>

<template>
  <div class="has-background-white has-text-black" data-theme="light">
    <HeaderBulma></HeaderBulma>
    <main class="is-flex is-flex-direction-column is-justify-content-center is-max-desktop container mt-6 mb-6 gap-10">
      <h1 class="is-size-1 has-text-centered">Bulma</h1>
      <section class="has-background-light container block p-10">
        <h2 class=""><b>Om ramverket:</b></h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia incidunt sequi consequatur praesentium ab
          fugit quos. Eligendi maxime fugiat culpa, doloribus temporibus voluptatum? Sapiente molestiae consequuntur quo
          tempore impedit.
        </p>
      </section>
      <section class="has-background-light is-flex is-flex-direction-column container block gap-5 p-10">
        <h2 class=""><b>Utvärdering av ramverket:</b></h2>
        <p>
          <b>Fördelar:</b>
        </p>
        <p>
          <b>Nackdelar:</b>
        </p>
        <p>
          <b>Slutsats:</b>
        </p>
      </section>
      <TableBulma></TableBulma>
      <FormBulma></FormBulma>
    </main>
    <FooterBulma></FooterBulma>
  </div>
</template>

<style scoped>
.block {
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.04),
    0 10px 25px -3px rgba(0, 0, 0, 0.05);
}
</style>

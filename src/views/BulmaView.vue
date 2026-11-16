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
        <h2 class="is-size-5"><b>Om ramverket</b></h2>
        <p class="has-text-text-20">
          Bulma är ett modernt och lättviktigt CSS-ramverk skapat av <a href="https://jgthms.com/">Jeremy Thomas</a> som
          bygger helt på Flexbox, vilket gör det smidigt att skapa responsiva, flexibla och stilrena layouter utan tunga
          grid-system. En av ramverkets främsta egenskaper är att det är helt fristående från JavaScript och levererar
          endast rena CSS-komponenter och klasser. Detta lämnar funktionaliteten till utvecklaren genom att underlätta
          designfasen av webbplatsen för att säkerställa att logiken får mer fokus under utveckling utan att offra
          designen. Den fullständiga dokumentationen finns tillgänglig på <a href="https://bulma.io/">Bulma.io</a>.
        </p>
      </section>
      <section class="has-background-light is-flex is-flex-direction-column container block p-10">
        <h2 class="is-size-5"><b>Utvärdering av ramverket</b></h2>
        <p class="mt-3"><b>Fördelar:</b></p>
        <ul class="has-text-text-20">
          <li>
            Enkel att komma igång med, räcker att sätta exempelvis klassen "button" på ett button-element så får den en
            standarddesign. Det vill säga mycket enkel och tydlig syntax.
          </li>
          <li class="mt-2">
            Förgjord färgpalett med klasser som primary, text, link, danger och så vidare för att enkelt skapa visuella
            hjälpmedel till användaren utan att skriva någon egen CSS.
          </li>
          <li class="mt-2">
            Komponentbaserat ramverk som gör en grundlig design och layout extremt enkel och snabb att göra då man i
            princip klipper och klistrar in klara komponenter till webbplatsen.
          </li>
        </ul>
        <p class="mt-3"><b>Nackdelar:</b></p>
        <ul class="has-text-text-20">
          <li>
            Krångligt att sätta sin egen touch på designen då Bulmas klasser ofta väger tyngst om man vill skriva egen
            CSS för att överskrida några egenskaper. Detta leder till webbplatser simpla i designen och att man snabbt
            kan se att webbplatsen är skapad med just Bulma.
          </li>
          <li class="mt-2">
            Till skillnad från ett ramverk som Tailwind saknar Bulma många förgjorda klasser för användbara egenskaper.
            Detta leder till att man behöver skriva mer egen CSS för att få designerna exakt som man vill.
          </li>
        </ul>
        <p class="has-text-text-20 mt-3">
          <b>Slutsats:</b><br />
          Bulma är hyfsat nybörjarvänligt med en snabb inlärningskurva på grund av deras tydliga klassnamn. Går otroligt
          snabbt att få fram en användbar och responsiv sida. Med mindre erfarenhet med CSS-ramverk var det en stor
          platå efter detta steg då det var klurigt att lista ut hur man gör webbplatsen till mer än bara en
          "Bulma"-sida. Finns säkerligen dokumenterade sätt att överkomma detta för att sätta sin egen prägel på
          webbplatsen men som sagt verkar den inlärningskurvan mycket brantare än alternativen.
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
ul {
  list-style-type: disc;
  padding-left: 1rem;
}
</style>

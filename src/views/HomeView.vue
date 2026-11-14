<script setup>
import { ref } from 'vue'
import HeaderTailwind from '@/components/HeaderTailwind.vue'
import FooterTailwind from '@/components/FooterTailwind.vue'
</script>

<template>
  <div class="grid min-h-svh w-full grid-rows-[auto_1fr_auto]">
    <HeaderTailwind></HeaderTailwind>
    <main class="mx-auto flex w-[min(100%,70ch)] flex-col p-[5%] sm:p-12">
      <section
        class="bg-card-surface h-fit rounded-2xl border border-[var(--color-border-line)] p-8 shadow-[var(--shadow-card)] sm:p-12"
      >
        <h1 class="text-2xl sm:text-4xl">Laboration 1 - DT193G</h1>
        <p class="my-6 text-lg sm:text-xl">av Ludvig Rosenqvist</p>
        <p class="max-w-[60ch]">
          Syftet med denna laboration är att testa två olika CSS-ramverk och utvärdera för- och nackdelar med att arbeta
          med dessa ramverk. Denna webbplats är skapad med Tailwind för startsidan samt Tailwind-undersidan och Bulma
          används för den tredje undersidan. Respektive undersida är designad med hjälp av ramverkens syntax/klassnamn
          på allt från layout till färger.
        </p>
      </section>
    </main>
    <FooterTailwind></FooterTailwind>
  </div>
</template>

<style scoped></style>

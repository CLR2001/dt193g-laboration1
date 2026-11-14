<script setup>
import { ref } from 'vue'
import HeaderTailwind from '@/components/HeaderTailwind.vue'
import FooterTailwind from '@/components/FooterTailwind.vue'
import TailwindForm from '@/components/TailwindForm.vue'
</script>

<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <HeaderTailwind></HeaderTailwind>
    <main class="mx-auto flex w-[min(100%,70ch)] flex-col items-center gap-8 p-[5%] sm:p-12">
      <h1 class="text-4xl tracking-tight">Tailwind</h1>
      <section class="bg-card-surface border-border-line rounded-2xl border p-8 shadow-(--shadow-card) sm:p-12">
        <h2 class="mb-2 text-xl tracking-tight"><b>Om ramverket:</b></h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia incidunt sequi consequatur praesentium ab
          fugit quos. Eligendi maxime fugiat culpa, doloribus temporibus voluptatum? Sapiente molestiae consequuntur quo
          tempore impedit.
        </p>
      </section>
      <section class="bg-card-surface border-border-line rounded-2xl border p-8 shadow-(--shadow-card) sm:p-12">
        <h2 class="mb-2 text-lg tracking-tight"><b>Utvärdering av ramverket:</b></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor dolores natus totam maiores ipsum
          saepe impedit, explicabo doloribus perspiciatis quidem vel necessitatibus cupiditate quo consectetur mollitia
          quis in nobis.
        </p>
      </section>
      <TailwindForm></TailwindForm>
    </main>
    <FooterTailwind></FooterTailwind>
  </div>
</template>

<style scoped></style>

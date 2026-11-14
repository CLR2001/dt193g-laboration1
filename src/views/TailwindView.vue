<script setup>
import { ref } from 'vue'
import HeaderTailwind from '@/components/HeaderTailwind.vue'
import FooterTailwind from '@/components/FooterTailwind.vue'
import TableTailwind from '@/components/TableTailwind.vue'
</script>

<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <HeaderTailwind></HeaderTailwind>
    <h1 class="m-auto mt-12 text-4xl tracking-tight">Tailwind</h1>
    <main class="mx-auto flex w-full max-w-[65ch] flex-col items-center gap-8 overflow-hidden px-[5%] py-12 sm:px-12">
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
      <TableTailwind></TableTailwind>
    </main>
    <FooterTailwind></FooterTailwind>
  </div>
</template>

<style scoped></style>

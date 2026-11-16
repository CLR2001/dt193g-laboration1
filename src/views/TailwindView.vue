<script setup>
import HeaderTailwind from '@/components/HeaderTailwind.vue'
import FooterTailwind from '@/components/FooterTailwind.vue'
import TableTailwind from '@/components/TableTailwind.vue'
import FormTailwind from '@/components/FormTailwind.vue'
</script>

<template>
  <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
    <HeaderTailwind></HeaderTailwind>
    <main
      class="mx-auto flex h-fit w-full max-w-[68ch] flex-col items-center gap-8 overflow-x-hidden px-[5%] py-12 sm:px-12"
    >
      <h1 class="text-4xl tracking-tight">Tailwind</h1>
      <section class="bg-card-surface border-border-line w-full rounded-2xl border p-8 shadow-(--shadow-card) sm:p-12">
        <h2 class="mb-2 text-xl tracking-tight"><b>Om ramverket</b></h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia incidunt sequi consequatur praesentium ab
          fugit quos. Eligendi maxime fugiat culpa, doloribus temporibus voluptatum? Sapiente molestiae consequuntur quo
          tempore impedit.
        </p>
      </section>
      <section class="bg-card-surface border-border-line w-full rounded-2xl border p-8 shadow-(--shadow-card) sm:p-12">
        <h2 class="mb-2 text-lg tracking-tight"><b>Utvärdering av ramverket</b></h2>
        <p class="mt-3"><b>Fördelar:</b></p>
        <ul class="list-disc pl-4">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <p class="mt-3"><b>Nackdelar:</b></p>
        <ul class="list-disc pl-4">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>
      <TableTailwind></TableTailwind>
      <FormTailwind></FormTailwind>
    </main>
    <FooterTailwind></FooterTailwind>
  </div>
</template>

<style scoped></style>

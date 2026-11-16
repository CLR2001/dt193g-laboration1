<script setup></script>

<template>
  <header>
    <nav class="bg-brand-primary">
      <ul
        class="m-auto flex w-[min(100%,500px)] flex-row items-center justify-around text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-4"
      >
        <li>
          <router-link to="/" class="hover:bg-brand-primary-hover">Hem</router-link>
        </li>
        <li>
          <router-link to="/tailwind" class="hover:bg-brand-primary-hover">Tailwind</router-link>
        </li>
        <li>
          <router-link to="/bulma" class="hover:bg-brand-primary-hover">Bulma</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>

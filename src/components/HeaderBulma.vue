<script setup></script>

<template>
  <header>
    <nav class="has-background-primary">
      <ul class="is-flex is-justify-content-space-around m-auto w-[min(100%,500px)]">
        <li>
          <router-link to="/" class="has-text-black is-inline-block p-4">Hem</router-link>
        </li>
        <li>
          <router-link to="/tailwind" class="has-text-black is-inline-block p-4">Tailwind</router-link>
        </li>
        <li>
          <router-link to="/bulma" class="has-text-black is-inline-block p-4">Bulma</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>

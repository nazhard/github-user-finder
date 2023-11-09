<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="w-full text-sm text-center lg:text-left lg:text-base">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <a href="https://github.com/nazhard/github-user-finder"
       target="_blank">
      GitHub
    </a>
  </nav>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: hsl(215, 13.8%, 34.1%);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
</style>
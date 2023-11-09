<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-[85vh] py-5">
    <RouterView />
  </div>
  <Footer />
</template>

<style>
body {
  line-height: 1.6;
  font-size: 15px;
  font-family: Inter, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a, .blue {
  text-decoration: none;
  color: rgb(20,144,255);
  transition: 0.4s;
}
@media (hover: hover) {
  a:hover {
    background-color: rgba(20,144,255,0.72);
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
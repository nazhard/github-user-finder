<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-[75vh] py-5">
    <RouterView />
  </div>
  <Footer />
</template>
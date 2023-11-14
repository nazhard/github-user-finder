<script setup>
import { ref } from 'vue'

const repo = ref(null);
fetch('https://api.github.com/repos/nazhard/github-user-finder')
  .then(response => response.json())
  .then(data => repo.value = data);
</script>

<template>
  <div mx-7 my-2 grid md:grid-cols-2>
    <div>
      <h1 text-3xl my3>GUFF</h1>
      <p>A simple github user finder.
         This project is just to learn about how Vuejs works.</p>
    </div>
  </div>
</template>
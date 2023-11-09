<script setup>
import { ref } from 'vue'
import EmbedCard from '../components/EmbedCard.vue'

const repo = ref(null);
fetch('https://api.github.com/repos/nazhard/github-user-finder')
  .then(response => response.json())
  .then(data => repo.value = data);
</script>

<template>
  <div class="about mx-10 my-2">
    <h1 class="text-3xl my-3">GUFF</h1>
    <p>A simple github user finder.
       This project is just to learn about how Vuejs works.</p>
    <EmbedCard
      :title="repo.full_name"
      :stars="repo.stargazers_count"
      :lang="repo.language"
      :url="repo.html_url"
      :desc="repo.description"
    />
  </div>
</template>
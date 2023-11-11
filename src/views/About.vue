<script setup>
import { ref } from 'vue'
import EmbedCard from '../components/EmbedCard.vue'

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
    
    <div>
      <EmbedCard
        :title="repo.full_name"
        :stars="repo.stargazers_count"
        :lang="repo.language"
        :url="repo.html_url"
        :desc="repo.description"
      />
    </div>
  </div>
</template>
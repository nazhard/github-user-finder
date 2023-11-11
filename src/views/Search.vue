<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import ResultsCard from '../components/SearchResultsCard.vue'

const route = useRoute()
let query = route.query.q

const results = ref(null)
fetch(`https://api.github.com/search/users?q=${query}&per_page=10`)
  .then(response => response.json())
  .then(data => results.value = data.items)
</script>

<template>
  <div class="mx-5 my-2">
    <SearchBar/>
    <h1 class="text-2xl my-2">{{ 'Search results for ' + query }}</h1>
    <div v-for="r in results" class="inline-block m-4">
      <ResultsCard
        :username="r.login"
        :avatar="r.avatar_url"
      />
    </div>
  </div>
</template>
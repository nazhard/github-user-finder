<script setup>
defineProps({
  username: String,
  avatar: String,
  url: String
})
</script>

<template>
  <a :href="`/users/${username}`">
    <img class="w-14 h-14 rounded-md mx-auto" :src="avatar" />
    <h3 class="text-lg">{{ username }}</h3>
  </a>
</template>
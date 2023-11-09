<script setup>
defineProps({
  title: String,
  lang: String,
  url: String,
  desc: String,
  stars: Number || null
})
</script>

<template>
  <a :href="url" class="text-inherit">
    <div class="shadow-md hover:shadow-none p-3 my-3 transition-shadow duration-500">
      <h3 class="text-xl my-1">{{title}}</h3>
      <p class="py-3">{{desc}}</p>
      <p>{{lang}} • {{stars}} stars</p>
    </div>
  </a>
</template>
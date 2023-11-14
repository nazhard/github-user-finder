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
  <a :href="url" text-inherit>
    <div border-3 p3 my3 relative>
      <div i-tabler:folder-share w7 h7 absolute left-2 top-3></div>
      <h3 text-xl inline-block ml7>{{title}}</h3>
      <p py-3>{{desc}}</p>
      <p>{{lang}} ~ {{stars}} stars</p>
    </div>
  </a>
</template>
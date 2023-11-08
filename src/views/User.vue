<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let uId = route.params.u

const users = ref(null);
fetch(`https://api.github.com/users/${uId}`)
  .then(response => response.json())
  .then(data => users.value = data);
</script>

<template>
  <!-- Header -->
  <header class="w-full">
    <img
      :src="users.avatar_url"
      class="w-24 h-24 rounded-full my-2"
    />
    <h1 class="text-2xl">{{users.name}}</h1>
    <p class="text-sm"><a :href="users.html_url"> @{{users.login}}</a></p>

    <div class="my-4">
      <p>{{users.bio}}</p>

      <ul class="my-2">
        <li>
          <a :href="`https://x.com/${users.twitter_username}`">
            @{{users.twitter_username}}
          </a>
        </li>
        <li>
          <a :href="`https://${users.blog}`">{{users.blog}}</a>
        </li>
      </ul>
      <p>{{users.location}}</p>
      <p>{{users.followers}} followers • {{users.following}} following</p>
      <p>{{users.public_repos + " public repos"}} - {{users.public_gists + " public gists"}}</p>
    </div>
  </header>
  
  <!--- Main Body -->
  <main></main>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import EmbedCard from '../components/EmbedCard.vue'

const route = useRoute()
let uId = route.params.u

const users = ref(null);
fetch(`https://api.github.com/users/${uId}`)
  .then(response => response.json())
  .then(data => users.value = data);
  
const repos = ref(0)
fetch(`https://api.github.com/users/${uId}/repos?per_page=5&sort=last_update`)
  .then(response => response.json())
  .then(data => repos.value = data);

const followers = ref(0)
fetch(`https://api.github.com/users/${uId}/followers?per_page=15`)
  .then(response => response.json())
  .then(data => followers.value = data);
</script>

<template>
  <!-- Header -->
  <header class="grid grid-cols-1 md:grid-cols-3 w-full px-7 py-3 shadow-md">
    <div>
      <img
        :src="users.avatar_url"
        class="w-full h-auto px-3 md:px-10 md:col-span-1"
      />
    </div>
    <div class="my-4 md:col-span-2">
      <h1 class="text-2xl">{{users.name}}
        <a class="text-sm" :href="users.html_url">
          {{ users.login ? ' @' + users.login : 'There is no user named: ' + uId }}
        </a>
      </h1>
      <p>{{users.bio}}</p>

      <ul class="my-2">
        <li>
          <a :href="`https://x.com/${users.twitter_username}`">
            {{ users.twitter_username ? '@' + users.twitter_username : null }}
          </a>
        </li>
        <li>
          <a :href="`https://${users.blog}`">{{users.blog || null}}</a>
        </li>
      </ul>
      <p>{{users.location || null}}</p>
      <p>{{users.followers + ' followers' }} • {{users.following + ' following'}}</p>
      <p>{{users.public_repos + " public repos"}}</p>
    </div>
  </header>
  
  <!--- Main Body -->
  <main class="grid grid-cols-1 md:grid-cols-5">
    <div class="my-5 px-3 shadow-md md:col-span-3">
      <a class="text-sm" :href="`${users.html_url}?tab=repositories`">
        <h2 class="text-2xl my-3">Repository</h2>
      </a>
      <div v-for="repo in repos">
        <EmbedCard
          :title="repo.name"
          :stars="repo.stargazers_count"
          :lang="repo.language"
          :url="repo.html_url"
          :desc="repo.description"
        />
      </div>
    </div>
    
    <div class="my-5 px-2 shadow-md md:col-span-2">
      <h2 class="text-2xl my-3">Followers</h2>
      <div v-for="f in followers" class="inline-block mx-1.5">
        <a class="hover:bg-white" :href="f.html_url">
          <img class="w-16 h-auto rounded-md" :src="f.avatar_url"/>
        </a>
      </div>
    </div>
  </main>
</template>
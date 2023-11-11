<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import EmbedCard from '../components/RepodEmbed.vue'

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
const orgs = ref(0)
fetch(`https://api.github.com/users/${uId}/orgs`)
  .then(response => response.json())
  .then(data => orgs.value = data);
</script>

<template>
  <!-- Header -->
  <div grid grid-cols-1 md:grid-cols-3 w-full px7 py3 shadow-md>
    <div>
      <img
        :src="users.avatar_url"
        class="w-full h-auto px3 md:px10 md:col-span-1"
      />
    </div>
    <div my4 md:col-span-2>
      <h1 text-2xl>{{users.name}}
        <a class="text-sm" :href="users.html_url">
          {{ users.login ? ' @' + users.login : 'There is no user named: ' + uId }}
        </a>
      </h1>
      <p>{{users.bio}}</p>

      <div my2 relative>
        <a v-if="users.twitter_username" :href="`https://x.com/${users.twitter_username}`">
          <div i-tabler:brand-twitter absolute top-1></div>
          <p w-fit ml4 md:ml5>{{ '@' + users.twitter_username }}</p>
        </a>
        <a v-if="users.blog" :href="`https://${users.blog}`">
          <div i-tabler:link absolute top-7 md:top-8></div>
          <p w-fit ml4 md:ml5>{{ 'https://' + users.blog }}</p>
        </a>
      </div>
      <p>{{users.location || null}}</p>
      <p>{{users.followers + ' followers' }} • {{users.following + ' following'}}</p>
      <p>{{users.public_repos + " public repos"}}</p>
    </div>
  </div>
  
  <!--- Main Body -->
  <main grid grid-cols-1 md:grid-cols-5>
    <div my5 px3 md:col-span-3>
      <a text-sm :href="`${users.html_url}?tab=repositories`">
        <h2 text-2xl my-3>Repository</h2>
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
    
    <div my-5 px-2 shadow-md border-t-2 md:col-span-2>
      <h2 text-2xl my3>Followers</h2>
      <div v-for="f in followers" class="inline-block mx-1.5">
        <a hover:bg-white :href="f.html_url">
          <img w-16 h-auto rounded-md :src="f.avatar_url"/>
        </a>
      </div>
      
      <div v-if="users.type == 'User'">
        <h2 text-2xl my3>Organizations</h2>
        <div v-for="o in orgs" inline-block mx-1.5>
          <a :href="`https://github.com/${o.login}`">
            <img w16 h-auto rounded-sm :src="o.avatar_url"/>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
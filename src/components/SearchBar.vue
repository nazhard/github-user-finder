<template>
  <form class="relative max-w-2xl">
    <input
      type="text"
      name="search"
      v-model="search"
      class="w-full outline-none border-0 border-b-2 shadow p-2"
    >
    <button
      type="submit"
      @click.stop.prevent="submit()"
      class="absolute right-5 w-5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-auto w-10" viewBox="0 0 20 20">
        <path fill="currentColor" d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057l-4.126-4.127A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9Z"/>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      search : null
    }
  },
  methods: {
    submit(){
//      this.$router.push("/users/"+this.search);
      this.$router.push({ path: '/search', query: { q: this.search } });
    }
  }
}
</script>
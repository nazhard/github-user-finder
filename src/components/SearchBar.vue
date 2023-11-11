<template>
  <form relative max-w-35rem>
    <input
      type="text"
      name="q"
      v-model="search"
      w-full outline-none border0 shadow-md p2
    >
    <button
      type="submit"
      @click="submit()"
      absolute right-5 w-5>
      <div i-tabler-search w-10 h-10></div>
    </button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      search: null
    }
  },
  methods: {
    submit(){
      this.$router.replace({ path: '/search', query: { q: this.search } });
    }
  }
}
</script>
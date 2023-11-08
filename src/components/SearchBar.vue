<template>
  <form>
    <input type="text" name="search" v-model="search">
    <button type="submit" @click.stop.prevent="submit()">Submit</button>
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
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/users/"+this.search);
    }
  }
}
</script>
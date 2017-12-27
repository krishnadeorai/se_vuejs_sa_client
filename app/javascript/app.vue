<template>
  <div id="app">
    <nav>
      <div class="container">
        
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    showLoader () {
      return this.$store.state.showLoader
    }
  }
}
</script>

<style>
</style>

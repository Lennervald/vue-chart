<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
export default {
    data () {
      return {
        title: "App.vue: is just the container for all vues"
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';
</style>
<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    data () {
      return {
        title: 'Experimenting with Routing'
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';
</style>
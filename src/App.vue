<template>
  <div id="app">
  <h1>{{title}}</h1>
  <div class="temp-header">
    <h1>{{title}}</h1>
    <img class="logo" src="./assets/images/oddhill-logo.jpg">
  </div>

<!--     <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Odd Hill Pre-LIA Project'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'main.scss'
</style>

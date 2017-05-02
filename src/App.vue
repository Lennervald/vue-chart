<template>
  <div id="app">
    <nav-header></nav-header>
    <app-project :projects="projects"></app-project>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Project from './components/Project.vue'
export default {
    data () {
      return {
        projects: [
        { "id":1, "name":"Project A+", "client":200, "internal":400, "other":75, "total": 675}
        ]
      }
    },
    components: {
      appProject: Project
    }
  }
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';
</style>
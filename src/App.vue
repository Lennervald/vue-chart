<template>
  <div class="app">
    <app-dynamic-bg></app-dynamic-bg>
    <app-wrapper></app-wrapper>
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
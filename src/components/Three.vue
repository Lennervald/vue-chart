<template>
  <div class="views">
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        name: 'component three'
      }
    }
  }
</script>

<style scoped>
  .views {
    background-color: #36295E;
  }
</style>
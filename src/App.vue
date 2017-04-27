<template>
  <div id="app">
    <div class="container">
      <br>
      <b-alert show>
        {{title}}
      </b-alert>
    </div>
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
  @import 'main.scss';
</style>

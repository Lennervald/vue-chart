<template>
    <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <div class="middle-nav">
            <img class="icons" src="../../assets/images/icons/arrow-left.png" alt="star">
          </div>
        </div>
        <div class="col-8">
          <router-view></router-view> 
        </div>
        <div class="col-2">
          <div class="middle-nav">
            <img class="icons" src="../../assets/images/icons/arrow-right.png" alt="star">
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          title: 'MIDDLE'
        }
      },
      methods: {
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../sass/main.scss';
</style>
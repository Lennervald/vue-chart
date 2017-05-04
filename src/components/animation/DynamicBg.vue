<template>
  <div>
    <div class="app-moving-backgrounds-body"> 
      <!-- HERE GOES ONLY ALL MOVING COLOR DIVS  -->
      <div :class="div1"></div>
      <div :class="div2"></div>
      
    </div>
</div>

</template>

<script>
export default {
    data () {
      return {
        div1: 'color-div-1-off',
        div2: 'color-div-2-off'
      }
    },
    created() {
        this.animateOne()
    },
    methods: {
      animateOne(){
        setTimeout(()=> {
          this.div1 = 'color-div-1';
          this.div2 = 'color-div-2';
        }, 100);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../sass/main.scss';
</style>
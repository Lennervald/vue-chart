<template>
  <div>
    <div class="app-dynamic-bg-body"> 
      <!-- HERE GOES ONLY ALL MOVING COLOR DIVS  -->
      <div :class="div1">
        <div class="inside-color1"></div>
        <div class="inside-color2"></div>
      </div>
    </div>
</div>

</template>

<script>
export default {
    data () {
      return {
        div1: 'color-div-1-off'
      }
    },
    created() {
        this.animateOne()
    },
    methods: {
      animateOne(){
        setTimeout(()=> {
          this.div1 = 'color-div-1';
        }, 100);
      }
    }
  }
</script>
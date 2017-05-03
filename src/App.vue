<template>
  <div id="app">
      <!-- <router-view></router-view> -->
      <button class="btn btn-primary slider-menu"
        @click="next">Toggle Components</button>
      <transition name="fade">
        <component :is="selectedComponent"></component>
      </transition>
  </div>
</template>

<script>
import One from './components/One.vue';
import Two from './components/Two.vue';
import Three from './components/Three.vue';

export default {
  components: {
    appOne: One,
    appTwo: Two,
    appThree: Three 
  },
  data: function() {
    return {
      selectedComponent: 'app-one'
    }
  },
  methods: {
    next(){
      switch(this.selectedComponent) {
        case 'app-one':
          this.selectedComponent = 'app-two';
          break;
        case 'app-two':
          this.selectedComponent = 'app-three';
          break;
        default:
          this.selectedComponent = 'app-one';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }
</style>
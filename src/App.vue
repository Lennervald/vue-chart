<template>
  <div id="app">
      <!-- <router-view></router-view> -->
      <button class="btn btn-primary slider-menu" @click="next">Toggle Components</button>
      <transition name="slide">
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
      selectedComponent: 'app-one',
      // when sliding to a new component, 
      // set the background-color of #app to the same as new component
      // app-one:#722FBC 
      // app-two: #F9418C
      // app-three: #36295E
    }
  },
  methods: {
    next(){
      switch(this.selectedComponent) {
        case 'app-one':
          this.selectedComponent = 'app-two';
          app.style.backgroundColor = '#F9418C';
          break;
        case 'app-two':
          this.selectedComponent = 'app-three';
          app.style.backgroundColor = '#36295E';
          break;
        default:
          this.selectedComponent = 'app-one';
          app.style.backgroundColor = '#722FBC';
          
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';

  .slide-enter {

  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100vw);
    }
  }
</style>
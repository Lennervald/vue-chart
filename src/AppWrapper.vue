<template>
  <div>
    <div class="container-fluid app-wrapper-body">
    <div class="row">
      <div class="col-12">
        <div class="head-spacer-1"></div>
        <!-- HERE GOES THE HEAD SPACE  -->
      </div>
    </div>
      <div class="row">
        <div class="col-12">

          <!-- HERE GOES ALL THE MAIN CONTENT aka THE SAME AS HOW WE USED THE APP.VUE  -->
          <button class="btn btn-primary slider-menu" @click="next">Toggle Components</button>
          <transition name="slide">
            <component :is="selectedComponent"></component>
          </transition>
        </div>
      </div>
    </div>
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
          // app.style.backgroundColor = '#F9418C';
          break;
        case 'app-two':
          this.selectedComponent = 'app-three';
          // app.style.backgroundColor = '#36295E';
          break;
        default:
          this.selectedComponent = 'app-one';
          // app.style.backgroundColor = '#722FBC';
          
      }
    }
  }
}
</script>
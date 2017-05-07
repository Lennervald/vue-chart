<template>
  <div class="views">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        <h1>{{name}}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>{{name}}</p>
              <a @click="subpage1">detail 1</a>
              <a @click="subpage2">detail 2</a>
              <a @click="subpage3">detail 3</a>
              <transition name="subpages">
                <component :is="selectedSubpage"></component>
              </transition>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Detail1 from './subprojects/Detail1.vue';
import Detail2 from './subprojects/Detail2.vue';
import Detail3 from './subprojects/Detail3.vue';

export default {
  components: {
    detailOne: Detail1,
    detailTwo: Detail2,
    detailThree: Detail3 
  },
  data: function() {
    return {
      name: 'Page two',
      selectedSubpage: 'detail-one'
    }
  },
  methods: {
    subpage1(){
      this.selectedSubpage = 'detail-one';
    },
    subpage2(){
      this.selectedSubpage = 'detail-two';
    },
    subpage3(){
      this.selectedSubpage = 'detail-three';
    }
  }
}
</script>
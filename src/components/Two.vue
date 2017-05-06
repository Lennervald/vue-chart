<template>
  <div class="views">
    <p>{{name}}</p>
        <a @click="subpage1">detail 1</a>
        <a @click="subpage2">detail 2</a>
        <a @click="subpage3">detail 3</a>
        <transition name="subpages">
          <component :is="selectedSubpage"></component>
        </transition>
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

<style scoped>
  .views {
    /*background-color: #F9418C;*/
  }
</style>
<template>
  <div id="app">

    <div class="container-fluid">
      <br>
      <b-alert show>
        {{title}}
      </b-alert>
      <img src="./assets/images/logo.png">
    </div>
    <div>
      <p>{{runFunc()}}</p>
      <p>{{subtitle}}</p>
      <p class="nice-numbs"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Odd Hill Pre-LIA Project',
      subtitle: ''
    }
  },
  methods: {
    runFunc(){
      let niceArray = ['One', 'Two', 'Three'];
      this.subtitle = 'This part below is generated with jQuery';
      $(() => {
        niceArray.forEach(function(val){
          $('.nice-numbs').append('<li>' + val + '</li>');
          $('li').css({'list-style':'none', 'color': '#41B883'});
        });
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  @import './sass/main.scss';
</style>

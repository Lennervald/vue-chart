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
      	<div class="proj-jumbotron">
            <div class="container">
                <h2>{{name}}</h2>
                <h3>{{lead}}</h3>
                <p>Here goes the Chart</p>
            </div>
       	</div>
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
	      name: 'Project1',
	      lead: 'Created in Vue.js 2'
	    }
	  },
	  methods: {
	  }
	}
</script>

<style lang="scss" scoped>
  @import '../../sass/main.scss';
</style>
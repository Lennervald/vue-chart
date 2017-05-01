<template>
<div>
<div class="container-fluid">
  <div class="row">
    <div class="col-2 col-lg-3 col-xl-4">
      <div class="middle-nav">
        <img class="icons" src="../../assets/images/icons/arrow-left.png" alt="star">
      </div>
    </div>
    <div class="col-8 col-lg-6 col-xl-4">
      	<div class="proj-jumbotron">
            <div class="container">
              <br><br>
                <h3>{{projectName}}</h3>
                <h4>{{lead}}</h4>
                <doughnut-chart-js></doughnut-chart-js>
                <hr>
                <div class="hourSummary">
                  <h5>Hours Spent: {{totalHours}}</h5>
                </div>
            </div>
       	</div>
   	</div>
    <div class="col-2 col-lg-3 col-xl-4">
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
	      projectName: 'Project1',
	      lead: 'Created in Vue.js 2',
        client: 'Client Hours',
        internal: 'Internal Hours',
        other: 'Other',
        totalHours: 1023
	    }
	  },
	  methods: {
	  }
	}
</script>

<style lang="scss" scoped>
  @import '../../sass/main.scss';
</style>
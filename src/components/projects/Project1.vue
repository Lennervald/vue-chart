<template>
<div>
<div class="container-fluid">
  <div class="row">
    <div class="col-3">
      <div class="middle-nav">
        <img class="icons" src="../../assets/images/icons/arrow-left.png" alt="star">
      </div>
    </div>
    <div class="col-6">
      	<div class="proj-jumbotron">
            <div class="container">
              <br><br>
                <h3>{{projectName}}</h3>
                <h4>{{lead}}</h4>
                <div class="chart-empty-box">
                    <p>...Here goes the Chart...</p>
                </div>
                <div class="summary">
                  <div class="color-box client"></div>
                  <h6 class="color-box-title">{{client}}</h6>
                  <div class="color-box internal"></div>
                  <h6 class="color-box-title">{{internal}}</h6>
                  <div class="color-box other"></div>
                  <h6 class="color-box-title">{{other}}</h6>
                </div>
                <hr>
                <div class="hourSummary">
                  <h5>Hours Spent: {{totalHours}}</h5>
                </div>
            </div>
       	</div>
   	</div>
    <div class="col-3">
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
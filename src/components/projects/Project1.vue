<template>
	<div>
		<div class="proj-jumbotron">
			<div class="container">
				<h2>{{name}}</h2>
				<h3>{{lead}}</h3>
			    <p>Here goes the Chart</p>
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
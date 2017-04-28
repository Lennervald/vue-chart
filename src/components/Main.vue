<template>
	<div>
		<nav-header></nav-header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      title: 'Home.Vue: this is the component'
	    }
	  },
	  methods: {
	  }
	}
</script>
<template>
    <div class="htoggle">
        <b-navbar toggleable type="inverse" >
            <b-nav-toggle  target="nav_collapse"></b-nav-toggle>
            <b-link class="navbar-brand" to="#">
                <span>{{title}}</span>
            </b-link>
            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar class="links">
                    <b-nav-item href="/#/proj1">Project 1</b-nav-item>
                    <b-nav-item href="/#/form">Add a new Project</b-nav-item>
                    <b-nav-item href="/#/chart">A chart in action</b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          title: ' = '
        }
      },
      methods: {
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../sass/main.scss';
</style>
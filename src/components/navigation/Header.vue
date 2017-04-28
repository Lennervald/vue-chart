<template>
    <div>
        <b-navbar toggleable type="inverse" variant="success">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-link class="navbar-brand" to="#">
                <span>{{title}}</span>
            </b-link>
            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar>
                    <b-nav-item href="/#/proj1">Project 1</b-nav-item>
                    <b-nav-item href="/#/proj2">Project 2</b-nav-item>
                    <b-nav-item href="/#/proj3">Project 3</b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          title: 'Resposive Header (will be removed)'
        }
      },
      methods: {
      }
    }
</script>
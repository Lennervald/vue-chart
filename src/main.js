// imports
import Vue from 'vue';
import App from './App.vue';

// requires
require('./less/main.less')

new Vue({
  el: '#app',
  render: h => h(App)
});

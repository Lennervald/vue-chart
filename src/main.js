import App from './App.vue';
import Vue from 'vue';

// Add booostrap-vue
import BootstrapVue from 'bootstrap-vue';
// and styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
});

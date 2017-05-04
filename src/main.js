import Vue from 'vue';
import VueResource from 'vue-resource';

// The vues
import App from './App.vue';
import AppWrapper from './AppWrapper.vue';
import DynamicBg from './components/animation/DynamicBg.vue';

// Add booostrap-vue-functionality
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import main styles (scss)
import './sass/main.scss';

Vue.use(VueResource);
Vue.use(BootstrapVue);  

Vue.component('app-wrapper', AppWrapper);
Vue.component('app-dynamic-bg', DynamicBg);

new Vue({
  el: '.app',
  render: h => h(App)
});
import Vue from 'vue';
import { routes } from './routes';

// The vues
import App from './App.vue';

// Add booostrap-vue-functionality
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import main styles (scss)
import './sass/main.scss';

// Add router-functionality
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// Import our components
// import One from './components/One.vue';
// import Two from './components/Two.vue';
// import Three from './components/Three.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

// Register our components globaly
// Vue.component('app-one', One);
// Vue.component('app-two', Two);
// Vue.component('app-three', Three);

const router = new VueRouter({
	routes
});

Vue.use(BootstrapVue);  

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
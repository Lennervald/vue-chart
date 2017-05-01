import Vue from 'vue';

// The vues
import App from './App.vue';
import Header from './components/navigation/Header.vue';
import Footer from './components/navigation/Footer.vue';
import Chart2 from './components/Chart2.vue';
import { routes } from './routes';

// Add booostrap-vue-functionality
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Add router-functionality
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes
});

Vue.component('nav-header', Header);
Vue.component('nav-footer', Footer);
Vue.component('doughnut-chart-js', Chart2);

Vue.use(BootstrapVue);  

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
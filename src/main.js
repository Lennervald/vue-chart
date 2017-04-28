import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// The vues
import App from './App.vue';
import Main from './components/Main.vue';
import Header from './components/navigation/Header.vue';
import { routes } from './routes';

// Add booostrap-vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes
});

Vue.component('main-view', Main);
Vue.component('nav-header', Header);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
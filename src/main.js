window.axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8080/api/v1';
import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueMask from 'v-mask'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app');

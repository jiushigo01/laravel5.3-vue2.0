import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router/index';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
  routes: routes
});

/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
	components: {
		App
	},
  router: router
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './temaplates/App.vue';
import Home from './temaplates/pages/Home.vue';

const Works = () => import('./temaplates/pages/Works.vue');
const Services = () => import('./temaplates/pages/Services.vue');
const Contacts = () => import('./temaplates/pages/Contacts.vue');

import { store } from './store'

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home},
	{ path: '/services', component: Services},
	{ path: '/work/:id', name: 'work', component: Works },
	{ path: '/contacts', component: Contacts }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	el: 'app',
	router,
	store,
	render: h => h(App)
});

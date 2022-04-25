import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from './views/Users.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '',
			name: 'users',
			component: Users,
			meta: {
				title: 'My users'
			}
		}
	]
});
export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Canban from '../views/Canban.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Canban',
    component: Canban,
  },
  {
    path: '/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

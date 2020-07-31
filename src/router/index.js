import Vue from 'vue';
import VueRouter from 'vue-router';
import Discover from '../views/Discover.vue';
import Project from '../views/Project/Project.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/discover',
    name: 'Discover',
    component: Discover,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;

Vue.use(VueRouter);

import { createRouter, createWebHistory } from 'vue-router';
import brandView from '../views/BrandView.vue';
import contactView from '../views/ContactView.vue';
import usView from '../views/UsView.vue';

const routes = [
  {
    path: '/',
    name: 'brand',
    component: brandView
  },
  {
    path: '/us',
    name: 'us',
    component: usView

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

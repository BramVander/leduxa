import { createRouter, createWebHistory } from 'vue-router';
import brandView from '../views/BrandView.vue';
import contactView from '../views/ContactView.vue';
import usView from '../views/UsView.vue';
import testView from '../views/TestView.vue';

import BoxComponent from '../components/UI/BoxComponent.vue';

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
    // for lazy-loading when the route is visited:
    // component: () => import(/* webpackChunkName: "about" */ '../views/UsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView, BoxComponent
  },
  {
    path: '/test',
    name: 'test',
    component: testView
  },
  
]

const router = createRouter({
  history: createWebHistory('/'),
  mode: 'history',
  routes
})

export default router
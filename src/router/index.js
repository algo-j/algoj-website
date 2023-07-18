import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LegalsMentions from '../views/Legals/LegalsMentions.vue';
import Research from '../views/Research.vue';
// import NotFound from '../views/404.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mentionslegales',
    name: 'LegalsMentions',
    component: LegalsMentions,
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
  },
  /* {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }, */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

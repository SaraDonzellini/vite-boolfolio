import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectCard from './pages/ProjectCard.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectCard
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
  ]
});

export { router };
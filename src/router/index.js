import { createRouter, createWebHistory } from 'vue-router';
import LayoutAdmin from '../layouts/LayoutAdmin.vue';
import HomeView from '../views/HomeView.vue';
//Painel
import Dashboard from '../views/admin/Dashboard.vue';
import Users from '../views/admin/Users.vue';
import Dietas from '../views/admin/Dietas.vue';
import Especies from '../views/admin/Especies.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      component: LayoutAdmin,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'dietas',
          name: 'dietas',
          component: Dietas
        },
        {
          path: 'especies',
          name: 'especies',
          component: Especies
        },
        {
          path: 'users',
          name: 'users',
          component: Users
        },
      ]
    }
  ]
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import LayoutAdmin from '../layouts/LayoutAdmin.vue';
import HomeView from '../views/HomeView.vue';



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
          component: () => import('../views/admin/Dashboard.vue')
        },
        {
          path: 'dietas',
          name: 'dietas',
          component: () => import('../views/admin/Dietas.vue')
        },
        {
          path: 'especies',
          name: 'especies',
          component: () => import('../views/admin/Especies.vue')
        },
        {
          path: 'dominios',
          name: 'dominios',
          component: () => import('../views/admin/Dominios.vue')
        },
        {
          path: 'clados',
          name: 'clados',
          component: () => import('../views/admin/Clados.vue')
        },
        {
          path: 'familias',
          name: 'familias',
          component: () => import('../views/admin/Familias.vue')
        },
        {
          path: 'subfamilias',
          name: 'subfamilias',
          component: () => import('../views/admin/SubFamilias.vue')
        },
        {
          path: 'filos',
          name: 'filos',
          component: () => import('../views/admin/Filos.vue')
        },
        {
          path: 'generos',
          name: 'generos',
          component: () => import('../views/admin/Generos.vue')
        },
        {
          path: 'reinos',
          name: 'reinos',
          component: () => import('../views/admin/Reinos.vue')
        },
        {
          path: 'metodos-de-locomocaos',
          name: 'metodoslocomocaos ',
          component: () => import('../views/admin/MetodosLocomocaos.vue')
        },
        {
          path: 'periodos',
          name: 'periodos',
          component: () => import('../views/admin/Periodos.vue')
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('../views/admin/Users.vue')
        },
        {
          path: 'cadastrar/dieta',
          name: 'cadastrar-dieta',
          component: () => import('../views/admin/cadastrar/Dieta.vue')
        },
        {
          path: 'cadastrar/especie',
          name: 'cadastrar-especie',
          component: () => import('../views/admin/cadastrar/Especie.vue')
        },
        {
          path: 'cadastrar/dominio',
          name: 'cadastrar-dominio',
          component: () => import('../views/admin/cadastrar/Dominio.vue')
        },
        {
          path: 'cadastrar/familia',
          name: 'cadastrar-familia',
          component: () => import('../views/admin/cadastrar/Familia.vue')
        }
      ]
    }
  ]
});

export default router;

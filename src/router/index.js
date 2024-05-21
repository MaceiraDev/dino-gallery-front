import { createRouter, createWebHistory } from 'vue-router';
import LayoutAdmin from '../layouts/LayoutAdmin.vue';
import HomeView from '../views/HomeView.vue';
//Painel
import Dashboard from '../views/admin/Dashboard.vue';
import Users from '../views/admin/Users.vue';
import Dietas from '../views/admin/Dietas.vue';
import Especies from '../views/admin/Especies.vue';
import Dominios from '../views/admin/Dominios.vue';
import Clados from '../views/admin/Clados.vue';
import Familias from '../views/admin/Familias.vue';
import SubFamilias from '../views/admin/SubFamilias.vue';
import Filos from '../views/admin/Filos.vue';
import Generos from '../views/admin/Generos.vue';
import Reinos from '../views/admin/Reinos.vue';
import MetodosLocomocaos from '../views/admin/MetodosLocomocaos.vue';
import Periodos from '../views/admin/Periodos.vue';


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
          path: 'dominios',
          name: 'dominios',
          component: Dominios
        },
        {
          path: 'clados',
          name: 'clados',
          component: Clados
        },
        {
          path: 'familias',
          name: 'familias',
          component: Familias
        },
        {
          path: 'subfamilias',
          name: 'subfamilias',
          component: SubFamilias
        },
        {
          path: 'filos',
          name: 'filos',
          component: Filos
        },
        {
          path: 'generos',
          name: 'generos',
          component: Generos
        },
        {
          path: 'reinos',
          name: 'reinos',
          component: Reinos
        },
        {
          path: 'metodos-de-locomocaos',
          name: 'metodoslocomocaos ',
          component: MetodosLocomocaos
        },
        {
          path: 'periodos',
          name: 'periodos',
          component: Periodos
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

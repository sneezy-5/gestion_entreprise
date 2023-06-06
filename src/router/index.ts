import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@/_helpers/auth-guard';
import {checkIfLogged} from '@/_helpers/auth-check';
import { accountService } from '@/_services';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          name: "dashboard",
          component: () => import('../pages/dashboard.vue'),
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
        },
        {
          path: 'employes',
          component: () => import('../pages/employes/Employes.vue'),
        },
        {
          path: 'create-employe',
          component: () => import('../pages/employes/createEmploye.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: '/auth/login',
          name: "login",
          component: () => import('../pages/login.vue'),
        },
        
        // {
        //   path: 'register',
        //   component: () => import('../pages/register.vue'),
        // },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})


// middleware pour verouller le dashboard user
router.beforeEach((to, from, next) => {
  if(to.matched[0].children[0].name == 'dashboard'){
    authGuard()
    //checkIfLogged();
  }

  if(to.matched[0].name == 'login'){
    checkIfLogged();
  }


  next()
})
export default router

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
          path: 'create-employee',
          component: () => import('../pages/employes/createEmploye.vue'),
        },
        {
          meta: {
            title: "Edit Employee",
          },
          path: "/edit-employe/:id(\\d+)",
          name: "edit-employe",
          component: () => import("../pages/employes/employeeEdit.vue"),
        },
        {
          path: 'contract',
          component: () => import('../pages/contracts/contract.vue'),
        },
        {
          path: 'create-contract',
          component: () => import('../pages/contracts/createContract.vue'),
        },
        {
          meta: {
            title: "Edit Contract",
          },
          path: "/edit-contract/:id(\\d+)",
          name: "edit-contract",
          component: () => import("../pages/contracts/contractEdit.vue"),
        },
        {
          path: 'presence',
          component: () => import('../pages/presences/presences.vue'),
        },
        {
          path: 'create-presence',
          component: () => import('../pages/presences/createPresence.vue'),
        },
        {
          meta: {
            title: "Edit presence",
          },
          path: "/edit-presence/:id(\\d+)",
          name: "edit-presence",
          component: () => import("../pages/presences/presenceEdit.vue"),
        },
        {
          path: 'avance',
          component: () => import('../pages/avances/avances.vue'),
        },
        {
          path: 'create-avance',
          component: () => import('../pages/avances/createAvance.vue'),
        },
        {
          meta: {
            title: "Edit avance",
          },
          path: "/edit-avance/:id(\\d+)",
          name: "edit-avance",
          component: () => import("../pages/avances/avanceEdit.vue"),
        },
        {
          path: 'primes',
          component: () => import('../pages/primes/primes.vue'),
        },
        {
          path: 'create-prime',
          component: () => import('../pages/primes/createPrime.vue'),
        },
        {
          meta: {
            title: "Edit prime",
          },
          path: "/edit-prime/:id(\\d+)",
          name: "edit-prime",
          component: () => import("../pages/primes/primeEdit.vue"),
        },
        {
          path: 'conges',
          component: () => import('../pages/conges/conges.vue'),
        },
        {
          path: 'create-conge',
          component: () => import('../pages/conges/createConge.vue'),
        },
        {
          meta: {
            title: "Edit conge",
          },
          path: "/edit-conge/:id(\\d+)",
          name: "edit-conge",
          component: () => import("../pages/conges/congeEdit.vue"),
        },
        {
          path: 'payslips',
          component: () => import('../pages/payslips/payslips.vue'),
        },
        {
          meta: {
            title: "create Bulltin",
          },
          path: "/create-payslip",
          name: "create-payslip",
          component: () => import("../pages/payslips/createPayslip.vue"),
        },
        {
          meta: {
            title: "generate Bulltin",
          },
          path: "/payslip-generate",
          name: "payslip-generate",
          component: () => import("../pages/payslips/createPayslips.vue"),
        },
        {
          meta: {
            title: "Edit Bulltin",
          },
          path: "/edit-payslip/:id(\\d+)",
          name: "edit-payslip",
          component: () => import("../pages/payslips/payslipEdit.vue"),
        },
        {
          path: 'comptes',
          component: () => import('../pages/comptecompta/comptes.vue'),
        },
        {
          path: 'create-compte',
          component: () => import('../pages/comptecompta/createCompte.vue'),
        },
        {
          meta: {
            title: "Edit compte",
          },
          path: "/edit-compte/:id(\\d+)",
          name: "edit-compte",
          component: () => import("../pages/comptecompta/compteEdit.vue"),
        },
        {
          path: 'fournisseurs',
          component: () => import('../pages/fournisseurs/fournisseurs.vue'),
        },
        {
          path: 'create-fournisseur',
          component: () => import('../pages/fournisseurs/createFournisseur.vue'),
        },
        {
          meta: {
            title: "Edit fournisseur",
          },
          path: "/edit-fournisseur/:id(\\d+)",
          name: "edit-fournisseur",
          component: () => import("../pages/fournisseurs/fournisseurEdit.vue"),
        },
        {
          path: 'journal',
          component: () => import('../pages/compta/transactions.vue'),
        },
        {
          path: 'create-transaction',
          component: () => import('../pages/compta/createTransaction.vue'),
        },
        {
          meta: {
            title: "Edit transaction",
          },
          path: "/edit-transaction/:id(\\d+)",
          name: "edit-transaction",
          component: () => import("../pages/compta/editTransaction.vue"),
        },
        {
          meta: {
            title: "grand-livre",
          },
          path: "/grand-livre",
          name: "grand-livre",
          component: () => import("../pages/compta/grandlivre.vue"),
        },

        {
          path: 'projets',
          component: () => import('../pages/projets/projets.vue'),
        },
        {
          path: 'create-projet',
          component: () => import('../pages/projets/createProjet.vue'),
        },
        {
          meta: {
            title: "Edit projet",
          },
          path: "/edit-projet/:id(\\d+)",
          name: "edit-projet",
          component: () => import("../pages/projets/projetEdit.vue"),
        },
      
        {
          path: 'taches',
          component: () => import('../pages/taches/taches.vue'),
        },
        {
          path: 'create-tache',
          component: () => import('../pages/taches/createTache.vue'),
        },
        {
          meta: {
            title: "Edit tache",
          },
          path: "/edit-tache/:id(\\d+)",
          name: "edit-tache",
          component: () => import("../pages/taches/tacheEdit.vue"),
        },
        {
          path: 'users',
          component: () => import('../pages/users/users.vue'),
        },
        {
          path: 'create-user',
          component: () => import('../pages/users/createUser.vue'),
        },
        {
          meta: {
            title: "Edit user",
          },
          path: "/edit-user/:id(\\d+)",
          name: "edit-user",
          component: () => import("../pages/users/userEdit.vue"),
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

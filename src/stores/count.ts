// Import de Pinia
import { createPinia, defineStore } from 'pinia'
import { accountService } from '@/_services';
import { useRouter } from 'vue-router';


// Création d'une nouvelle instance de Pinia
const pinia = createPinia()

// Définition du store d'authentification
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: accountService.isLogged(),
    user: null
  }),

  // Actions pour la connexion et la déconnexion
  actions: {
     login(user) {
        this.isLoggedIn = true
        this.user = user
      },

     logout() {
      alert('deconecté')
     // accountService.logout()
      this.isLoggedIn = false
      //router.push('/auth/login')
    }
  }
})


